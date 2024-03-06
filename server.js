const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const mysql = require('mysql');
const db = mysql.createConnection({host:'127.0.0.1', user:'root', password:'frankent', database:'exams'});

// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to the database');
// });

app.use(cors());
app.use(bodyParser.json());

app.post('/submit/questions', (req, res) => {
  const questions = req.body;
  console.log('Received questions:', questions);

  const query = 'INSERT INTO questions (id, content) VALUES (1, ?) ON DUPLICATE KEY UPDATE content = ?';
  const values = [JSON.stringify(questions), JSON.stringify(questions)];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    console.log('Questions saved or updated in database');
    res.status(200).json({ message: 'Questions received and saved or updated' });
  });
});

app.post('/fetch/questions', (req, res) => {
  const query = 'SELECT * FROM questions WHERE id = 1';

  db.query(query, (err, results) => {
    if (err) throw err;
    // console.log('Questions retrieved from database');
    res.json(results);
  });
});

app.post('/submit/answers', (req, res) => {
  const { userId, answers } = req.body;
  console.log('Received answers from user:', userId, answers);

  const query = 'INSERT INTO answer (name, content) VALUES (?, ?) ON DUPLICATE KEY UPDATE content = ?';
  const values = [userId, JSON.stringify(answers), JSON.stringify(answers)];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    console.log('Answers saved in database for user:', userId);
    res.status(200).json({ message: 'Answers received and saved' });
  });
});

app.post('/check/questions', (req, res) => {
  const query = 'SELECT * FROM questions WHERE id = 1';

  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// สำหรับ Fetch API ดูข้อมูลคำถามและคำตอบรายบุคคล
app.post('/fetch/info', (req, res) => {
  const userId = req.body.userId;

  const query = `
                  SELECT
                    a.name AS userId,
                    q.content AS questions,
                    a.content AS answers,
                    a.created_at AS submittedAt
                  FROM answer a
                  INNER JOIN questions q ON a.id = q.id
                  WHERE a.name = ?
                `;

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching answers:', err);
      res.status(500).json({ message: 'Error fetching answers' });
      return;
    }

    const transformedResults = results.map(row => {
      return {
        userId: row.userId,
        questions: JSON.parse(row.questions).map((question, index) => {
          return {
            question: question.content,
            answer: JSON.parse(row.answers)[index]
          };
        }),
        submittedAt: row.submittedAt
      };
    });

    res.json(transformedResults);
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
