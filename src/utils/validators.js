export function validateEmptyAndLenght3 (value) {
  if (!value) {
    return 'Este campo é obrigatório'
  }

  if (value.length < 3) {
    return 'Este campo deve ter no mínimo 3 caracteres'
  }

  return true
}

export function validateEmptyAndEmail (value) {
  if (!value) {
    return 'Este campo é obrigatório'
  }

  const isValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)

  if (!isValid) {
    return 'Este campo deve ser um email válido'
  }

  return true
}
