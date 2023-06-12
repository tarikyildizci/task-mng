import React from 'react'
import './ActionBar.scss'
import { Icon } from 'components/Icon/Icon'
import { ReactComponent as ArrowLeft } from 'icons/arrow-left.svg'
import { ReactComponent as Calendar } from 'icons/calendar.svg'
import { ReactComponent as Team } from 'icons/team.svg'
import { ReactComponent as List } from 'icons/list.svg'
import { ReactComponent as Board } from 'icons/board.svg'
import { Line } from 'components/Line/Line'
import { TaskType } from 'components/Task/TaskType'
import { TaskTypes } from 'types/types'

export type ActionBarProps = {}

export const ActionBar: React.FC<ActionBarProps> = () => {
  return (
    <div className="action-bar">
      <div className="action-bar-left">
        <Icon
          Icon={ArrowLeft}
          size={24}
          iconProps={{ className: 'left-arrow' }}
          wrapped
        />
        <div className="sprint-details">
          <Line />
          <TaskType taskType={TaskTypes.SPRINT} slug="SPR-06" />
          <Line />
          <TaskType taskType={TaskTypes.TEAM} slug="TEAM-10" />
          <Line />
          <p>New Sprint Name</p>
          <Icon Icon={Calendar} iconProps={{ className: 'calendar' }} wrapped />
          <Icon Icon={Team} iconProps={{ className: 'team' }} wrapped />
        </div>
        <button className="complete-sprint">Complete Sprint</button>
      </div>
      <div className="action-bar-right">
        <Line />
        <Icon Icon={List} wrapped />
        <Icon Icon={Board} wrapped wrappedClassName="selected" />
      </div>
    </div>
  )
}
