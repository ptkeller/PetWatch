//Owner Profiles
//popout window for owner and pet containing detailed information
//more pictures, possible rating?
var React = require('react');


module.exports = React.createClass({

	getInitialState: function(){
return {
		ownerItem: []
		}
	},
	componentWillMount: function(){
		this.firebaseRef = new Firebase('https://petwatch.firebaseio.com/owners/');
     this.firebaseRef.on('value', function(dataSnapshot) {
			 console.log(dataSnapshot)
       var items = [];
       dataSnapshot.forEach(function(childSnapshot) {
				 console.log(childSnapshot, 'this is child');
         var item = childSnapshot.val();
				 console.log(item, 'this is itme')
         item['.key'] = childSnapshot.key();
         items.push(item);
				 console.log(items, 'this is items at the end')
       }.bind(this));

       this.setState({
         ownerItem: items
       });
     }.bind(this));
		 console.log(this.state.ownerItem, 'this is the array in state')
   },
	 
	 componentWillUnmount: function() {
     this.firebaseRef.off();
   },


	render: function(){
		return (
      <div className='col-sm-4'>
        {this.renderOwnerProfile()}
      </div>

		)
	},
  renderOwnerProfile: function(){
      return (
        <div className='ownerThumbnail'>
          <img src={this.state.data.pets.picUrl}/>
          <div className='ownerCaption'>
            <h4>{this.state.data.firstname} {this.state.data.lastname} </h4>
          </div>
        </div>
      )
  }
});
