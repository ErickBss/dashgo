import { createServer, Model, Factory, Response } from 'miragejs'

import faker from 'faker'

type User = {
  name: string
  email: string
  created_at: string
}

export function makeServer() {
  const server = createServer({
    // models define what data the routes will return
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      // used for create a big number of data
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },

        email() {
          return faker.internet.email().toLowerCase()
        },

        createdAt() {
          return faker.date.recent(10)
        },
      }),
    },

    seeds(server) {
      server.createList('user', 200)
    },

    routes() {
      this.namespace = 'api' // define the http way route
      this.timing = 750 // delay to simulate a real api response

      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams

        const total = schema.all('user').length

        const pageStart = (Number(page) - 1) * Number(per_page)
        const pageEnd = pageStart + Number(per_page)

        const users = this.serialize(schema.all('user')).users.slice(
          pageStart,
          pageEnd,
        )

        return new Response(200, { 'x-total-count': String(total) }, { users })
      })
      this.post('/user')

      this.namespace = '' // reset the route way to prevent a conflict with the next api route
      this.passthrough() // if the route doesn't match with those defined, it will pass through
    },
  })
  return server
}
