import { isBlogRoute } from '~/types'

describe('Test type BlogRoute', () => {
  const createBlogRoute = () => ({
    meta: {
      bid: 123,
      title: 'Test Case 1',
      time: '2021-12-29T18:49:38.312Z',
      type: 'md',
      tags: ['标签'],
    },
  })

  describe('Test isBlogRoute()', () => {
    it('should be truthy', () => {
      const blogRoute = createBlogRoute()
      expect(isBlogRoute(blogRoute)).toBeTruthy()
    })

    it('should be truthy with type "md"', () => {
      const blogRoute = createBlogRoute()
      blogRoute.meta.type = 'md'
      expect(isBlogRoute(blogRoute)).toBeTruthy()
    })

    it('should be truthy with type "vue"', () => {
      const blogRoute = createBlogRoute()
      blogRoute.meta.type = 'vue'
      expect(isBlogRoute(blogRoute)).toBeTruthy()
    })

    it('should be falsy because of incorrect type', () => {
      const blogRoute = createBlogRoute()
      blogRoute.meta.type = 'incorrect-type'
      expect(isBlogRoute(blogRoute)).toBeFalsy()
    })
  })
})
