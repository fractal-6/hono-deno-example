import { Hono } from 'https://deno.land/x/hono@v4.3.7/mod.ts'
import { serveStatic } from 'https://deno.land/x/hono/middleware.ts'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))
app.get('/', serveStatic({ path: './static/index.html' }))

app.get('/hello', (c) => c.text('Hello! Hono!'))

Deno.serve(app.fetch)
