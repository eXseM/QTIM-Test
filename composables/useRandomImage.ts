export const useRandomImage = (key?: string) => {
  const images = [
    'images/animal.jpg',
    'images/city.jpg',
    'images/nature.jpg'
  ]

  const getRandomImage = (): string => {
    const randomIndex = Math.floor(Math.random() * images.length)
    return images[randomIndex]
  }

  const uniqueKey = key || `random-image-${Math.random().toString(36).slice(2, 11)}`
  const randomImage = useState<string>(uniqueKey, () => getRandomImage())

  const refreshImage = (): void => {
    randomImage.value = getRandomImage()
  }

  return {
    randomImage,
    refreshImage
  }
}