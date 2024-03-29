/**
 *  An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 * **/

export const publicRoutes: string[] = ['/', '/auth/verificacao']

/**
 *  An array of routes that are accessible to authenticated users
 * These routes require authentication
 * @type {string[]}
 * **/

export const authRoutes: string[] = [
  '/auth/login',
  '/auth/cadastro',
  '/auth/esqueci-senha',
  '/auth/error',
  '/auth/nova-senha'
]

/**
 *  The prefix for API authentication routes
 *  Routes that start with this prefix are used for API
 * authentication purposes
 * @type {string}
 * **/
export const apiAuthPrefix: string = '/api/auth'

/**
 *  The prefix for API authentication routes
 *  Routes that start with this prefix are used for API
 * authentication purposes
 * @type {string}
 * **/

export const DEFAULT_LOGIN_REDIRECT = '/settings'
