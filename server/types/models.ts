export interface Context {
}

export interface User {
  id: string
}

export interface Permission {
  id: string
  userID: string | null
  level: number
  resourceID: string | null
}

export interface Issue {
  id: string
  dateCreated: any
  dateUpdated: any
  title: string
  body: string | null
  priority: string
  status: string
  category: string | null
  tags: string[] | null
}

export interface Project {
  id: string | null
  dateCreated: any
  dateUpdated: any
  name: string
  alias: string | null
}

export interface Task {
  id: string
  dateCreated: any
  dateUpdated: any
  title: string
  body: string | null
  completed: boolean
}
export interface IssueComment {
  id: string
  dateCreated: any
  dateUpdated: any
  body: string
}
export interface TaskComment {
  id: string
  dateCreated: any
  dateUpdated: any
  body: string
}

