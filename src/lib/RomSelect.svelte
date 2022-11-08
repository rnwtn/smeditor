<script lang="ts">
  import { open } from "@tauri-apps/api/dialog";
  import { exists } from "@tauri-apps/api/fs";
  import { appDir } from "@tauri-apps/api/path";
  /* import { CheckSolid } from "svelte-awesome-icons" */
  export let callback: (filePath: string) => void;

  let filePath = "";
  let isRomLoaded = false;

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
        alert("hello");
      }
    } catch (err) {
      alert(err);
    }
  };
</script>

<div>
  <button on:click={selectFilePath}> asdf </button>
  <div />
</div>

<style>
</style>
