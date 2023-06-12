import React, { PropsWithChildren } from 'react'
import { Sidebar } from './Sidebar'
import './Layout.scss'
import { Topbar } from './Topbar'

export type LayoutProps = {}

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
}) => {
  return (
    <div className="layout">
      <Topbar />
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  )
}
