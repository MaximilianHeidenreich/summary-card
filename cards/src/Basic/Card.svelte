<script lang="ts">
  import type { Context } from "deta-space-cards";

  export let result: string
  export let context: Context

  let count = 0

  context.addAction('Copy Count', 'clipboard', () => {
    navigator.clipboard.writeText(count.toString())
    context.showSuccess('Copied!')
  })
</script>

<h1>Result {result}</h1>

<button on:click={() => count++}>Count {count}</button>