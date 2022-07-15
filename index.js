const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());
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

//Get method............
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
//post method......................
app.post('/api/course', (req,res)  =>{
    const schema = {
        name: Joi.string().min(3).required()

    };
    const result = Joi.ValidationError(res.body, scheme);
    console.log(result);
    //validation
    if (!req.body.name || req.body.name.length < 3){
        res.status(404).send('Name is required')
        return; 
    }
   const course = {
    id: courses.length + 1,
    name: req.body.name
   };
   courses.push(course);
   res.send(course);
});

//configuring port number
const port = process.env.PORt || 3000;

app.listen(port, () =>
console.log(`Listening on port ${port}`));