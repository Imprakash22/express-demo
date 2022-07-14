const express = require('express');
const app = express();

// app.get();
// app.post();
// app.put();
// app.delete();


//courses array
const courses = [
    {id: 1, name : 'C# programming'},
    {id: 2, name : 'C++ programming'},
    {id: 3, name : 'C programming'},
]
//routing starts
app.get('/', (req,res)  =>{
        res.send('Hello World');
});
app.get('/api/course', (req,res)  =>{
    res.send(courses);
});
app.get('/api/course/:id', (req,res)  =>{
    //res.send(req.query);
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course is not found');
    res.send(course); 
});

//configuring port number
const port = process.env.PORt || 3000;

app.listen(port, () =>
console.log(`Listening on port ${port}`));