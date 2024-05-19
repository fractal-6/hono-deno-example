import { Hono } from 'https://deno.land/x/hono@v4.3.7/mod.ts'
import { serveStatic } from "https://deno.land/x/hono@v4.3.7/middleware.ts"

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))
app.get('/', serveStatic({ path: './static/index.html' }))

Deno.serve(app.fetch)
