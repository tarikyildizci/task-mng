import React from 'react'
import { ReactComponent as Logo } from 'icons/logo.svg'
import { ReactComponent as SearchIcon } from 'icons/search.svg'
import { ReactComponent as ControlsIcon } from 'icons/controls.svg'
import { ReactComponent as FilterIcon } from 'icons/filter.svg'
import { ReactComponent as PlusIcon } from 'icons/plus.svg'
import './Layout.scss'
import { Icon } from 'components/Icon/Icon'
import { Line } from 'components/Line/Line'

export type TopbarProps = {}

export const Topbar: React.FC<TopbarProps> = () => {
  return (
    <div className="topbar">
      <div className="logo-wrapper">
        <Logo className="logo" />
        <Line />
      </div>
      <div className="topbar-actions">
        <Search />
        <Icon Icon={PlusIcon} size={16} wrapped />
      </div>
    </div>
  )
}

const Search: React.FC = () => {
  return (
    <div className="search">
      <input className="with-icon" placeholder="Search" />
      <Icon Icon={SearchIcon} iconProps={{ className: 'icon' }} />
      <Icon Icon={ControlsIcon} size={24} wrapped />
      <Icon Icon={FilterIcon} size={24} wrapped />
    </div>
  )
}
