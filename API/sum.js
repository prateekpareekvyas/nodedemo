const express = require('express');
const router = express.Router();



router.post('/', async(req, res) => {
    const input_first = req.body.inputfirst;
    const input_second = req.body.inputsecond;
    if (input_first || input_second) {
        const sum = parseInt(input_first) + parseInt(input_second);
        res.status("200").json({
            success_message: "sum",
            data: sum
        })

    } else {
        res.status("201").json({
            error_message: "input is not provided. please provide the inputs"
        })
    }


});




module.exports = router