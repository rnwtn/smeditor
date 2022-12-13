<script lang="ts">
  export let title: string = "Title";

  console.log(title);
</script>

<div class="modal raised rounded background-secondary">
  <h3 class="title rounded-top border-bottom">{title}</h3>
  <div class="content">
    <slot />
  </div>
</div>

<style lang="scss">
  .modal {
    position: fixed;
    width: 50vw;
    max-width: 30em;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .title {
    width: 100%;
    font-size: 200%;
    padding-left: .3em;
    padding-right: .3em;
    background-color: var(--color-background-highlight);
  }

  .content {
    position: relative;
    padding: 1em 1em 1em 1em;
  }
</style>
