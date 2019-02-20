import api from '@/services/api'

export default {
  register (credentials) {
    return api().post('register', credentials)
  }
}

// auth.register({
//   email: 'test@gmail.con',
//   password: '123456'
// })
