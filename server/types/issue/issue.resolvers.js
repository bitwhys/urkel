const defaultResolvers = {
  id: parent => parent.id,
  dateCreated: parent => parent.dateCreated,
  dateUpdated: parent => parent.dateUpdated,
  title: parent => parent.title,
  body: parent => (parent.body === undefined ? null : parent.body),
  priority: parent => parent.priority,
  status: parent => parent.status,
  type: parent => parent.type,
  tags: parent => (parent.tags === undefined ? null : parent.tags),
}

export const Issue = {
  defaultResolvers,

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
