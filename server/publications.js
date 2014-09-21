Meteor.publish("chatrooms",function(){
    return ChatRooms.find({});
});
Meteor.publish("onlusers",function(){
    return Meteor.users.find({"status.online":true},{username:1});
})