<script lang="ts">
  import { getVersion } from "@tauri-apps/api/app";
  import { open } from "@tauri-apps/api/dialog";
  import { exists } from "@tauri-apps/api/fs";
  import { appDir } from "@tauri-apps/api/path";

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
  <div class="center content">
    <h1>Smeditor</h1>
    <p>v{appVersion}</p>
    <button on:click={selectFilePath}>Open Rom</button>
  </div>
</div>

<style lang="scss">
  .content > * {
    margin: 0.6em 0;
  }

  .page {
    font-size: 2.9rem;
  }
</style>
