import React from 'react'
import './Icon.scss'

export type IconProps = {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
  size?: number
  iconProps?: React.SVGProps<SVGSVGElement> & {
    title?: string | undefined
  }
  wrapped?: boolean
  wrappedClassName?: string
  onClick?: () => void
}

export const Icon: React.FC<IconProps> = ({
  Icon,
  size = 16,
  iconProps,
  wrapped,
  wrappedClassName,
  onClick,
}) => {
  if (wrapped) {
    return (
      <button
        className={`icon-wrapper ${wrappedClassName ?? ''}`}
        onClick={onClick}
      >
        <Icon height={size} width={size} {...iconProps} />
      </button>
    )
  }
  return <Icon height={size} width={size} onClick={onClick} {...iconProps} />
}
