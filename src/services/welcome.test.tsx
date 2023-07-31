import { welcome } from './welcome'

describe('welcome', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert

  it('Deve exibir um alert com boas vindas', () => {
    welcome()
    expect(mockAlert).toHaveBeenCalledWith('Boas vindas, Arthur!')
  })
})
