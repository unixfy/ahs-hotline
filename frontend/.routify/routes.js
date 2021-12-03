
/**
 * @roxi/routify 2.18.3
 * File generated Fri Dec 03 2021 14:32:41 GMT-0500 (Eastern Standard Time)
 */

export const __version = "2.18.3"
export const __timestamp = "2021-12-03T19:32:41.631Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "C:/Users/unixfy/WebstormProjects/ahs-hotline/frontend/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/unixfy/WebstormProjects/ahs-hotline/frontend/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/admin/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/unixfy/WebstormProjects/ahs-hotline/frontend/src/pages/admin/_layout.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "auth-tickets.svelte",
          "filepath": "/admin/auth-tickets.svelte",
          "name": "auth-tickets",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/unixfy/WebstormProjects/ahs-hotline/frontend/src/pages/admin/auth-tickets.svelte",
          "importPath": "../src/pages/admin/auth-tickets.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/admin/auth-tickets",
          "id": "_admin_authTickets",
          "component": () => import('../src/pages/admin/auth-tickets.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "login.svelte",
          "filepath": "/admin/login.svelte",
          "name": "login",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/unixfy/WebstormProjects/ahs-hotline/frontend/src/pages/admin/login.svelte",
          "importPath": "../src/pages/admin/login.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/admin/login",
          "id": "_admin_login",
          "component": () => import('../src/pages/admin/login.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "messages.svelte",
          "filepath": "/admin/messages.svelte",
          "name": "messages",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/unixfy/WebstormProjects/ahs-hotline/frontend/src/pages/admin/messages.svelte",
          "importPath": "../src/pages/admin/messages.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/admin/messages",
          "id": "_admin_messages",
          "component": () => import('../src/pages/admin/messages.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "taxonomies.svelte",
          "filepath": "/admin/taxonomies.svelte",
          "name": "taxonomies",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/unixfy/WebstormProjects/ahs-hotline/frontend/src/pages/admin/taxonomies.svelte",
          "importPath": "../src/pages/admin/taxonomies.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/admin/taxonomies",
          "id": "_admin_taxonomies",
          "component": () => import('../src/pages/admin/taxonomies.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/admin/_layout.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/admin",
      "id": "_admin__layout",
      "component": () => import('../src/pages/admin/_layout.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/unixfy/WebstormProjects/ahs-hotline/frontend/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/message/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/unixfy/WebstormProjects/ahs-hotline/frontend/src/pages/message/_layout.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[id].svelte",
          "filepath": "/message/[id].svelte",
          "name": "[id]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/unixfy/WebstormProjects/ahs-hotline/frontend/src/pages/message/[id].svelte",
          "importPath": "../src/pages/message/[id].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/message/:id",
          "id": "_message__id",
          "component": () => import('../src/pages/message/[id].svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/message/_layout.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/message",
      "id": "_message__layout",
      "component": () => import('../src/pages/message/_layout.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

