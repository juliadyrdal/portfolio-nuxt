<!--Content component-->
<script setup>

</script>

<template>
    <div class="container my-12 text-[#333] flex flex-col md:flex-row gap-12 items-center">
      <!-- Image slot -->
      <div class="w-full md:w-1/2">
        <slot name="image" />
      </div>
      <!-- Content slot -->
      <div class="w-full md:w-1/2 flex items-center">
        <slot name="text" />
      </div>
    </div>
</template>
  