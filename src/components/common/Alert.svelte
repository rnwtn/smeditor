<script lang="ts">
  export let title: string = "Title";

  console.log(title);
</script>

<div class="modal raised rounded background-secondary">
  <h1 class="title text-raised rounded-top border-bottom">{title}</h1>
  <div class="content">
    <slot />
  </div>
</div>

<style lang="scss">
  .modal {
    position: fixed;
    min-width: 10vw;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
  }

  .title {
    width: 100%;
    padding-left: .3em;
    padding-right: .3em;
    background-color: var(--color-background-highlight);
    text-align: center;
    font-size: 3.5rem;
  }

  .content {
    padding-top: .5em;
    padding-bottom: .5em;
  }
</style>
