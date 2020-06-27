'use strict'

const Antl = use('Antl')

class Session {
  get validadeAll() {
    return true
  }

  get rules() {
    return {
      // validation rules
      email: 'required|email',
      password: 'required',
    }
  }

  get messages() {
    return Antl.list('validation')
  }
}

module.exports = Session
