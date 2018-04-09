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
        this.$http.post('http://localhost:5000/api/message', {msg: this.message, date: new Date().getTime()});
        location.reload();
    }
}
