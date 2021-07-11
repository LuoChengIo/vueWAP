export function login(data) {
  return window.$axios.post('/auth/login', data)
}
export function getInfo() {
  return window.$axios.get('/auth/login')
}

export function logout() {
  return window.$axios.get('/auth/login')
}
