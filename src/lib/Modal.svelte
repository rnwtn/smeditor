<script lang="ts">
  export let title: string;
  export let open: boolean;
</script>

<!-- How to use: -->
<!-- ---------------------------- -->
<!-- <Model title="A good title" hidden={false}> -->
<!--   <h2>Subtitle:</h2> -->
<!--   <div>great information</div> -->
<!--   <button on:click{onOkClicked}>Ok</button> -->
<!-- </Model> -->

{#if open}
  <div class="shadow border">
    <h1 class="border-bottom">{title}</h1>
    <slot />
  </div>
{/if}

<style>
  div {
    width: 90%;
    max-width: 800px;
    margin: auto;
    background-color: var(--color-primary);
    color: var(--color-font-primary);
    border: 2px solid var(--color-dark);
    border-radius: 8px;
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-50%, -50%);
  }

  h1 {
    padding: 20px;
    border-radius: 8px 8px 0 0;
    margin: 0;
    background-color: var(--color-light);
  }
</style>
