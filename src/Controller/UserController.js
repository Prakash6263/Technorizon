const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



const register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });

      console.log(`User registered successfully ${newUser}`);
      res.status(201).send('User registered successfully');
    } else {
      res.status(409).send('Email already exists');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error registering user');
  } finally {
    await prisma.$disconnect();
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      const passwordMatch = bcrypt.compareSync(password, user.password);

      if (passwordMatch) {
        const token = jwt.sign({ email: user.email, userId: user.id }, 'prakash');
        res.status(201).send({ status: true, user, token });
      } else {
        res.status(400).send('Invalid password');
      }
    } else {
      res.status(400).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error during login');
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = { register, Login };
