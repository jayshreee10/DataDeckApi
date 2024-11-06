export const userData = {
  getData: function (req, res) {
    res.send("hello");
  },

  postData: function (UserDataModel, req, res) {
    const dummy = req.body;
    UserDataModel.create(dummy)
      .then((result) => {
        console.log("User saved:", result);
        res.json(result);
      })
      .catch((err) => {
        console.error("Error saving task:", err);
        res.status(500).json({ error: "Failed to create task" });
      });
  },
};
