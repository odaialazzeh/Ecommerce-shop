import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "odai alazzeh",
    email: "odai@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "jane doe User",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
