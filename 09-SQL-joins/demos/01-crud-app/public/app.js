'use strict'

function User(obj) {
  // ['first_name', 'last_name', ...].forEach(callback, UserContext)
  Object.keys(obj).forEach(function(prop) {
    this[prop] = obj[prop]
  }, this)
}

$('#user-form').on('submit', function(ev) {
  ev.preventDefault()
  let user = new User({
    first_name: $('#first-name').val(),
    last_name: $('#last-name').val(),
    cell: $('#cell').val(),
    email: $('#email').val()
  })

  user.insertRecord()
})

User.prototype.insertRecord = function() {
  // http://localhost:3000/api/users?first_name=Scott&last_name=Schmidt&cell=2342354&email=sdflkjsdf@sdf.com
  $.post('/api/users', {
    first_name: this.first_name,
    last_name: this.last_name,
    cell: this.cell,
    email: this.email
  })
  .then(
    function(data) {
      $('#response').html(data)
      console.log(data)
    },
    function(err) {
      console.error(err)
    }
  )
}
