import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Task } from '../Task/Task'
import './Column.scss'
import { Icon } from 'components/Icon/Icon'
import { ReactComponent as Test } from 'icons/test.svg'
import { ReactComponent as Plus } from 'icons/plus.svg'
import { NewTask } from './NewTask'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'

export type ColumnProps = {
  columnId: string
}

export const Column: React.FC<ColumnProps> = ({ columnId }) => {
  const allTasks = useSelector((state: RootState) => state.board.tasks)
  const column = useSelector(
    (state: RootState) => state.board.columns[columnId]
  )

  const tasks = column.taskIds.map((taskId) => allTasks[taskId])

  const [isAdding, setIsAdding] = useState(false)
  console.log({ taskIds: column.taskIds })

  return (
    <div className="column-wrapper">
      <div className="column-header">
        <div className="column-title-area">
          <Icon Icon={Test} />
          <div>{column.title}</div>
          <Icon
            Icon={Plus}
            onClick={() => setIsAdding(true)}
            wrapped
            wrappedClassName="add-button"
          />
        </div>
        <div className="label">
          <p>{tasks.length || '-'}</p>
        </div>
      </div>
      {isAdding && (
        <NewTask onClose={() => setIsAdding(false)} columnId={columnId} />
      )}
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            className={`column ${
              snapshot.isDraggingOver ? 'dragging-over' : ''
            }`}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}
