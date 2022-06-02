<script lang="ts">
  import { Canvas, Layer } from "svelte-canvas";

  export let throttleValue: number

  $: render = ({ context, width, height }: { context: CanvasRenderingContext2D, width: number, height: number }) => {
    const percentage = throttleValue / 255;

    context.fillStyle = `rgb(0, ${throttleValue}, 0)`

    context.fillRect(0, height - height * percentage, width, height)
  };
</script>

<Canvas style="display: inline; background-color: gray;" width={100} height={100}>
  <Layer {render} />
</Canvas>