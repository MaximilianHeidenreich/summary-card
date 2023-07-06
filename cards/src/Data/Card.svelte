<script lang="ts">
  import { onMount } from "svelte"
  import type { Context } from "deta-space-cards"

  export let context: Context

  let message = 'loading...'
  onMount(async () => {
    const response = await context.fetch('/api/message')
    const data = await response.json()
    message = data.message
  })
</script>

<h1>Message from the app: {message}</h1>
