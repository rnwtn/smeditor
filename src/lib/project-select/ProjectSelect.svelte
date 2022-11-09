<script>
  import ProjectEntry from "./ProjectEntry.svelte";
  import RomSelect from "../RomSelect.svelte";
  import Modal from "../Modal.svelte";

  let isModalOpen = false;
  let shouldOverwrite = false;

  let openModal = () => (isModalOpen = true);
  let closeModal = () => (isModalOpen = false);
</script>

<Modal title="Start New Project" visible={isModalOpen} onHide={closeModal}>
  <div class="new-project-container">
    <RomSelect />

    <div>
      <label for="overwrite">Overwrite Source File</label>
      <div>
        <label>
          <input type="radio" class="nes-radio is-dark" name="overwrite" checked />
          <span>Yes</span>
        </label>
        <label>
          <input type="radio" class="nes-radio is-dark" name="overwrite" />
          <span>No</span>
        </label>
      </div>
    </div>

    <div class="nes-field">
      <label for="name_field">File Path</label>
      <input type="text" id="name_field" class="nes-input" disabled />
    </div>
  </div>
</Modal>
<div class="nes-container is-dark shadow">
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

  .new-project-container {
    display: flex;
    flex-direction: column;
    padding-top: 1em;
    row-gap: 1em;
  }

  .new-project-btn {
    position: absolute;
    top: 0.8em;
    right: 1rem;
  }

  .title {
    padding: 0;
    margin: 0;
  }

  .project-list {
    margin: 1.8rem -2rem -1.8rem -2rem;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
</style>
