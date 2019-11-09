// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { TaskResolvers } from "../graphqlgen"

export const Task: TaskResolvers.Type = {
  ...TaskResolvers.defaultResolvers,

  creator: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
  parent: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
  userPermissions: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
}
