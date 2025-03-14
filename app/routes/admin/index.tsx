import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import React from 'react'
import { session } from '../../modules/auth'
import { AdminRoot } from '../../islands/AdminRoot'
// import { AdminRoot } from '../../admin/AdminRoot'


export default createRoute(session, (c) => {
  const authUser = c.get('authUser')

  // if (!authUser) {
  //   return c.redirect('/api/auth/signin')
  // }

  const name = authUser?.session?.user?.name ?? 'Hono'

  return c.render(
    <AdminRoot/>,
    // <div/>,
    { title: name }
  )
})
