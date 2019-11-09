export const User = {
  id: parent => parent.id,
  joinDate: parent => parent.joinDate,
  username: parent => parent.username,
  email: parent => parent.email,
  firstname: parent => parent.firstname,
  lastname: parent => parent.lastname,
  avatarUrl: parent =>
    parent.avatarUrl === undefined ? null : parent.avatarUrl,
  bio: parent => (parent.bio === undefined ? null : parent.bio),
}
