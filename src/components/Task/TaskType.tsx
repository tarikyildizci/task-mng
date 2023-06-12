import React from 'react'
import { Task, TaskTypes } from 'types/types'
import { ReactComponent as TaskIcon } from 'icons/task.svg'
import { ReactComponent as EpicIcon } from 'icons/epic.svg'
import { ReactComponent as SprintIcon } from 'icons/sprint.svg'
import { ReactComponent as TeamIcon } from 'icons/team.svg'
import './Task.scss'
import { Icon } from 'components/Icon/Icon'

export type TaskTypeProps = {
  taskType: TaskTypes
  slug: string
  size?: number
}

const getIconAndColor = (taskType: TaskTypes) => {
  switch (taskType) {
    case TaskTypes.TASK:
      return { icon: TaskIcon, className: 'type-task' }
    case TaskTypes.EPIC:
      return { icon: EpicIcon, className: 'type-epic' }
    case TaskTypes.SPRINT:
      return { icon: SprintIcon, className: 'type-sprint' }
    case TaskTypes.TEAM:
      return { icon: TeamIcon, className: 'type-team' }
  }
}

export const TaskType: React.FC<TaskTypeProps> = ({
  taskType,
  slug,
  size = 10,
}) => {
  return (
    <div className="task-type">
      <div
        className={`task-icon-wrapper ${getIconAndColor(taskType).className}`}
      >
        <Icon Icon={getIconAndColor(taskType).icon} size={size} />
      </div>

      <p>{slug}</p>
    </div>
  )
}
