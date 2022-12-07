export class AssertionError extends Error {
  name = 'AssertionError'
}

export function isTypedArray<T>(
  maybeArray: unknown,
  predicate: (element: unknown) => element is T,
): maybeArray is T[] {
  if (!Array.isArray(maybeArray))
    return false
  for (const element of maybeArray) {
    if (!predicate(element))
      return false
  }
  return true
}
