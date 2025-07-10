import bcrypt from "bcryptjs";

const plainPassword = "Zipporah@2020";

bcrypt.hash(plainPassword, 10, (err, hash) => {
  if (err) throw err;
  console.log("Hashed password:", hash);
});
