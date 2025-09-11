import { defineStore } from 'pinia'
import type { Post } from '~/types/post'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Post[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)
  const page = ref<number>(1)
  const limit = ref<number>(8)
  const total = ref<number>(0)
  const api_url = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts'


  const setPosts = (newPosts: Post[]): void => {
    posts.value = newPosts
  }

  const setTotal = (newTotal: number): void => {
    total.value = newTotal
  }

  const setPage = (newPage: number): void => {
    page.value = newPage
  }

  const setLoading = (isLoading: boolean): void => {
    loading.value = isLoading
  }

  const setError = (errorMessage: string | null): void => {
    error.value = errorMessage
  }

  const fetchPost = async (id: string): Promise<Post> => {
    return await $fetch<Post>(
      `${api_url}/${id}`
    )
  }
  const fetchAllPosts = async (): Promise<Post[]> => {
    return await $fetch<Post[]>(
      api_url
    )
  }

  const fetchPaginatedPosts = async (page: number, limit: number): Promise<Post[]> => {
    return await $fetch<Post[]>(
      `${api_url}?page=${page}&limit=${limit}`
    )
  }

  return {
    posts,
    loading,
    error,
    page,
    limit,
    total,
    setPosts,
    setTotal,
    setPage,
    setLoading,
    setError,
    fetchAllPosts,
    fetchPaginatedPosts,
    fetchPost
  }
})