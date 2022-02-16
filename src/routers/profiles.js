const router = require('express').Router();

const Profiles = require('../models/profile/index');

router.get('', async (req, res) => {
  try {
    ProfilesAll = await Profiles.find();
    res.status(200).json(ProfilesAll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('', async (req, res) => {

  const profile = new Profiles(
    { 
      userName, 
      area, 
      avatar, 
      hour, 
      level,
      email, 
      networks,
      skills, 
      address, 
      about, 
      description, 
      experience 
    } = req.body
  )

  try {
    newProfile = await profile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
});

module.exports = router;