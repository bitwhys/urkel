const defaultResolvers = {
  id: parent => parent.id,
  dateCreated: parent => parent.dateCreated,
  dateUpdated: parent => parent.dateUpdated,
  name: parent => parent.name,
  alias: parent => (parent.alias === undefined ? null : parent.alias),
}
export const Project = {
  ...defaultResolvers,

  creator: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
  userPermissions: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
}
