<script lang="ts">
  import { getVersion } from "@tauri-apps/api/app";
  import { open } from "@tauri-apps/api/dialog";
  import { exists } from "@tauri-apps/api/fs";
  import { appDir } from "@tauri-apps/api/path";
  import Button from "./common/Button.svelte";
  import Alert from "./common/Alert.svelte";

  export let onRomOpened: (filePath: string) => void;

  let filePath = "";
  let appVersion = "";

  const init = async () => {
    try {
      appVersion = await getVersion();
    } catch (e) {
      appVersion = "???";
    }
  };
  init();

  const selectFilePath = async () => {
    try {
      let selected = await open({
        directory: false,
        multiple: false,
        defaultPath: await appDir(),
      });

      if (Array.isArray(selected)) {
        selected = selected[0];
      }

      if (selected !== null) {
        filePath = selected;
        await exists(filePath, {});
        onRomOpened(filePath);
      }
    } catch (err) {
      alert(err);
    }
  };
</script>

<div>
  <Alert title="Smeditor">
    <div class="content center text-raised">
      <Button onclick={selectFilePath}>Open Rom</Button>
      <p>v{appVersion}</p>
    </div>
  </Alert>
</div>

<style lang="scss">
  .content {
    row-gap: 0.7em;
    text-align: center;
  }

  .content p {
    margin-bottom: 10px;
    position: absolute;
    left: 0.3em;
    top: 0em;
    font-size: 0.7em;
  }
</style>
