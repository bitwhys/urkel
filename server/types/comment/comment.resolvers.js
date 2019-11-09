const defaultCommentResolvers = {
  id: parent => parent.id,
  dateCreated: parent => parent.dateCreated,
  dateUpdated: parent => parent.dateUpdated,
  creator: (parent, args, ctx) => throw new Error("Resolver not implemented"),
  body: parent => parent.body,
  // parent: parent => parent.parent,
  parentType: parent => parent.parentType,
  userPermissions: (parent, args, ctx) =>
    throw new Error("Resolver not implemented"),
}

export const Comment = {
  __resolveType: (parent, ctx) => {
    throw new Error("Resolver not implemented")
  },
}

export const IssueComment = {
  ...defaultCommentResolvers,
}

export const TaskComment = {
  ...defaultCommentResolvers,
}
