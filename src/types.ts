import type { RouteLocation, RouteMeta, RouteRecord } from 'vue-router'

export type BlogMeta = {
  bid: number
  title: string
  time: string
  tags: string[]
}
export type BlogRouteMeta = BlogMeta & RouteMeta

export type BlogRoute = {
  name: string
  meta: BlogRouteMeta
}

export type BlogRouteRecord = BlogRoute & RouteRecord

export type BlogRouteLocation = BlogRoute & RouteLocation
