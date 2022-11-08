<script lang="ts">
  import Icon from "fa-svelte";
  import { faX } from "@fortawesome/free-solid-svg-icons";

  export let name: string;
  export let filePath: string;
  export let onOpen: () => void;
  export let onRemoved: () => void;

  let highlight = "";
</script>

<div class="project-entry border-top {highlight}">
  <div
    class="info"
    on:click={onOpen}
    on:keypress={onOpen}
    on:mouseenter={() => (highlight = "highlight")}
    on:mouseleave={() => (highlight = "")}
  >
    <h2 class="name">{name}</h2>
    <p class="path">{filePath}</p>
  </div>
  <button
    class="rounded-full button warning"
    on:click|stopPropagation={onRemoved}
  ><Icon icon={faX}/></button>
</div>

<style>
  .project-entry {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 10px;
    color: var(--color-font-primary);
  }

  .info {
    width: 100%;
    cursor: pointer;
    padding: 10px;
  }

  .highlight {
    color: var(--color-font-light);
    background-color: var(--color-light);
  }

  .name {
    padding: 0;
    margin: 0;
  }


  .path {
    color: var(--color-font-dark);
    font-size: .8rem;
    margin: 7px 0 3px 0;
    padding: 0;
  }

  .button.warning {
    margin-right: 8px;
    width: 38px;
    height: 38px;
    pointer-events: all;
    font-size: 16px;
  }
</style>
