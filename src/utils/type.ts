import type { RouteLocation, RouteRecord } from 'vue-router'
import type { BlogRoute, BlogRouteLocation, BlogRouteRecord } from '~/types'

class AssertionError extends Error {
  name = 'AssertionError'
}

function isBlogRoute(obj: any): obj is BlogRoute {
  const routeNameMatched = obj?.name?.match(/^blog-\d+$/)
  if (!routeNameMatched)
    return false
  if (typeof obj?.meta?.bid !== 'number')
    return false
  if (typeof obj?.meta?.title !== 'string')
    return false
  if (typeof obj?.meta?.time !== 'string')
    return false
  if (!(['md', 'vue'].includes(obj?.meta?.type)))
    return false
  const tags = obj?.meta?.tags
  if (!(tags instanceof Array))
    return false
  for (const tag of tags) {
    if (typeof tag !== 'string')
      return false
  }
  return true
}

export function isBlogRouteRecord(route: RouteRecord): route is BlogRouteRecord {
  return isBlogRoute(route)
}

export function assertIsBlogRouteRecord(route: RouteRecord): asserts route is BlogRouteRecord {
  if (!isBlogRouteRecord(route))
    throw new AssertionError('Not a BlogRouteRecord')
}

export function isBlogRouteLocation(route: RouteLocation): route is BlogRouteLocation {
  return isBlogRoute(route)
}

export function assertIsBlogRouteLocation(route: RouteLocation): asserts route is BlogRouteLocation {
  if (!isBlogRouteLocation(route))
    throw new AssertionError('Not a BlogRouteLocation')
}
