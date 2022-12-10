<script lang="ts">
</script>

<div class="modal raised rounded background-secondary">
  <slot />
</div>

<style lang="scss">
  .modal {
    position: fixed;
    width: 50%;
    height: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
