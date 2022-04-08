SELECT COUNT(r) AS total_reservations,
       city
  FROM reservations AS r
  JOIN properties AS p ON r.property_id = p.id
 GROUP BY city
 ORDER BY total_reservations DESC;