CREATE Table users(user_id INTEGER,login TEXT,password TEXT,rep_question_secrete TEXT);

INSERT INTO users VALUES(1,"Hugo",1234,"cheval");
SELECT * FROM users;

CREATE Table courses(course_id INTEGER,course_name TEXT,no_subjects INTEGER,last_message DATE);

CREATE Table link(course INTEGER, user INTEGER);

INSERT INTO courses VALUES(1,"Compression",0,NULL);
INSERT INTO link VALUES(1,1);