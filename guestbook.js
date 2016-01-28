	if (Meteor.isClient) {
		Template.guestbook.events(
		{
				"submit form": function (event) {
					event.preventDefault();
					
					var messageBox = 
						$(event.target).find('textarea[name=guestBookMessage]');
									
					var messageText = messageBox.val();
					
					
					
					alert(messageText);
				}
			}
		);
	}
	
	if (Meteor.isServer) {
		Meteor.startup(function(){
			//code to run on server at startup
		});
	}
