import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";
import { User } from "../models/user.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hash,
  });

  res.json(user);
};

export const login = async (req, res) => {
  console.log(req)
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(401).json({ message: "Wrong password" });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, "secretkey", {
    expiresIn: "1d",
  });

  res.json({ token });
};

export const logout = async(req, res) =>{
    
}

export const profile = async (req, red) => {
  const user = await User.findByPk(req.user.id);

  res.json(user);
};
