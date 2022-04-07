# LighthouseBnB

### **Create an ERD for our LighthouseBnB app with the following specifications**

- The app will have users, properties, reservations, and property reviews.
- A user will have a name, email address, and password.
- A property will have a title, description, costpernight, parking_spaces, numberofbathrooms, and numberofbedrooms.
- A property will need to have images associated with it, so for now we will store a url for a small thumbnail photo and a large cover photo.
- A property will need address data associated with it including country, street, city, province, post_code
- A property will have an owner which will be one of the registered users.
- A reservation will have a start date and an end date
- A reservation will be made by a guest, which will be a registered user, and will be associated with a single property
- A property can either be active or not active depending on wether the owner is currently renting it out or not.
- A property review will have a message and a rating from 1 to 5
- A property review can be made by a guest and will be associated with a single reservation
- A user can own many properties
- A property belongs to one owner
- A user can make many reservation
- A reservation belongs to one guest
- A property can be reviewed by many guests
---

## TABLES

### `users`
- `id` <--- PK
- `name`
- `email`
- `password`

### `user_properties` JOIN TABLE
- `id` <--- PK
- `user_id` <-- FK of `users`
- `property_id` <-- FK of `properties`


### `properties`
- `id` <-- PK
- `title`
- `description`
- `active`
- `costpernight`
- `parking_spaces`
- `numberofbathrooms`
- `numberofbedrooms`

### `property_addresses`
- `id` <-- PK
- `property_id` <-- FK of `properties`
- `street`
- `city`
- `province`
- `post_code`

### `property_photos`
- `id` <-- PK
- `property_id` <-- FK of `properties`
- `thumbnail`
- `cover_photo`

### `user_reservations` JOIN TABLE
- `id` <-- PK
- `user_id` <-- FK of `users`
- `reservation_id` <-- FK of `reservations`

### `reservations`
- `id` <-- PK
- `user_id` <-- FK of `users`
- `property_id` <-- FK of `properties`
- `start_date`
- `end_date`

### `property_reviews` JOIN TABLE
- `id` <-- PK
- `property_id` <-- FK of `properties`
- `review_id` <-- FK of `reviews`

### `reviews`
- `id` <-- PK
- `user_id` <-- FK of `users`
- `reservation_id` <-- FK of `reservations`
- `message`
- `rating`