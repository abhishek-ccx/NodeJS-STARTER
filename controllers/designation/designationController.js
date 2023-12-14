const userDesignation = require("../../data/demo2.json");

exports.getUserByDesignation = async (req, res) => {
  try {
    res.status(200).json({
      status: "ok",
      data: {
        userDesignation,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
