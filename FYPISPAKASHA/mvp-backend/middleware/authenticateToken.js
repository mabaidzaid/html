/** @format */

// Import the required modules
const jwt = require("jsonwebtoken");

const authenticateJWT = () => (req, res, next) => {
  let token = req.header("Authorization");
  if (!token) token = req.header("authentication");
  if (!token) token = req.header("authorization");
  // console.log("backend mn ye token recieve hua bhai: ", req);
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  token = token.split(" ")[[1]];

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Forbidden" });
    }
    // console.log("The permissions that user has : - ",user.permissions, " \n The permission that is required to pass through the middleware : - ",requiredPermissions);
    // Check if any of the required permissions is present in the user's token
    // const hasPermission = requiredPermissions.some((permission) =>
    //   user.permissions.includes(permission)
    // );
    // // console.log(hasPermission)

    // if (!hasPermission) {
    //   console.log(user.permissions, requiredPermissions);
    //   return res
    //     .status(403)
    //     .json({ message: "You have insufficient permissions" });
    // }

    req.user = user;
    // console.log(user)
    next();
  });
};

module.exports = { authenticateJWT };
