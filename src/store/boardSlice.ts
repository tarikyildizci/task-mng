import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialData } from 'data'
import { Column, Data, Priority, Task, TaskTypes } from 'types/types'

export type BoardState = Data

const initialState: BoardState = {
  ...initialData,
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    changeTaskOrder: (
      state,
      action: PayloadAction<{
        taskId: string
        columnId: string
        sourceIndex: number
        destinationIndex: number
      }>
    ) => {
      const { destinationIndex, sourceIndex, taskId, columnId } = action.payload
      const column = state.columns[columnId]
      const newTaskIds = [...column.taskIds]
      newTaskIds.splice(sourceIndex, 1)
      newTaskIds.splice(destinationIndex, 0, taskId)
      const newColumn: Column = { ...column, taskIds: newTaskIds }
      state.columns = { ...state.columns, [columnId]: newColumn }
    },
    changeTaskColumn: (
      state,
      action: PayloadAction<{
        taskId: string
        sourceId: string
        sourceIndex: number
        destinationId: string
        destinationIndex: number
      }>
    ) => {
      const { taskId, destinationId, destinationIndex, sourceId, sourceIndex } =
        action.payload

      const sourceColumn = state.columns[sourceId]
      const destinationColumn = state.columns[destinationId]
      const newSourceTaskIds = [...sourceColumn.taskIds]
      const newDestinationTaskIds = [...destinationColumn.taskIds]

      newSourceTaskIds.splice(sourceIndex, 1)
      newDestinationTaskIds.splice(destinationIndex, 0, taskId)

      state.columns[destinationId] = {
        ...state.columns[destinationId],
        taskIds: newDestinationTaskIds,
      }
      state.columns[sourceId] = {
        ...state.columns[sourceId],
        taskIds: newSourceTaskIds,
      }
    },
    addTask: (
      state,
      action: PayloadAction<{
        description: string
        priority: Priority
        type: Exclude<TaskTypes, 'SPRINT' | 'TEAM'>
        columnId: string
        storyPoints?: number
      }>
    ) => {
      const { columnId, description, priority, type, storyPoints } =
        action.payload
      const newId = state.latestTaskId + 1

      const newTask: Task = {
        id: `task-${newId}`,
        priority,
        title: description,
        slug: `TASK-${newId}`,
        type,
        storyPoints,
      }

      state.tasks = { ...state.tasks, [newTask.id]: newTask }
      state.columns[columnId] = {
        ...state.columns[columnId],
        taskIds: [newTask.id, ...state.columns[columnId].taskIds],
      }
      state.latestTaskId++
    },
  },
})

export const { changeTaskColumn, changeTaskOrder, addTask } = boardSlice.actions

export default boardSlice.reducer
