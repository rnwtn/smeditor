<script>
  import ProjectEntry from "./ProjectEntry.svelte";
  import RomSelect from "../RomSelect.svelte";
  import Modal from "../Modal.svelte";

  let isModalOpen = false;
  let openModal = () => (isModalOpen = true);
  let closeModal = () => (isModalOpen = false);
</script>

<Modal title="start new project" open={isModalOpen}>
  <div>
    <button class="nes-btn" on:click={closeModal}>cancel</button>
    <button class="nes-btn is-primary">confirm</button>
  </div>
</Modal>
<div class="nes-container is-dark with-title">
  <p class="title">Open Project</p>
  <button class="nes-btn is-primary new-project-btn" on:click={openModal}>
    New Project
  </button>
  <div class="project-list border-top">
    <ProjectEntry
      name="My Awesome Project"
      filePath="/home/me/my_awesome_project.smc"
      onOpen={() => alert("opened")}
      onRemoved={() => alert("removed")}
    />
    <ProjectEntry
      name="My Awesome Project"
      filePath="/home/me/my_awesome_project.smc"
      onOpen={() => alert("opened")}
      onRemoved={() => alert("removed")}
    />
    <ProjectEntry
      name="My Awesome Project"
      filePath="/home/me/my_awesome_project.smc"
      onOpen={() => alert("opened")}
      onRemoved={() => alert("removed")}
    />
  </div>
</div>

<style>
  .new-project-btn {
    position: absolute;
    top: 0.4em;
    right: 2rem;
  }

  .project-list {
    margin-top: 3rem;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
</style>
