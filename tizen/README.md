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

<!-- TODO: how to create certificate -->

5. Enter laptop IP on your TV

<!-- TODO: how to enter IP on your TV -->

6. Run it on your TV

```bash
pnpm run tizen:run
```
