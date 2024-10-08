
<script lang="ts" setup>
import { Main } from '@/components/main';
import { Header } from '@/components/header';
import { Section } from '@/components/section';
import { Icon } from '@/components/icons'
import { defineProps } from 'vue';
import type { Curriculum } from '@/composables/use-versions/types';

const props = defineProps<{
    curriculum: Curriculum;
}>();
</script>

<template>
    <div class="w-100">
        <Header.Root class="px-20">
            <Header.Title>
                {{ props.curriculum.name }}
            </Header.Title>

            <Header.Subtitle class="text-center">
                {{ props.curriculum.description }}
            </Header.Subtitle>

            <Header.Subtitle class="flex text-center">
                <Icon.Location class="w-3 mr-2" />
                {{ props.curriculum.location }}
            </Header.Subtitle>
        </Header.Root>

        <Main.Root class="container mx-auto max-w-[46rem]">
            <Section.Root>
                <div class="grid grid-cols-3 gap-5 mt-4">
                    <Section.Content class="col-span-1">
                        <Section.Title>
                            {{ props.curriculum.contact.title }}
                        </Section.Title>

                        <Section.ListItem>
                            <Section.Item class="flex">
                                <Icon.Email class="w-5 mr-2" />
                                <Section.Link :href="`mailto:${props.curriculum.contact.email}`" target="_blank">
                                    {{ props.curriculum.contact.email }}
                                </Section.Link>
                            </Section.Item>

                            <Section.Item class="flex">
                                <Icon.Whatsapp class="w-5 mr-2" />
                                <Section.Link :href="`https://wa.me/${props.curriculum.contact.whatsapp.cleanNumber}`"
                                    target="_blank">
                                    {{ props.curriculum.contact.whatsapp.number }}
                                </Section.Link>
                            </Section.Item>

                            <Section.Item class="flex">
                                <Icon.Linkedin class="w-5 mr-2" />
                                <Section.Link :href="props.curriculum.contact.linkedin.url" target="_blank">
                                    {{ props.curriculum.contact.linkedin.title }}
                                </Section.Link>
                            </Section.Item>

                            <Section.Item class="flex">
                                <Icon.Github class="w-5 mr-2" />
                                <Section.Link :href="props.curriculum.contact.github.url" target="_blank">
                                    {{ props.curriculum.contact.github.title }}
                                </Section.Link>
                            </Section.Item>
                        </Section.ListItem>
                    </Section.Content>

                    <Section.Content class="col-span-1 justify-self-center">
                        <Section.Title>
                            {{ props.curriculum.languages.title }}
                        </Section.Title>

                        <Section.ListItem>
                            <Section.Item v-for="item in props.curriculum.languages.items" :key="item.id">
                                <Section.Text>{{ item.name }} ({{ item.level }})</Section.Text>
                            </Section.Item>
                        </Section.ListItem>
                    </Section.Content>

                    <Section.Content class="col-span-1">
                        <Section.Title>
                            {{ props.curriculum.curriculumProject.title }}
                        </Section.Title>

                        <Section.ListItem>
                            <Section.Item>
                                <Section.Link :href="props.curriculum.curriculumProject.url" target="_blank">
                                    {{ props.curriculum.curriculumProject.name }}
                                </Section.Link>
                                <Section.Infotext>
                                    {{ props.curriculum.curriculumProject.description }}
                                </Section.Infotext>
                            </Section.Item>
                        </Section.ListItem>
                    </Section.Content>
                </div>

                <Section.Content>
                    <Section.Title>
                        {{ props.curriculum.experiences.title }}
                    </Section.Title>

                    <Section.Col v-for="item in props.curriculum.experiences.items" :key="item.id">
                        <Section.Subtitle>
                            {{ item.position }}
                        </Section.Subtitle>

                        <Section.Text>
                            {{ item.company }} · {{ item.typeOfEmployment }}
                        </Section.Text>

                        <Section.Subtext>
                            {{ item.startedIn }} - {{ item.endedIn }}

                            <template v-if="item.duration">
                                · {{ item.duration }}
                            </template>

                            · {{ item.typeOfLocation }}
                        </Section.Subtext>

                        <Section.Text>
                            <strong>{{ item.competences.title }}:</strong>
                            {{ item.competences.items.join(' · ') }}
                        </Section.Text>
                    </Section.Col>
                </Section.Content>

                <Section.Content>
                    <Section.Title>
                        {{ props.curriculum.academicTraining.title }}
                    </Section.Title>

                    <Section.ListItem>
                        <Section.Item v-for="item in props.curriculum.academicTraining.items" :key="item.id">
                            <SectionText>
                                {{ item.endedIn }} <small>({{ item.status }})</small> - {{ item.course }}, {{
                                    item.institution }}
                                <small>({{ item.level }})</small>
                            </SectionText>
                        </Section.Item>
                    </Section.ListItem>
                </Section.Content>

                <Section.Content>
                    <Section.Title>
                        {{ props.curriculum.complementaryCourses.title }}
                    </Section.Title>

                    <Section.ListItem>
                        <Section.Item v-for="item in props.curriculum.complementaryCourses.items" :key="item.id">
                            <SectionText>
                                {{ item.endedIn }} <small>({{ item.status }})</small> - {{ item.course }}, {{
                                    item.institution }}
                            </SectionText>
                        </Section.Item>
                    </Section.ListItem>
                </Section.Content>
            </Section.Root>
        </Main.Root>
    </div>
</template>
