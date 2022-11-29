<script lang="ts">
  import OpenRom from "./pages/OpenRom.svelte";
  import HexEditor from "./pages/HexEditor.svelte";

  enum Page {
    OPEN_ROM,
    HEX_EDITOR,
  }

  let theme = "encore";
  let currentPage = Page.HEX_EDITOR;
</script>

<main class={theme}>
  {#if currentPage === Page.OPEN_ROM}
    <OpenRom
      onRomOpened={(filePath) => {
        alert(filePath);
      }}
    />
  {:else if currentPage === Page.HEX_EDITOR}
    <HexEditor />
  {/if}
</main>

<style lang="scss">
  main {
    background-color: var(--background-base);
  }
</style>
