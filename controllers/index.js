const { execFile } = require("child_process");

const controller = {};

controller.updateGet = (req, res) => {
	execFile("sh",[`${process.env.PATHEXEC}/exec.sh`], (err, stdout, stderr) => {
		if (err) return res.status(400).json({message: `Error executing file`})

		res.status(200).json({message: "Up to date!"});
	})
}

controller.updatePost = (req, res) => {
	const ref = req.body.ref;

	if(ref) {
		execFile("sh",[`${process.env.PATHEXEC}/exec.sh`], (err, stdout, stderr) => {
			if (err) return res.status(400).json({})
	
			res.status(200).json({});
		})
	}else{
		res.status(400).json({message: "Not supported"})
	}
}

module.exports = controller;