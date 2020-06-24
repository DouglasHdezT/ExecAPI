const { execFile } = require("child_process");

const controller = {};

controller.updateGet = (req, res) => {
	execFile("../execFiles/exec.sh", (err, stdout, stderr) => {
		if (err) return res.status(400).json({message: `Error executing file: ${stderr}`})

		res.status(200).json({message: stdout});
	})
}

controller.updatePost = (req, res) => {
	console.log(req.body.action);
	
	res.status(200).json({});
}

module.exports = controller;