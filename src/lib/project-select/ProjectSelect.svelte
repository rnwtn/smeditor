<script>
  import ProjectEntry from "./ProjectEntry.svelte";
</script>

<div>
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
</style>
