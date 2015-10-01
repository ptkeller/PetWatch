var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
  <div id='signup'>
    <h1>signup</h1>
    <form className="signupForm">
      username:<input type='text' name="username"/><br/>
      password:<input type="password" name="password"/><br/>
      first name:<input type="text" name="firstname"/><br/>
      last name:<input type='text' name="lastname"/><br/>
      email: <input type="text" name="email"/><br/>
      phone#:<input type="text" name="phone"/><br/>
      pets name:<input type="text" name="petName"/><br/>
      pets species:<input type='text' name="petSpecies"/><br/>
      description:<input type="text" name="petDescription"/><br/>
      picture:<input type="text" name="petUrl"/><br/>
      <button>signup</button>
    </form>
    <a href="#/login">Already have an account? <strong>Signin</strong> ...</a>
  </div>

    )
  }
})
