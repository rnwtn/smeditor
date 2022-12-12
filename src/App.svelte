<script lang="ts">
  import OpenRom from "./components/OpenRom.svelte";
  import HexEditor from "./components/HexEditor.svelte";

  enum Page {
    OPEN_ROM,
    HEX_EDITOR,
  }

  let bytes: number[] = [];
  // for testing
  for (let i = 0; i < 259; i++) {
    bytes.push(Math.floor(Math.random() * 255));
  }
  bytes = [...bytes];
  // end testing

  let theme = "default";
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
    <HexEditor bind:bytes={bytes}/>
  {/if}
</main>

<style lang="scss">
  main {
    background-color: var(--background-base);
  }
</style>
