<script setup lang="ts">
import { usePostsStore } from "~/stores/posts";
import { useRandomImage } from "~/composables/useRandomImage";

const store = usePostsStore();
const route = useRoute();
const id = route.params.id as string;
const { randomImage, refreshImage } = useRandomImage(`post-detail-${id}`);

const {
  data: post,
  pending,
  error,
} = await useAsyncData(`post-${id}`, () => store.fetchPost(id));

onMounted(() => {
  refreshImage();
});
</script>

<template>
  <section class="max-w-[1400px] mx-auto px-8 py-16">
    <div v-if="pending" class="text-center py-20 text-gray-500">
      Loading post...
    </div>

    <div v-else-if="error" class="text-center py-20 text-red-500">
      {{ error.message || "Failed to load post" }}
    </div>

    <article v-else-if="post" class="max-w-4xl mx-auto">
      <h1 class="text-[84px] mb-12">{{ post.title }}</h1>
      <ClientOnly>
        <NuxtImg
          :src="randomImage"
          class="w-full h-96 object-cover rounded-lg mb-8"
          :alt="post.title"
          loading="lazy"
        />
      </ClientOnly>
      <div class="prose prose-lg max-w-2xl">
        <p class="text-black">About</p>
        <p class="text-black text-[36px]">{{ post.description }}</p>
      </div>
    </article>
  </section>
</template>
