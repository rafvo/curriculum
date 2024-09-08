
<script lang="ts" setup>
import { useEnglishVersion } from '@/composables/use-versions/use-english-version'
import { Curriculum } from '@/components/curriculum'

const { curriculum } = useEnglishVersion()
</script>

<template>
    <div class="w-100">
        <Curriculum.Root :curriculum="curriculum" />
    </div>
</template>
