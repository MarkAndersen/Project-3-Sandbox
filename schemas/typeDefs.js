const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
}

type Booking {
    _id: ID
    type: String
    duration: Int
    price: Float
}

type Perfomer {
    _id: ID
    name: String
    bookings: [Booking]
}

type Order {
    _id: ID
    purchaseDate: String
    bookings: [Booking]
}

type Auth {
    token: ID
    user: User
}

type Checkout {
    session: ID
  }


type Query {
bookings(category: ID, type: String): [Booking]
booking(_id: ID!): Booking
user: User
order(_id: ID!): Order
checkout(products: [ID]!): Checkout
}

type Mutation {
addUser
addOrder
login
}
`;

modulke.exports = typeDefs;