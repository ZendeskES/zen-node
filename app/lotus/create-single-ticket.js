// Create a single ticket using node.js

var request = require('request');
var username = '###';                                   // Replace with your username
var password = '###';                                   // Replace with your password
var domain = '###.zendesk.com';                         // Replace with your Zendesk domain
var path = '/api/v2/tickets.json';
var auth = username + ':' + password + '@';


// Ticket information

var requester = {
    name: '###',
    email: '###',
    subject: '###',
    body: '###'
};

request({
    json: true,
    method: 'POST',
    uri: 'https://' + auth + domain + path,
    body: {"ticket":{"requester":{"name":requester.name, "email":requester.email}, "subject":requester.subject, "comment": { "body": requester.body }}}
    },
    function (error, response, body) {
        if (error) {
            return console.error('Failed request: ', error);
        }
        console.log('Successful request! Server response: ', body);
    });