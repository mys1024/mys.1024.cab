import type { RouteLocation, RouteMeta, RouteRecord } from 'vue-router'
import { isString } from '@vueuse/core'
import { AssertionError, isTypedArray } from '~/utils/type'

export interface BlogMeta {
  bid: number
  title: string
  time: string
  type: 'md' | 'vue'
  tags: string[]
}

export interface BlogRoute {
  meta: BlogMeta & RouteMeta
}

export function isBlogRoute(obj: any): obj is BlogRoute {
  if (typeof obj?.meta?.bid !== 'number')
    return false
  if (typeof obj?.meta?.title !== 'string')
    return false
  if (typeof obj?.meta?.time !== 'string')
    return false
  if (!(['md', 'vue'].includes(obj?.meta?.type)))
    return false
  if (!isTypedArray(obj?.meta?.tags, isString))
    return false
  return true
}

export type BlogRouteRecord = BlogRoute & RouteRecord

export function isBlogRouteRecord(route: RouteRecord): route is BlogRouteRecord {
  return isBlogRoute(route)
}

export function assertIsBlogRouteRecord(route: RouteRecord): asserts route is BlogRouteRecord {
  if (!isBlogRouteRecord(route))
    throw new AssertionError('Not a BlogRouteRecord')
}

export type BlogRouteLocation = BlogRoute & RouteLocation

export function isBlogRouteLocation(route: RouteLocation): route is BlogRouteLocation {
  return isBlogRoute(route)
}

export function assertIsBlogRouteLocation(route: RouteLocation): asserts route is BlogRouteLocation {
  if (!isBlogRouteLocation(route))
    throw new AssertionError('Not a BlogRouteLocation')
}
