import { Button } from '@chakra-ui/react'

interface IFormButton {
  onClick: () => {} | void
  colorScheme: string
  size: string
  width: string
  marginTop: string
}

export default function AppButton({ onClick, colorScheme, size, width, marginTop }: IFormButton) {
  return (
    <Button onClick={onClick} colorScheme={colorScheme} size={size} width={width} marginTop={marginTop}>
      Button
    </Button>
  )
}
