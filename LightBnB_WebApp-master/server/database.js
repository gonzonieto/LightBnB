const properties = require('./json/properties.json');
const users = require('./json/users.json');

const { Pool } = require('pg');
const { password } = require('pg/lib/defaults');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

console.log();

/// Users
/**
 * Get a single user from the database given their email.
 *  param {String} email The email of the user.
 *  return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  const query = {
    name: 'get-user-with-email',
    text: `SELECT *
             FROM users
            WHERE email = $1;`,
    values: [email],
  };
  
  return pool
    .query(query)
    .then(res => {
      return res.rows
        ? res.rows[0]
        : null;
    })
    .catch(err => console.error('query error', err.stack));
};
exports.getUserWithEmail = getUserWithEmail;


/**
 * Get a single user from the database given their id.
 *  param {string} id The id of the user.
 *  return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  const query = {
    name: 'get-user-with-id',
    text: `SELECT *
             FROM users
            WHERE id = $1`,
    values: [id],
  };
  
  return pool
    .query(query)
    .then(res => {
      return res.rows
        ? res.rows[0]
        : null;
    })
    .catch(err => console.error('query error', err.stack));
};
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 *  param {{name: string, password: string, email: string}} user
 *  return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  const query = {
    text: `INSERT INTO users (name, email, password) VALUES
           ($1, $2, $3)
           RETURNING *;`,
    values: [`${user.name}`, `${user.email}`, `${password}`],
  };
  
  pool
    .query(query)
    .then(res => {
      console.log('Rows');
      console.log(res.rows);
      console.log('\nFields');
      console.log(res.fields.map(x => x.name));
    })
    .catch(err => console.error('query error', err.stack));
  
  // const userId = Object.keys(users).length + 1;
  // user.id = userId;
  // users[userId] = user;
  // return Promise.resolve(user);
};
exports.addUser = addUser;

/// Reservations
/**
 * Get all reservations for a single user.
 *  param {string} guest_id The id of the user.
 *  return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guestID, limit = 10) {
  return getAllProperties(null, 2);
};
exports.getAllReservations = getAllReservations;

/// Properties
/**
 * Get all properties.
 *  param {{}} options An object containing query options.
 *  param {*} limit The number of results to return.
 *  return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = (options, limit = 10) => {

  const query = {
    name: 'get-all-properties-with-limit',
    text: `SELECT * FROM properties LIMIT $1;`,
    values: [limit],
  };
  
  return pool
    .query(query)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error('query error', err.stack));
};
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * param {{}} property An object containing all of the property details.
 * return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
};
exports.addProperty = addProperty;
