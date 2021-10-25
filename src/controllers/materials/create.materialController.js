const { Materials } = require("../../models");

const service = async function (req, res, next) {
  try {
    const payload = req.body;
    const requestDB = await Materials.create(payload);
    return res.json({ msg: "Materi berhasil ditambahkan", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
