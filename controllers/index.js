const { execFile } = require("child_process");

const controller = {};

controller.updateGet = (req, res) => {
	res.status(200).json({});
}

controller.updatePost = (req, res) => {
	console.log(req.body);
	
	res.status(200).json({});
}

module.exports = controller;