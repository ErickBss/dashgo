import { createServer, Model } from 'miragejs'

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

    routes() {
      this.namespace = 'api' // define the http way route
      this.timing = 750 // delay to simulate a real api response

      this.get('/user')
      this.post('/user')

      this.namespace = '' // reset the route way to prevent a conflict with the next api route
      this.passthrough() // if the route doesn't match with those defined, it will pass through
    },
  })
}
