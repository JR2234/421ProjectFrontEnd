export class MainController {
  constructor ($http) {
    'ngInject';

      this.$http = $http;
      this.getMessages();
  }
    getMessages() {
        var vm = this;
        this.$http.get('http://localhost:5000/api/message').then(function(result){
            //Sort the messages chronologically
            var sortMessages = result.data;
            sortMessages.reverse();
            vm.messages = sortMessages;
        });
    }

    postMessage() {
        if (this.message != undefined && this.message != ''){
            console.log(this.message);
            this.$http.post('http://localhost:5000/api/message', {msg: this.message, date: new Date().getTime()});
            location.reload();
        }
    }

    postComment(msg){
        if (this.comment != undefined && this.comment != ''){
            var messageId = msg.message._id; //id of the post being commented on
            var username = msg.message.user.username;
            this.$http.post('http://localhost:5000/api/comment', {msgId: messageId, username: username, cmt: this.comment, date: new Date().getTime()});
            location.reload();
        }
    }
}
