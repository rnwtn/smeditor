<script>
  import Icon from "fa-svelte";
  import { faPlus } from "@fortawesome/free-solid-svg-icons";

  import ProjectEntry from "./ProjectEntry.svelte";
  import RomSelect from "../RomSelect.svelte";
  import Modal from "../Modal.svelte";

  let isModalOpen = false;
</script>

<div class="container border-bottom primary">
  <Modal title="Open project" open={isModalOpen}>
    <div>
      <RomSelect
        callback={(filePath) => {
          alert(`FilePath: ${filePath}`);
        }}
      />
    </div>
  </Modal>
  <div class="header">
    <h1>Open Project</h1>
    <button class="button rounded accent" on:click={() => (isModalOpen = true)}
      ><Icon icon={faPlus} /></button
    >
  </div>
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

<style>
  .header {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-left: 10px;
    padding: 0;
  }
  .header h1 {
    color: var(--color-font-primary);
    margin: 10px 0;
  }
  .header button {
    margin-right: 10px;
    padding: 0;
    margin-top: auto;
    margin-bottom: auto;
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
</style>
