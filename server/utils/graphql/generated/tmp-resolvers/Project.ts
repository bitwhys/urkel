// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { ProjectResolvers } from "../graphqlgen"

export const Project: ProjectResolvers.Type = {
  ...ProjectResolvers.defaultResolvers,

  creator: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
  userPermissions: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
}
