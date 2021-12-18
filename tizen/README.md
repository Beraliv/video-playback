# Tizen

## Tizen Studio with CLI

1. [Download and install the Tizen Studio](https://docs.tizen.org/application/tizen-studio/setup/install-sdk/)

2. Make \*.bin file executable and then run it:

```bash
chmod +x web-cli_Tizen_Studio_4.5_macos-64.bin
./web-cli_Tizen_Studio_4.5_macos-64.bin
```

By default it will use `$HOME/tizen-studio` directory to install Tizen Studio with CLI.

To be able to use `tizen` and `sdb` CLI, don't forget to add this line to `~/.bashrc` or `~/.bash_profile`:

```bash
export PATH="$HOME/tizen-studio/tools/ide/bin:$HOME/tizen-studio/tools:$PATH"
```

3. Build and preview

```bash
pnpm run tizen:build
pnpm run tizen:preview
```

4. Create a certificate for you TV app

To be able to issue the certificate in [CLI](https://developer.tizen.org/ko/development/tizen-studio/web-tools/cli?langredirect=1#:~:text=clean%20%2D%2D%20~/workspace/basic-,Issuing%20a%20Tizen%20Certificate,-The%20command%20generates), please run:

```bash
tizen certificate --alias profile-name --password password --country en --state London --city London --unit development --name "Profile Name" --email profile-name@company.org --filename key -- ./tizen/public
```

It will create you a certificate in the folder `./tizen/public`

5. Switching you TV to Dev mode

Open you TV, go to Apps and enter "12345" on your remote control.

In pop-upped Developer Mode window, type in your laptop IP and click "OK".

Then reboot the TV by pressing "turn off" button for 2s or more until you see the brand logo.

6. Run it on your TV

```bash
pnpm run tizen:run
```
