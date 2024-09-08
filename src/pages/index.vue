
<script lang="ts" setup>
import { usePortugueseVersion } from '@/composables/use-versions/use-portuguese-version'
import { Curriculum } from '@/components/curriculum'

const { curriculum } = usePortugueseVersion()
</script>

<template>
    <div class="w-100">
        <Curriculum.Root :curriculum="curriculum" />
    </div>
</template>
