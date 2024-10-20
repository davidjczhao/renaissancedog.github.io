<script>
  export let title, body, link
</script>
<div class="flex flex-col p-4 mb-4 bg-green-900 rounded-xl">
  <h3 class="text-3xl text-gray-100 pb-2">{title}</h3>
  <p class="text-gray-100 text-xl">{body}</p>
  <a class="text-cyan-400 text-xl underline break-words" target="_blank" href={link}>{link}</a>
</div>