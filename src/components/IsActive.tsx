import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement, ReactElement } from 'react'

interface IsActiveProps extends LinkProps {
  children: ReactElement
}

export function IsActive({ children, ...rest }: IsActiveProps) {
  let isActive = false
  const { asPath } = useRouter()

  if (asPath === rest.href || asPath === rest.as) {
    isActive = true
  }

  if (
    asPath.startsWith(String(rest.href)) ||
    asPath.startsWith(String(rest.as))
  ) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, { color: isActive ? 'pink.400' : 'gray.50' })}
    </Link>
  )
}
