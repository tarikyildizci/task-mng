import React from 'react'

export type AvatarProps = {
  href?: string
  name?: string
  size?: number
  squareLike?: boolean
}

const DEFAULT_AVATAR =
  'https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png'

export const Avatar: React.FC<AvatarProps> = ({
  href = DEFAULT_AVATAR,
  size = 24,
  name,
  squareLike,
}) => {
  if (name) {
    return (
      <div className={`avatar name ${squareLike ? 'squareLike' : ''}`}>
        {name === '' ? '-' : name[0]}
      </div>
    )
  }
  return (
    <img
      src={href}
      height={size}
      width={size}
      className={`avatar ${squareLike ? 'squareLike' : ''}`}
    />
  )
}
