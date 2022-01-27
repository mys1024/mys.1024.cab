import type { RouteLocation, RouteMeta, RouteRecord } from 'vue-router'

export interface BlogMeta {
  bid: number
  title: string
  time: string
  tags: string[]
  type: 'md' | 'vue'
}
export type BlogRouteMeta = BlogMeta & RouteMeta

export interface BlogRoute {
  name: string
  meta: BlogRouteMeta
}

export type BlogRouteRecord = BlogRoute & RouteRecord

export type BlogRouteLocation = BlogRoute & RouteLocation
