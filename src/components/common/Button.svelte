<script lang="ts">
  export let onclick: () => void;
</script>

<button class="raised hoverable rounded" on:click={onclick}>
  <slot></slot>
</button>

<style>
  button {
    padding: 0.3em .75em;
    font-weight: bold;
    cursor: pointer;
    background-color: var(--color-accent-1);
    color: var(--text-primary);
  }
</style>
