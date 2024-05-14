export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const allUsers = await User.find({
      _id: { $ne: loggedInUser }
    }).select("-password");
    res.status(200).json(allUsers);
  } catch (error) {
    console.log("error", error.message);
  }
};
