import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import SignOutButton from '../islands/sign-out-button'
import { session } from '../modules/auth'
import Counter from '../islands/counter'


export default createRoute(session, (c) => {
  const authUser = c.get('authUser')

  // if (!authUser) {
  //   return c.redirect('/api/auth/signin')
  // }

  const name = authUser?.session?.user?.name ?? 'Hono'

  return c.render(
    <div >
      <h1>Hello, {name}!</h1>
      <Counter />
      <SignOutButton />
      <pre>{JSON.stringify(authUser?.session, null, 2)}</pre>
    </div>,
    { title: name }
  )
})
