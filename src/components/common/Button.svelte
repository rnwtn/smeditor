<script lang="ts">
  export let onclick: () => void;
</script>

<button class="raised hoverable rounded" on:click={onclick}>
  <slot></slot>
</button>

<style>
  button {
    padding: 0.5em 1em;
    font-size: 1.2rem;
    font-family: "Code Saver";
    font-weight: bold;
    text-shadow: 1px 1px 0 black;
    cursor: pointer;
    background-color: var(--color-accent-1);
    color: var(--text-primary);
  }
</style>
