import React from 'react'
import { DragDropContext, OnDragEndResponder } from 'react-beautiful-dnd'
import { Column } from '../Column/Column'
import './Board.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeTaskColumn, changeTaskOrder } from 'store/boardSlice'
import { RootState } from 'store/store'

export const Board: React.FC = () => {
  const columns = useSelector((state: RootState) => state.board.columns)
  const dispatch = useDispatch()

  const columnsArray = Object.values(columns)

  const onDragEnd: OnDragEndResponder = (result) => {
    const { draggableId: taskId, destination, source } = result

    if (!destination) {
      //no drag
      return
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      // same position drag
      return
    }
    if (destination.droppableId === source.droppableId) {
      dispatch(
        changeTaskOrder({
          taskId,
          columnId: source.droppableId,
          destinationIndex: destination.index,
          sourceIndex: source.index,
        })
      )
    } else {
      dispatch(
        changeTaskColumn({
          taskId,
          sourceId: source.droppableId,
          sourceIndex: source.index,
          destinationId: destination?.droppableId,
          destinationIndex: destination?.index,
        })
      )
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        {columnsArray.map((column) => (
          <Column key={column.id} columnId={column.id} />
        ))}
      </div>
    </DragDropContext>
  )
}
