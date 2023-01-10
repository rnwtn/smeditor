<script lang="ts">
  import OpenRom from "./components/OpenRom.svelte";
  import HexEditor from "./components/HexEditor.svelte";
  import ContainerPrimary from "./components/common/ContainerPrimary.svelte";

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
  let currentPage = Page.OPEN_ROM;
</script>

<main class={theme}>
  <ContainerPrimary showGrid={true}>
    {#if currentPage === Page.OPEN_ROM}
      <OpenRom
        onRomOpened={(filePath) => {
          alert(filePath);
        }}
      />
    {:else if currentPage === Page.HEX_EDITOR}
      <HexEditor bind:bytes />
    {/if}
  </ContainerPrimary>
</main>

<style lang="scss">
  main {
    height: 100vh;
    width: 100vw;
  }
</style>
