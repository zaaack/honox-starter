import { Hono } from 'hono'

const authorsApp = new Hono()
  .get('/', (c) => c.json({ result: 'list authors' }))
  .post('/', (c) => c.json({ result: 'create an author' }, 201))
  .get('/:id', (c) => c.json({ result: `get ${c.req.param('id')}` }))

const booksApp = new Hono()
  .get('/', (c) => c.json({ result: 'list books' }))
  .post('/', (c) => c.json({ result: 'create a book' }, 201))
  .get('/:id', (c) => c.json({ result: `get ${c.req.param('id')}` }))

const app = new Hono().route('/authors', authorsApp).route('/books', booksApp)

export type AppType = typeof app

export default app
