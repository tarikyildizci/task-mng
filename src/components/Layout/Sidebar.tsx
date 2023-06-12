import React, { ReactNode } from 'react'
import { IconProps, Icon } from 'components/Icon/Icon'
import { ReactComponent as Chat } from 'icons/chat.svg'
import { ReactComponent as Home } from 'icons/home.svg'
import { ReactComponent as Tasks } from 'icons/tasks.svg'
import { ReactComponent as Roadmap } from 'icons/roadmap.svg'
import { ReactComponent as Changelog } from 'icons/changelog.svg'
import { ReactComponent as Plus } from 'icons/plus.svg'
import { ReactComponent as Bell } from 'icons/bell.svg'
import { Avatar } from 'components/Task/Avatar'
import './Layout.scss'

export type SidebarProps = {}

const sidebarLinksTop: Array<SidebarItemProps> = [
  {
    href: '#',
    ItemIcon: Home,
    label: 'Dashboard',
  },
  {
    href: '#',
    ItemIcon: Chat,
    label: 'Feedback',
  },
  {
    href: '#',
    ItemIcon: Tasks,
    label: 'Task',
    isCurrent: true,
  },
  {
    href: '#',
    ItemIcon: Roadmap,
    label: 'Roadmap',
  },
  {
    href: '#',
    ItemIcon: Changelog,
    label: 'Changelog',
  },
]
const sidebarLinksBottom: Array<SidebarItemProps> = [
  {
    href: '#',
    ItemIcon: Plus,
    label: 'Invite people',
  },
  {
    href: '#',
    ItemIcon: Chat,
    label: 'Help & Community',
  },
  {
    href: '#',
    ItemIcon: Bell,
    label: 'Notifications',
  },
]

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-group">
        {sidebarLinksTop.map((item, i) => (
          <SidebarItem {...item} key={i} />
        ))}
      </div>
      <div className="sidebar-group">
        {sidebarLinksBottom.map((item, i) => (
          <SidebarItem {...item} key={i} />
        ))}
        <div className="sidebar-divider"></div>
        <SidebarButton
          icon={
            <Avatar href="https://static.wikia.nocookie.net/starwars/images/d/d9/Luke-rotjpromo.jpg" />
          }
          onClick={() => {}}
          label="Luke Skywalker"
        />
        <div className="sidebar-divider" />
        <SidebarButton
          icon={<Avatar squareLike name="Edopay" />}
          onClick={() => {}}
          label="Epodpay Inc."
        />
      </div>
    </nav>
  )
}

type SidebarItemProps = {
  href: string
  label: string
  ItemIcon: IconProps['Icon']
  isCurrent?: boolean
}
const SidebarItem: React.FC<SidebarItemProps> = ({
  ItemIcon,
  href,
  label,
  isCurrent,
}) => {
  return (
    <a className={`sidebar-item ${isCurrent ? 'current' : ''}`} href={href}>
      <div className="sidebar-content">
        <Icon Icon={ItemIcon} />
        <p>{label}</p>
      </div>
      {isCurrent && <div className="dot"></div>}
    </a>
  )
}

type SidebarButtonProps = {
  onClick: () => void
  label: string
  icon: ReactNode
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  onClick,
  label,
  icon,
}) => {
  return (
    <button className="sidebar-button" onClick={onClick}>
      {icon}
      <p>{label}</p>
    </button>
  )
}
