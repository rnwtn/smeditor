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

<div class="page">
  <Alert>
    <div class="content center text-raised">
      <h1>Smeditor</h1>
      <p>v{appVersion}</p>
      <Button onclick={selectFilePath}>Open Rom</Button>
    </div>
  </Alert>
</div>

<style lang="scss">
  h1 {
    line-height: .8;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: .7em;
  }

  .page {
    font-size: 2.9rem;
  }
</style>
