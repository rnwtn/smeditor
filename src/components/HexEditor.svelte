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
  let editingIndex: number = -1;

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

  function onByteClick(index: number) {
    editingIndex = index;
  }
</script>

<div class="page monospaced">
  <div id="settings-container" />
  <div id="bytes-container" class="grid">
    {#each bytes as byte, index}
      <div
        class="byte"
        class:hovered={index === hoveredIndex}
        class:editing={index === editingIndex}
        on:focus
        on:mouseover={() => onByteHovered(index)}
        on:click={() => onByteClick(index)}
      >
        {toHex(byte)}
      </div>
    {/each}
  </div>
  <div id="preview-container" class="grid">
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
    font-size: 1.1rem;
    user-select: none;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
  }

  .hovered {
    background-color: var(--color-background-secondary);
    cursor: default;
  }

  .byte {
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 0.25em;
    border-bottom: 0.25em solid var(--color-background-primary);
  }

  .byte.editing {
    background-color: var(--color-background-highlight);
    animation: borderblink 1s infinite;
    border-radius: 2px;
  }

  .preview {
    display: flex;
    justify-content: center;
    padding: 0.25em 0.1em;
    border-bottom: 0.25em solid var(--color-background-primary);
  }

  #settings-container {
    position: absolute;
  }

  .byte:nth-child(even) {
    color: var(--color-text-subdued);
  }

  @keyframes borderblink {
    0% {
      border-bottom: 0.25em solid var(--color-accent-3);
    }
    30% {
      border-bottom: 0.25em solid var(--color-accent-3);
    }
    60% {
      border-bottom: 0.25em solid var(--color-background-primary);
    }
    100% {
      border-bottom: 0.25em solid var(--color-accent-3);
    }
  }
</style>
