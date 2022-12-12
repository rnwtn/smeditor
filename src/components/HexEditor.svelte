<script lang="ts">
  import { toAscii } from "../utils/asciiUtils";
  import { range, leftPad } from "../utils/numberUtils";

  export let bytes: number[] = [];

  let hoveredIndex: number = -1;
  let editingIndex: number = -1;
  let scrollOffset: number = 0;
  $: numLinesShown = Math.min(Math.floor(bytes.length / 16), 0);
  $: {
    //console.log(numLinesShown);
  }

  function toHex(num: number): string {
    return num.toString(16).toUpperCase();
  }

  function fromHex(hex: string): number {
    return 0;
  }

  function onByteHovered(e: Event, index: number) {
    e.preventDefault();
    e.stopPropagation();
    hoveredIndex = index;
  }

  function onByteClick(e: Event, index: number) {
    e.preventDefault();
    e.stopPropagation();
    editingIndex = index;
  }

  function onKeydown(e: Event) {

  }
</script>

<div class="page monospaced">
  <div id="settings-container" />
  <div id="line-number-container">
    {#each range(scrollOffset, bytes.length, 16) as line}
      <div class="line-number">
        {leftPad(toHex(line), 8)}
      </div>
    {/each}
  </div>
  <div id="bytes-container" class="grid">
    {#each bytes as byte, index}
      <span
        class="byte"
        class:hovered={index === hoveredIndex}
        class:editing={index === editingIndex}
        on:mouseover={(e) => onByteHovered(e, index)}
        on:click={(e) => onByteClick(e, index)}
      >
        {leftPad(toHex(byte), 2)}
      </span>
    {/each}
  </div>
  <div id="preview-container" class="grid">
    {#each bytes as byte, index}
      <span
        class="preview"
        class:hovered={index === hoveredIndex}
        class:editing={index === editingIndex}
        on:mouseover={(e) => onByteHovered(e, index)}
        on:click={(e) => onByteClick(e, index)}
      >
        {toAscii(byte)}
      </span>
    {/each}
  </div>
</div>

<svelte:body
  on:click={() => (editingIndex = -1)}
  on:mouseover={() => (hoveredIndex = -1)}
  on:keydown={() => console.log("Hello")}
/>

<style lang="scss">
  * {
    user-select: none;
  }

  .page {
    display: flex;
    column-gap: 1em;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 1.1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
  }

  .line-number {
    padding: 0.25em;
  }

  .byte {
    position: relative;
    background-color: var(--color-background-primary);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 0.25em;
  }

  .byte.editing {
    background-color: var(--color-background-highlight);
    animation: background-blink 1s infinite;
    border-radius: 2px;
  }

  .preview {
    display: flex;
    justify-content: center;
    padding: 0.25em 0.1em;
  }

  .preview.editing {
    background-color: var(--color-background-highlight);
  }

  .hovered {
    background-color: var(--color-background-secondary);
    cursor: default;
  }

  #settings-container {
    position: absolute;
  }

  .byte:nth-child(even) {
    color: var(--color-text-subdued);
  }

  @keyframes background-blink {
    0% {
      background: linear-gradient(
        var(--color-background-highlight),
        var(--color-background-highlight) 90%,
        var(--color-accent-3) 90%
      );
    }
    30% {
      background: linear-gradient(
        var(--color-background-highlight),
        var(--color-background-highlight) 90%,
        var(--color-accent-3) 90%
      );
    }
    60% {
      background: linear-gradient(
        var(--color-background-highlight),
        var(--color-background-highlight) 100%
      );
    }
    100% {
      background: linear-gradient(
        var(--color-background-highlight),
        var(--color-background-highlight) 90%,
        var(--color-accent-3) 90%
      );
    }
  }
</style>
