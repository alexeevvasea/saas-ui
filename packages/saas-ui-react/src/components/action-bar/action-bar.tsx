import { forwardRef } from 'react'

// import { ActionBar } from '@chakra-ui/react/action-bar'
// import { Portal } from '@chakra-ui/react/portal'

// import { CloseButton as CloseButtonBase } from '../close-button/index.ts'
// TODO: Placeholder, waiting for Chakra UI v3 package release

interface ActionBarContentProps extends Record<string, any> {}

export const Root = () => null
export const SelectionTrigger = () => null
export const Separator = () => null
export const Content = forwardRef<HTMLDivElement, ActionBarContentProps>(
  function Content() {
    return null
  },
)
export const CloseButton = forwardRef<HTMLButtonElement, Record<string, any>>(
  function CloseButton() {
    return null
  },
)

export type RootProps = any
export type SelectionTriggerProps = any
export type SeparatorProps = any
export type ContentProps = ActionBarContentProps
export type CloseTriggerProps = any
