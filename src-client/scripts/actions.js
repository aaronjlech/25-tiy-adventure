const Backbone = require('backbone')
const {UserModel, UserCollection} = require('./model-users.js')
const {CharModel, CharCollection} = require('./model-chars.js')
const STORE = require("./store.js")

const ACTIONS = {

   fetchUserData: function(){
   let userCollInst = new ToDoCollection()

      return userCollInst.fetch().then(function(){
         STORE.setStore('all_users', userCollInst)
      })

   },

   createNewUser: function(modlVals){
      let newUser = new UserModel()

      newMod.set(modlVals)

      newMod.save().then(function(serverRes){
         ACTIONS.fetchData()
      })

   },

   fetchCharData: function(){
      let charCollInst = new CharCollection()

      return charCollInst.fetch().then(function(){
         STORE.setStore('characters', charCollInst)
      })


   },

   changeView: function(viewInput){

      STORE.setStore('currentView', viewInput)

   }

}




module.exports = ACTIONS
