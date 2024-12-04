<!--Content component-->
<script setup>

</script>

<template>
    <div class="container mb-6 text-[#333]">
        <h2 class="text-xl font-rundDisplay font-bold">
            <!--Heading slot-->
            <slot name="heading" />
        </h2>
        <!--Content slot-->
        <slot name="text" />
    </div>
</template>