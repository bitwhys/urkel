// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { IssueResolvers } from "../graphqlgen"

export const Issue: IssueResolvers.Type = {
  ...IssueResolvers.defaultResolvers,

  creator: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
  project: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
  userPermissions: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
}
