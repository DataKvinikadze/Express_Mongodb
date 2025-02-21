const verifyUser = (req, res, next) => {
    const HeadersUserId = req.headers.authorization;
    const {id} = req.params;
console.log(HeadersUserId)
console.log(id)

    if (!HeadersUserId) {
        return res.status(401).json({ error: "Unauthorized: No user ID provided" });
    }


    if (id !== HeadersUserId) {
        return res.status(403).json({ error: "Wrong User Id!" });
    }

    next(); 
};

module.exports = verifyUser