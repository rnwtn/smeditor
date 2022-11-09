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
  <div class="overlay" />
  <div class="shadow modal">
    <p>{title}</p>
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
    background-color: #ffffff;
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
