const defaultResolvers = {
  id: parent => parent.id,
  dateCreated: parent => parent.dateCreated,
  dateUpdated: parent => parent.dateUpdated,
  title: parent => parent.title,
  body: parent => (parent.body === undefined ? null : parent.body),
  completed: parent => parent.completed,
}
export const Task = {
  ...defaultResolvers,

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
