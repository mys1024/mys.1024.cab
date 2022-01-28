import { isBoolean, isNumber, isString } from '@vueuse/core'
import { AssertionError, isTypedArray } from '~/utils/type'

describe('Test isTypedArray()', () => {
  it('should be truthy, case 1', () => {
    const arr = [1, 2, 3]
    expect(isTypedArray(arr, isNumber)).toBeTruthy()
  })

  it('should be truthy, case 2', () => {
    const arr = ['foo', 'bar']
    expect(isTypedArray(arr, isString)).toBeTruthy()
  })

  it('should be falsy, case 1', () => {
    const arr = ['foo', 'bar']
    expect(isTypedArray(arr, isBoolean)).toBeFalsy()
  })

  it('should be falsy, case 2', () => {
    const arr = ['foo', 'bar', true]
    expect(isTypedArray(arr, isString)).toBeFalsy()
  })
})

describe('Test class AssertionError', () => {
  it('should be truthy, case 1', () => {
    const message = 'this is an AssertionError'
    const err = new AssertionError(message)
    expect(err.name).toBe('AssertionError')
    expect(err.message).toBe(message)
  })
})
