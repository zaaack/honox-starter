import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'
import { auth, authHandler, verifyAuth } from './modules/auth';
import 'dotenv/config'
const app = createApp({
  init(app) {
    app.use(auth).use("/api/auth/*", authHandler()).use("/api/*", verifyAuth());
  },
})

showRoutes(app)

export default app
