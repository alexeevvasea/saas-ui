'use client'

import { forwardRef } from 'react'

// import { Alert as AlertPrimitive } from '@chakra-ui/react/alert'
// import { CloseButton } from '../close-button/index.ts'
// TODO: Placeholder, waiting for Chakra UI v3 package release

export interface AlertProps extends Omit<Record<string, any>, 'title'> {
  startElement?: React.ReactNode
  endElement?: React.ReactNode
  title?: React.ReactNode
  icon?: React.ReactElement
  closable?: boolean
  onClose?: () => void
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert() {
  return null
})
