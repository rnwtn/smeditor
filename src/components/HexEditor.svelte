<script lang="ts">
  import { toAscii } from "../utils/asciiUtils";

  export let bytes: number[] = [];

  // for testing
  for (let i = 0; i < 259; i++) {
    bytes.push(Math.floor(Math.random() * 255));
  }
  bytes = [...bytes];
  // end testing

  let hoveredIndex: number = -1;
  function toHex(num: number): string {
    let hex: string = num.toString(16).toUpperCase();
    console.log(hex);
    return ("00" + hex).slice(-2);
  }

  function fromHex(hex: string): number {
    return 0;
  }

  function onByteHovered(index: number) {
    hoveredIndex = index;
  }
</script>

<div class="page">
  <div id="settings-container" />
  <div id="bytes-container">
    {#each bytes as byte, index}
      <div
        class="byte"
        class:hovered={index === hoveredIndex}
        on:focus
        on:mouseover={() => onByteHovered(index)}
      >
        {toHex(byte)}
      </div>
    {/each}
  </div>
  <div id="preview-container">
    {#each bytes as byte, index}
      <span
        class="preview"
        class:hovered={index === hoveredIndex}
        on:focus
        on:mouseover={() => onByteHovered(index)}
      >
        {toAscii(byte)}
      </span>
    {/each}
  </div>
</div>

<style lang="scss">
  .page {
    display: flex;
    column-gap: 1em;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .byte {
    display: flex;
    justify-content: center;
    padding: 0.25em;
    user-select: none;
  }

  .preview {
    display: flex;
    justify-content: center;
    padding: 0.25em 0.05em;
    user-select: none;
  }

  .byte.hovered,
  .preview.hovered {
    background-color: var(--text-warning);
    cursor: default;
  }

  #bytes-container,
  #preview-container {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
  }

  #settings-container {
    position: absolute;
  }
</style>
