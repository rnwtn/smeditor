<script lang="ts">
  export let name: string;
  export let filePath: string;
  export let onOpen: () => void;
  export let onRemoved: () => void;

  let highlight = "";
</script>

<div class="project-entry border-bottom {highlight}">
  <div
    class="info"
    on:click={onOpen}
    on:keypress={onOpen}
    on:mouseenter={() => (highlight = "highlight")}
    on:mouseleave={() => (highlight = "")}
  >
    <p>{name}</p>
    <p>{filePath ?? ""}</p>
  </div>
  {#if onRemoved}
    <div>
      <button
        class="nes-btn is-error btn-remove"
        on:click|stopPropagation={onRemoved}>Remove</button
      >
    </div>
  {:else}
    <div />
  {/if}
</div>

<style>
  .project-entry {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 2em;
  }

  p {
    margin: 0;
    padding: 0;
  }

  .info {
    cursor: pointer;
    padding: 1em 1em 1em 1em;
  }

  .btn-remove {
    margin-right: 1em;
  }

  .highlight {
    background-color: var(--color-custom-neutral);
  }
</style>
