<script lang="ts">
  import RomSelect from "./lib/RomSelect.svelte";
  import Modal from "./lib/Modal.svelte";
  import ProjectSelect from "./lib/project-select/ProjectSelect.svelte";
  
</script>

<main>
  <h1>Welcome to Tauri!</h1>
  <Modal title="Open project">
    <div>
      <RomSelect
        callback={(filePath) => {
          alert(`FilePath: ${filePath}`);
        }}
      />
    </div>
    <ProjectSelect />
  </Modal>
</main>

<style>
</style>
