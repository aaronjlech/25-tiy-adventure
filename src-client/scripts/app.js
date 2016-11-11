const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');
const ACTIONS = require('./actions.js')
const STORE = require('./store.js')
const Appview = require('./view-controller.js')

// single render function
let renderDom = function(ReactEl){
   ReactDOM.render(ReactEl, document.querySelector("#app-container"))
}

const AppRouter = Backbone.Router.extend({

   routes: {
      'game/:user_id': "showGame"
      'login': "showLogin"
      'signup': "showSignup"
      '*path': "showHome"

   },

   showHome: function(){

      return renderDom(<AppView currentView="home"/>)
   },

   showLogin: function(){

      return renderDom(<AppView currentView="login"/>)
   },

   showSignup: function(){

      return renderDom(<AppView currentView="signup"/>)
   },

   showGame: function(){

      return renderDom(<AppView currentView="game"/>)
         }

         initialize: function(){

            Backbone.history.start()
         }



         })










         new AppRouter()
