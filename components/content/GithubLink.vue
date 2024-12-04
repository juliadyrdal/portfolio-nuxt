<script setup>
import IconGithub from '~/assets/github-mi.svg'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
</script>

<!--Content component-->
<template>
    <div class="my-8 text-[#333] flex gap-3">
        <IconGithub class="h-[2rem]" :fontControlled="false" />
        <div class="flex gap-2 hover:underline underline-offset-4">
            <!--Content slot-->
            <slot name="link" />
            <ArrowTopRightOnSquareIcon class="size-6" />
        </div> 
    </div>
</template>