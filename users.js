var user1 = {
  Username: "Hamza",
  Password: 123456,
  Email: "hamza@gmail.com",
  Birthday: new Date(),
  FavoriteMovies: [ObjectId("605c65e8cc44a8540e5f50bb"), ObjectId("605c65e8cc44a8540e5f50b8")]
}

var user2 = {
  Username: "Sally",
  Password: 123456,
  Email: "sally@gmail.com",
  Birthday: new Date(),
  FavoriteMovies: [ObjectId("605c65e7cc44a8540e5f50b5"), ObjectId("605c65e7cc44a8540e5f50b6"), ObjectId("605c65e8cc44a8540e5f50b8")]
}

var user3 = {
  Username: "John",
  Password: 123456,
  Email: "john@gmail.com",
  Birthday: new Date(),
  FavoriteMovies: [ObjectId("605c65e8cc44a8540e5f50b9"), ObjectId("605c65e8cc44a8540e5f50ba")]
}

db.users.insertOne(user1)
db.users.insertOne(user2)
db.users.insertOne(user3)