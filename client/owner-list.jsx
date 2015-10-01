//Owner list
//contains pet pictures and info
//links to owner profiles
var React = require('react');
var OwnerProfile = require('./owner-profile');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var urlRoot = 'https://petwatch.firebaseio.com/';

module.exports = React.createClass({
  getInitialState: function(){
      return {
        owners: []
        // pets: [{name: 'FEEFEEDO', species: 'catdog', size: '2'},{name: 'FEEFEEDO', species: 'catdog', size: '2'},{name: 'FEEFEEDO', species: 'catdog', size: '2'}]
      }
    },
  mixins: [ ReactFire ],
  componentWillMount: function(){
    this.bindAsArray(new Firebase(urlRoot + 'owners'), 'owners');
    // this.setState({owners: this.state.owners});
    console.log(this.state.owners);
  },
  render: function(){
    console.log(this.state.owners);
    return <div className='ownerBar'>
      {this.renderOwners()}
    </div>
  },
  renderOwners: function() {
    return this.state.owners.map(function(owner){
       return <OwnerProfile picUrl={owner.pets.picURL} firstname={owner.firstname}
        lastname={owner.lastname} />
    })
  }
})
