SELECT p.id, title, cost_per_night, AVG(rating) AS avg_rating
  FROM properties AS p
  JOIN property_reviews AS pr ON pr.property_id = p.id
 WHERE city ILIKE '%vancouver%'
 GROUP BY p.id
HAVING AVG(rating) >= 4
 ORDER BY cost_per_night
 LIMIT 10;