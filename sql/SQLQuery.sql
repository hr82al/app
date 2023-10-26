SET STATISTICS TIME ON;    
DROP TABLE IF EXISTS s;

CREATE TABLE s(id INT UNIQUE, sub_level INT);
INSERT INTO s(id, sub_level) SELECT subdivision_id, 1 as sub_level FROM collaborators WHERE name = 'Сотрудник 1' AND ID = 710253;


INSERT INTO s(id, sub_level) SELECT DISTINCT id, 2 as sub_level 
	FROM subdivisions WHERE parent_id IN (SELECT id FROM s) AND id NOT IN (SELECT id FROM s);
INSERT INTO s(id, sub_level) SELECT DISTINCT id, 3 as sub_level 
	FROM subdivisions WHERE parent_id IN (SELECT id FROM s) AND id NOT IN (SELECT id FROM s);
INSERT INTO s(id, sub_level) SELECT DISTINCT id, 4 as sub_level 
	FROM subdivisions WHERE parent_id IN (SELECT id FROM s) AND id NOT IN (SELECT id FROM s);


DELETE FROM s WHERE id IN (100055, 100059);


SELECT c.id, c.name, sb.name AS sub_name, c.subdivision_id AS sub_id, s.sub_level, count_sub.colls_count FROM s 
	LEFT JOIN collaborators AS c ON s.id = c.subdivision_id 
	LEFT JOIN subdivisions AS sb ON s.id = sb.id
	LEFT JOIN 
		(SELECT subdivision_id, COUNT(collaborators.subdivision_id) AS colls_count FROM collaborators GROUP BY subdivision_id) AS count_sub 
			ON count_sub.subdivision_id = c.subdivision_id
				WHERE LEN(c.name) > 11 ORDER BY s.sub_level;

DROP TABLE IF EXISTS s;
SET STATISTICS TIME OFF;  