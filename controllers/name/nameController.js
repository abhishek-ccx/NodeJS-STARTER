const userName = require("../../data/demo1.json");

exports.getUserByName = async (req, res) => {
  try {
    res.status(200).json({
      status: "ok",
      data: {
        userName,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
