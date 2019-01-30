import app from './app';
const PORT = 3500;

app.listen(process.env.PORT || 3000, () => {
    console.log('Express server listening on port ' + PORT);
})