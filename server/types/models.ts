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
