export type Priority = 1 | 2 | 3

export enum TaskTypes {
  TASK,
  EPIC,
  SPRINT,
  TEAM,
}

export type Task = {
  id: string
  slug: string
  title: string
  type: TaskTypes
  priority: Priority
  assignee?: string
  storyPoints?: number
}

type ColumnIconTypes = 'backlog' | 'todo' | 'in_progress' | 'test'

export type Column = {
  id: string
  title: string
  icon: ColumnIconTypes
  taskIds: Array<string>
}

export type Colors =
  | 'blue'
  | 'darkBlue'
  | 'green'
  | 'grey'
  | 'grey100'
  | 'grey200'
  | 'grey300'
  | 'lightBlue'
  | 'grey50'
  | 'orange'
  | 'purple'
  | 'red'
  | 'darkBlue05'
  | 'text'
  | 'white'
  | 'yellow'

export type Data = {
  tasks: Record<string, Task>
  columns: Record<string, Column>
  latestTaskId: number // this part is a simplification of backend, used when incrementing taskIds
}
