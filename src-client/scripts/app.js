const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');
const ACTIONS = require('./actions.js')
const STORE = require('./store.js')
const Appview = require('./view-controller.js')

const AppRouter = Backbone.Router.extend({

   routes: {
      'game/:user_id': "showGame"
      'login': "showLogin"
      'signup': "showSignup"
      '*path': "showHome"

   },

   showHome: function(){


      ReactDOM.render(<Appview curentView="home"/>, "#app-container")
   },

   showLogin: function(){

      return <Appview currentView="login"/>
   },

   showSignup: function(){

      return <AppView currentView="signup"/>
   },

   showGame: function(){

      return <AppView currentView="game"/>
         }

         initialize: function(){

            Backbone.history.start()
         }



         })










         new AppRouter()
