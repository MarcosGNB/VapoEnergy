import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // 'Bearer TOKEN'

  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // info del token
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido' });
  }
};
