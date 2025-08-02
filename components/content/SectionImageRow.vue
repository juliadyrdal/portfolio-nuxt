<!--Content component-->
<template>
    <div class="container my-12 text-[#333] realtive">
      <!-- Image slot -->
      <div class="w-full my-[8rem] flex gap-4">
        <slot name="image1" />
        <slot name="image2" />
        <slot name="image3" />
        <slot name="image4" />
      </div>
    </div>
</template>