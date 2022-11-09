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
      <button class="nes-btn is-error" on:click|stopPropagation={onRemoved}
        >remove</button
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
    column-gap: 1.5em;
    padding: 1em 1em 0 1em;
  }

  .info {
    cursor: pointer;
  }

  .highlight {
    background-color: red;
  }
</style>
