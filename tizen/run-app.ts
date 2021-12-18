import { execSync } from "child_process";
import {
  SECURITY_PROFILE_NAME,
  SECURITY_PROFILE_PASSWORD,
  AUTHOR_CERTIFICATE_PATH,
  BUILD_OUTPUT_PATH,
  TV_IP,
} from "./.app-example";

// TODO: generate it based on SECURITY_PROFILE_NAME
const WGT_NAME = "beraliv000";

const exitWithError = (message: string, error?: unknown) => {
  console.error(message);
  if (error) {
    console.error(error);
  }
  process.exit(1);
};

if (!SECURITY_PROFILE_NAME) {
  exitWithError("❌ Please, provide SECURITY_PROFILE_NAME");
}
console.log("✅ SECURITY_PROFILE_NAME is provided");

if (!SECURITY_PROFILE_PASSWORD) {
  exitWithError("❌ Please, provide SECURITY_PROFILE_PASSWORD");
}
console.log("✅ SECURITY_PROFILE_PASSWORD is provided");

if (!AUTHOR_CERTIFICATE_PATH) {
  exitWithError("❌ Please, provide AUTHOR_CERTIFICATE_PATH");
}
try {
  execSync(`
        if [ -f ${AUTHOR_CERTIFICATE_PATH} ]; then
            exit 0;
        else
            exit 1;
        fi
    `);

  console.log("✅ AUTHOR_CERTIFICATE_PATH is provided and exists");
} catch {
  exitWithError(
    `❌ AUTHOR_CERTIFICATE doesn't exist, please check the path ${AUTHOR_CERTIFICATE_PATH}`
  );
}

if (!BUILD_OUTPUT_PATH) {
  exitWithError("❌ Please, provide BUILD_OUTPUT_PATH");
}
console.log("✅ BUILD_OUTPUT_PATH is provided");

try {
  /**
   * https://developer.tizen.org/ko/development/tizen-studio/web-tools/cli?langswitch=ko#Manage_sec_prof
   */
  execSync(
    `tizen security-profiles add --name ${SECURITY_PROFILE_NAME} --password ${SECURITY_PROFILE_PASSWORD} -a ${AUTHOR_CERTIFICATE_PATH}`,
    {
      stdio: "inherit",
    }
  );
  console.log("✅ Successfully added security profile");
} catch (error: unknown) {
  exitWithError("❌ Cannot add security profile", error);
}

try {
  /**
   * https://developer.tizen.org/ko/development/tizen-studio/web-tools/cli?langswitch=ko#Pack_tizen_app
   *
   * type – wgt (Tizen Web package)
   */
  execSync(
    `tizen package --type wgt --sign ${SECURITY_PROFILE_NAME} -- ${BUILD_OUTPUT_PATH}`,
    {
      stdio: "inherit",
    }
  );
  console.log("✅ Successfully created Tizen web package");
} catch (error: unknown) {
  exitWithError("❌ Cannot create Tizen web package", error);
}

/**
 * sdb – Smart Development Bridge
 *
 * https://developer.tizen.org/ko/development/tizen-studio/web-tools/running-and-testing-your-app/sdb?langredirect=1
 */

try {
  execSync(`sdb disconnect`, {
    stdio: "inherit",
  });
  console.log("✅ Successfully disconnected");
} catch (error: unknown) {
  exitWithError("❌ Cannot disconnect", error);
}

try {
  execSync(`sdb connect ${TV_IP}`, {
    stdio: "inherit",
  });
  console.log(`✅ Successfully connected to ${TV_IP}`);
} catch (error: unknown) {
  exitWithError(`❌ Cannot connect to ${TV_IP}`, error);
}

try {
  execSync(`sdb uninstall ${WGT_NAME}`, {
    stdio: "inherit",
  });
  console.log(`✅ Successfully uninstalled old package [${WGT_NAME}]`);
} catch (error: unknown) {
  exitWithError(`❌ Cannot uninstall old package [${WGT_NAME}]`, error);
}

try {
  execSync(`tizen install --name ${WGT_NAME}.wgt -- ${BUILD_OUTPUT_PATH}`, {
    stdio: "inherit",
  });
  console.log(
    `✅ Successfully installed new package from ${BUILD_OUTPUT_PATH}`
  );
} catch (error: unknown) {
  exitWithError(`❌ Cannot install new package`, error);
}
