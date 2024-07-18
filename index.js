const express = require('express');
const { swaggerUi, specs } = require('./swagger');
const usersRouter = require('./routes/users');
const app = express();
const port = 5000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
