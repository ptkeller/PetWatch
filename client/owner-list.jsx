//Owner list
//contains pet pictures and info
//links to owner profiles
var React = require('react');
var OwnerProfile = require('./owner-profile');


module.exports = React.createClass({
  // getInitialState: function(){
  //     return {
  //       owners: [{firstname: 'Nate', lastname: 'Kim', pet: '',description: 'Cat killer'},{firstname: 'Nate', lastname: 'Kim', pet: '',description: 'Cat killer'},{firstname: 'Nate', lastname: 'Kim', pet: '',description: 'Cat killer'}],
  //       pets: [{name: 'FEEFEEDO', species: 'catdog', size: '2'},{name: 'FEEFEEDO', species: 'catdog', size: '2'},{name: 'FEEFEEDO', species: 'catdog', size: '2'}]
  //     }
  //   },
  getInitialState: function() {
      return {
        items: []
      }
    },

    componentWillMount: function() {
      console.log('this is doing stuff')
      this.firebaseRef = new Firebase('https://petwatch.firebaseio.com/owners');
      this.firebaseRef.on('value', function(dataSnapshot) {
        console.log(dataSnapshot, 'this should be snapshot');
        var items = [];
        dataSnapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item['.key'] = childSnapshot.key();
          items.push(item);
          console.log(items, 'this shoudl be items');
        }.bind(this));

        this.setState({
          items: items
        });
      }.bind(this));
    },
  render: function(){
    return <div className='ownerBar'>
      {this.renderOwners()}
    </div>
  },
  renderOwners: function() {
    return this.state.items.map(function(owner){
      console.log(owner.pets, 'this is owner')
       return <OwnerProfile firstname={owner.firstname} pic={owner.pets.picURL} 
        lastname={owner.lastname} />
    })
  }
})
