const Backbone = require('backbone')
const UserCollection = require('./model-users.js')
const CharCollection = require('./model-chars.js')

const STORE = {

   data: {
      all_users: new UserCollection(),
      characters: new CharCollection(),
      currentView: "Home"

   },

   setStore: function(storeProp, payload){
      this.data[storeProp] = payload
      Backbone.Events.trigger('storeChange')
   },

   getStoreData: function(){
      return this.data
   },

   onChange: function(someFunc){
      Backbone.Events.on('storeChange', someFunc)
   }

}

module.exports = STORE
