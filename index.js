import { createServer } from 'node:http'
import {createSchema,createYoga} from 'graphql-yoga';

import resolvers from './graphql/resolvers';

const yoga = createYoga({
    schema: createSchema({
      typeDefs: `
      type Query {
        name: String
      }
    `,
      resolvers
    })
  })
  
const server = createServer(yoga)

 server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})