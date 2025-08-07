import { Fragment, forwardRef } from 'react'

// import { CheckboxCard as ChakraCheckboxCard } from '@chakra-ui/react/checkbox-card'
// TODO: Placeholder, waiting for Chakra UI v3 package release

export interface CheckboxCardProps extends Record<string, any> {
  icon?: React.ReactElement
  label?: React.ReactNode
  description?: React.ReactNode
  addon?: React.ReactNode
  indicator?: React.ReactNode | null
  indicatorPlacement?: 'start' | 'end' | 'inside'
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export const CheckboxCard = forwardRef<HTMLInputElement, CheckboxCardProps>(
  function CheckboxCard() {
    return null
  },
)

export const CheckboxCardIndicator = () => null
