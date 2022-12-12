<script lang="ts">
</script>

<div class="modal raised rounded background-secondary">
  <slot />
</div>

<style lang="scss">
  .modal {
    position: fixed;
    min-width: 50vw;
    min-height: 50vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
