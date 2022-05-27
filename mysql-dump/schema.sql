/* Backend Topics/Posts */
CREATE Table link(course INTEGER, user INTEGER);
CREATE Table courses(course_id INTEGER,course_name TEXT,no_subjects INTEGER);
CREATE Table subject(course_id INTEGER,suject_id INTEGER, text TEXT);

INSERT INTO courses VALUES(1,"Compression",2);
INSERT INTO courses VALUES(2,"Docker",2);
INSERT INTO courses VALUES(3,"Remarques",0);

/* Cours du User 1 */
INSERT INTO link VALUES(1,1);
INSERT INTO link VALUES(3,1);

/* Cours du User 2 */
INSERT INTO link VALUES(2,2);
INSERT INTO link VALUES(3,2);

/* Admin */
INSERT INTO link VALUES(1,3);
INSERT INTO link VALUES(2,3);
INSERT INTO link VALUES(3,3);

/* Posts des cours */
INSERT INTO subject VALUES(1,1,"Qu'est-ce qu'on peut compresser?");
INSERT INTO subject VALUES(1,2,"Des images ou bien des pdf.");

INSERT INTO subject VALUES(2,3,"Comment on build une image???");
INSERT INTO subject VALUES(2,4,"C'est : > docker build -t [Nom_Image] .");