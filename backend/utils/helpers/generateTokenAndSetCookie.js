import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  // Generate a new JWT containing the userId provided as the payload.
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d", // The token will expire after 15 days.
  });

  // Set the JWT as an HTTP-only cookie in the response.
  res.cookie("jwt", token, {
    httpOnly: true, // The cookie cannot be accessed by client-side JavaScript.
    maxAge: 15 * 24 * 60 * 60 * 1000, // The cookie will expire after 15 days (in milliseconds).
    sameSite: "strict", // Helps prevent cross-site request forgery (CSRF) attacks.
  });

  // Return the generated token.
  return token;
};

export default generateTokenAndSetCookie;
