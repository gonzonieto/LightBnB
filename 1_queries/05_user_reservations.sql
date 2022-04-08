SELECT r.id AS reservation_id, title, start_date, cost_per_night, AVG(rating) AS avg_rating
  FROM reservations AS r
  JOIN properties AS p ON r.property_id = p.id
  JOIN property_reviews AS pr ON pr.property_id = p.id
 WHERE r.guest_id = 1
 GROUP BY p.id, r.id
 ORDER BY r.start_date
 LIMIT 10;