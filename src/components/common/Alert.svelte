<script lang="ts">
  export let title: string = "Title";
  export let classList: string = "Bordered";

  console.log(title);
</script>

<div class="modal raised rounded background-secondary {classList}">
  <h3 class="title rounded-top border-bottom">{title}</h3>
  <div class="content">
    <slot />
  </div>
</div>

<style lang="scss">
  .modal {
    width: 50vw;
    max-width: 30em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .title {
    width: 100%;
    padding-left: .3em;
    padding-right: .3em;
    background-color: var(--color-background-highlight);
  }

  .content {
    position: relative;
    padding: 1em 1em 1em 1em;
  }
</style>
