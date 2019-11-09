import { User } from "./types/user/user.resolvers"
import { Issue } from "./types/issue/issue.resolvers"
import { Project } from "./types/project/project.resolvers"
import { Task } from "./types/task/task.resolvers"
import {
  IssueComment,
  TaskComment,
  Comment,
} from "./types/comment/comment.resolvers"

const Resource = {
  __resolveType: (parent, ctx) => {
    throw new Error("Resolver not implemented")
  },
}

const CParentType = {
  __resolveType: (parent, ctx) => {
    throw new Error("Resolver not implemented")
  },
}

const Permission = {
  id: parent => parent.id,
  userID: parent => (parent.userID === undefined ? null : parent.userID),
  level: parent => parent.level,
  resouceID: parent =>
    parent.resouceID === undefined ? null : parent.resouceID,
}

const Query = {
  user: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
}

const Role = {
  project: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
  user: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
  roletype: (parent, args, ctx) => {
    throw new Error("Resolver not implemented")
  },
}

export const resolvers = {
  Query,
  User,
  Permission,
  Issue,
  Project,
  Role,
  Task,
  Comment,
  IssueComment,
  TaskComment,
  Resource,
  CParentType,
}
