const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false
  },
  hour: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  networks: {
    linkeDInUrl: {
      type: String,
      required: false
    },  
    facebookUrl: {
      type: String,
      required: false
    },
    twitterUrl: {
      type: String,
      required: false
    }
  },
  skills: {
    type: Array,
    default: [],
    required: true
  },
  address: {
    street: { type: String, required: true }, 
    city: { type: String, required: true }, 
    neighborhood: { type: String, required: true } 
  },
  about: {
    type: String,
    required: true
  },
  description: {
    formation: { type: String, required: false },
    age: { type: Number, required: true },
    contract: { type: String, required: true }
  },
  experience: [
    {
      companyName: { type: String, required: true },
      skills: { type: Array, required: true },
      dateInit: { type: Date, required: true },
      dateEnd: { type: Date, required: false },
      current: { type: Boolean, required: true }
    }
  ]

});

module.exports = mongoose.model('Profiles', ProfileSchema);