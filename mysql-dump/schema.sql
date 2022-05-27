CREATE Table users(user_id INTEGER,login TEXT,password TEXT,rep_question_secrete TEXT);

INSERT INTO users VALUES(1,"Hugo",1234,"cheval");
SELECT * FROM users;

CREATE Table courses(course_id INTEGER,course_name TEXT,no_subjects INTEGER,last_message DATE);

CREATE Table link(course INTEGER, user INTEGER);

INSERT INTO courses VALUES(1,"Compression",0,NULL);
INSERT INTO link VALUES(1,1);

CREATE Table subject(course_id INTEGER,suject_id INTEGER, subject_name TEXT,no_posts TEXT, last_message DATE);
INSERT INTO subject VALUES(1,1,"test", "je voudrais savoir pouquoi le compression",NULL);
INSERT INTO subject VALUES(1,2,"test2", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",NULL);