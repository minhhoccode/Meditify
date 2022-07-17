const User = require("../models/User");

const FindUser = async (username: string) => {
  try {
    const others = await User.findOne({
      username: username,
    });

    // delete others._doc.password;
    return {
      username: others.username,
      bio: others.bio,
      image:
        others.profilePic ||
        "https://static.productionready.io/images/smiley-cyrus.jpg",
    };
  } catch (err) {
    console.log(err);
  }
};
export default FindUser;
