<script lang="ts">
  export let name: string;
  export let filePath: string;
  export let onOpen: () => void;
  export let onRemoved: () => void;

  let highlight = "";
</script>

<div class="container border-top {highlight}">
  <div
    class="info"
    on:click={onOpen}
    on:keypress={onOpen}
    on:mouseenter={() => highlight = "highlight"}
    on:mouseleave={() => highlight = ""}
  >
    <h2 class="name">{name}</h2>
    <h6 class="path">{filePath}</h6>
  </div>
  <button
    class="rounded-full border warning warning-hover btn-remove"
    on:click|stopPropagation={onRemoved}></button
  >
</div>

<style>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 10px;
  }

  .info {
    width: 100%;
    cursor: pointer;
    padding: 10px;
  }

  .highlight {
    color: var(--color-font-focus);
    background-color: var(--color-light);
  }

  .name,
  .path {
    padding: 0;
    margin: 0;
  }

  .name {
    font-size: 2rem;
  }

  .path {
    color: var(--color-font-secondary);
  }

  .info > * {
    padding: 0;
    margin: 0;
  }

  .btn-remove {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    width: 38px;
    height: 38px;
    border: none;
    cursor: pointer;
  }

  .btn-remove {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    width: 38px;
    height: 38px;
    border: none;
    cursor: pointer;
    pointer-events: all;
  }
</style>
