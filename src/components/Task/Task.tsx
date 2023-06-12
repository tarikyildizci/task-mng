import React from 'react'
import { Task as $TaskType } from '../../types/types'
import { Draggable } from 'react-beautiful-dnd'
import { TaskType } from './TaskType'
import { Icon } from 'components/Icon/Icon'
import { ReactComponent as Chart1 } from 'icons/chart-1.svg'
import { ReactComponent as Chart2 } from 'icons/chart-2.svg'
import { ReactComponent as Chart3 } from 'icons/chart-3.svg'
import './Task.scss'
import { Avatar } from './Avatar'

export type TaskProps = {
  task: $TaskType
  index: number
}

const getPriorityIcon = (priority: $TaskType['priority']) => {
  switch (priority) {
    case 1:
      return Chart1
    case 2:
      return Chart2
    case 3:
      return Chart3
  }
}

export const Task: React.FC<TaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`task ${snapshot.isDragging ? 'dragging' : ''}`}
        >
          <p>{task.title}</p>
          <div className="task-bottom">
            <TaskType taskType={task.type} slug={task.slug} />
            <div className="task-bottom-right">
              <Icon Icon={getPriorityIcon(task.priority)} />
              <div className="story-points">
                <p>{task.storyPoints ?? '-'}</p>
              </div>
              <Avatar href={task.assignee} />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}
