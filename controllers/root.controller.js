function root(req, res){
    return res.json({
        status: "OK",
    });
}

module.exports = {
    root,
}