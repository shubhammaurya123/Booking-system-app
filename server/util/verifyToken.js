import jwt from "jsonwebtoken";

export const verfiyToken = async (req, res, next) => {
  try {
    const tokenvalue = req.cookies.access_token;
    if (!tokenvalue) {
      res.status(400).send("You are not authorized");
    }
    jwt.verify(tokenvalue, process.env.TOKEN_KEY, (err, user) => {
      if (err) {
        return res.status(400).send("Token is not valid");
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(400).send("you are not admin and so you can not delete this2");
  }
};

export const verfiyUser = async (req, res, next) => {
  verfiyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
        if (err) {
          res.status(400).send("you are not authoried");
        } else {
          res .status(400).send("you are not admin and so you can not delete this1");
        }
    }
  });
};

export const verfiyAdmin = async (req, res, next) => {
  verfiyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      if (err) {
        res.status(400).send("you are not authoried");
      }
    }
  });
};
