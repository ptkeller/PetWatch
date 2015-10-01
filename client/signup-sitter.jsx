var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
  <div id='signup'>
    <h1>signup</h1>
    <form className="signupForm">
      username:<input type='text' name="username"/><br/>
      password:<input type="password" name="password"/><br/>
      email:<input type="text" name="email"/><br/>
      address:<input type='text' name="address"/><br/>
      phone:<input type="text" name="phone"/><br/>
      first name:<input type="text" name="firstname"/><br/>
      last name:<input type='text' name="lastname"/><br/>
      description:<input type="text" name="description"/><br/>
      picture:<input type="text" name="picUrl"/><br/>
      <button>signup</button>
    </form>
    <a href="#/login">Already have an account? <strong>Signin</strong> ...</a>
  </div>

    )
  }
})
