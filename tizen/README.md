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
