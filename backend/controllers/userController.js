import { pool } from "../db_connect.js";
import bcrypt from "bcrypt";

export const login = (req, res) => {
  const { email, password } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Server error");
    }

    const query = "SELECT * FROM users WHERE email = ?";
    connection.query(query, [email], (err, results) => {
      connection.release();

      if (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }

      if (results.length === 0) {
        return res.status(401).send("Invalid credentials");
      }

      const user = results[0];

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Server error");
        }

        if (!isMatch) {
          return res.status(401).send("Invalid credentials");
        }

        res.status(200).send("Login successful");
      });
    });
  });
};

export const register = (req, res) => {
  const { username, password, email } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Server error");
    }

    const checkUserQuery = "SELECT email FROM users WHERE email = ?";
    connection.query(checkUserQuery, [email], (err, results) => {
      if (err) {
        connection.release();
        console.error(err);
        return res.status(500).send("Server error");
      }

      if (results.length > 0) {
        connection.release();
        return res.status(409).send("Email already exists");
      }

      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          connection.release();
          console.error(err);
          return res.status(500).send("Error hashing password");
        }

        const insertUserQuery =
          "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
        connection.query(
          insertUserQuery,
          [username, hashedPassword, email],
          (err, results) => {
            connection.release();
            if (err) {
              console.error(err);
              return res.status(500).send("Server error");
            }

            res.send("User registered successfully");
          }
        );
      });
    });
  });
};
