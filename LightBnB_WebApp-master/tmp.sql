--   Table "reservations"
--    Column    |  Type   |
-- -------------+---------+
--  id          | integer | 
--  start_date  | date    | 
--  end_date    | date    |
--  property_id | integer | 
--  guest_id    | integer | 

-- SELECT r.id AS reservation_id, title, start_date, cost_per_night, AVG(rating) AS avg_rating
SELECT r.*
  FROM reservations AS r
  JOIN properties AS p ON r.property_id = p.id
  JOIN property_reviews AS pr ON pr.property_id = p.id
 WHERE r.guest_id = 3
 GROUP BY p.id, r.id
 ORDER BY r.start_date
 LIMIT 10;