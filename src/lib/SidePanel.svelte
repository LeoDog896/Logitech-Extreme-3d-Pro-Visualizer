<script lang="ts">
  import type { ControllerData } from "$lib/controllerData"

  export let data: ControllerData
</script>
<div class="flex flex-row w-1/2">
  <button class="flex-grow m-4 bg-gray-200 px-4 py-2 rounded-md" class:bg-gray-300={data.buttons.side_panel.left_top}>Top Left</button>
  <button class="flex-grow m-4 bg-gray-200 px-4 py-2 rounded-md" class:bg-gray-300={data.buttons.side_panel.middle_top}>Top Middle</button>
  <button class="flex-grow m-4 bg-gray-200 px-4 py-2 rounded-md" class:bg-gray-300={data.buttons.side_panel.right_top}>Top Right</button>
</div>
<br>
<div class="flex flex-row w-1/2">
  <button class="flex-grow m-4 bg-gray-200 px-4 py-2 rounded-md" class:bg-gray-300={data.buttons.side_panel.left_bottom}>Bottom Left</button>
  <button class="flex-grow m-4 bg-gray-200 px-4 py-2 rounded-md" class:bg-gray-300={data.buttons.side_panel.middle_bottom}>Bottom Middle</button>
  <button class="flex-grow m-4 bg-gray-200 px-4 py-2 rounded-md" class:bg-gray-300={data.buttons.side_panel.right_bottom}>Bottom Right</button>
</div>