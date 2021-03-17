function checkNotAuthenticated (req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/createMember")
    }
    next()
}

module.exports = checkNotAuthenticated