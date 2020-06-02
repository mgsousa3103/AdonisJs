'use strict'

const Antl = use('Antl')

class Task {
  get validadeAll() {
    return true
  }

  get rules() {
    return {
      // validation rules
      title: 'required',
      due_date: 'date',
    }
  }

  get messages() {
    return Antl.list('validation')
  }
}

module.exports = Task
