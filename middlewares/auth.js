// import JwtService from "../services/JwtServices"
// // const JwtService = require('../services/JwtServices')

// const protect = async (req, res, next) => {
//   let authHeader = req.headers.authorization
//   if (!authHeader) {
//     return next(CustomErrorHandler.unAuthorised('Please Login'))
//   }
//   let token = authHeader.split(' ')[1]

//   try {
//     const { _id, username, email, role } = JwtService.verify(token)

//     const user = {
//       _id,
//       username,
//       email,
//       role
//     }

//     req.user = user
//     next()
//   } catch (error) {
//     return next(error)
//   }
// }

// export default protect
