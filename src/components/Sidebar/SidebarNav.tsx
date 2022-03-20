import { Stack } from '@chakra-ui/react'

import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri'
import Link from 'next/link'
import { IsActive } from '../IsActive'

export function SideBarNav() {
  return (
    <Stack spacing={12} align="flex-start">
      <NavSection title="GENEREAL">
        <IsActive href="/dashboard" passHref>
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        </IsActive>

        <IsActive href="/users" passHref>
          <NavLink icon={RiContactsLine}>Users</NavLink>
        </IsActive>
      </NavSection>

      <NavSection title="AUTOMATION">
        <IsActive href="/forms" passHref>
          <NavLink icon={RiInputMethodLine}>Forms</NavLink>
        </IsActive>

        <IsActive href="/automation" passHref>
          <NavLink icon={RiGitMergeLine}>Automation</NavLink>
        </IsActive>
      </NavSection>
    </Stack>
  )
}
