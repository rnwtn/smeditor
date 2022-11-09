<script lang="ts">
  export let title: string;
  export let visible: boolean;
  export let onHide: () => void;
</script>

<!-- How to use: -->
<!-- ---------------------------- -->
<!-- <Model title="A good title" hidden={false}> -->
<!--   <h2>Subtitle:</h2> -->
<!--   <div>great information</div> -->
<!--   <button on:click{onOkClicked}>Ok</button> -->
<!-- </Model> -->

{#if visible}
  <div class="overlay" on:click={onHide} on:keydown={onHide} />
  <div class="modal">
    <h2 class="border-bottom">{title}</h2>
    <slot />
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    width: fit-content;
    padding: 10px;
    max-width: 90%;
    left: 50%;
    top: 25%;
    z-index: 999;
    transform: translate(-50%, -50%);
    background-color: var(--color-custom-neutral);
    border: 5px solid #000000;
  }

  .overlay {
    position: fixed;
    width: 99999px;
    height: 99999px;
    z-index: 998;
    background-color: rgba(0, 0, 0, .5);
  }

</style>
