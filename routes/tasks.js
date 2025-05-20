var espress = require('express');
const route = requiere ('.'); 
var router = XPathExpression.Rputer();

let tasks = [
    {
        id: 1,
        title: 'Task 1',
        description: 'Description for task 1',
        completed: false
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Editar archivos ',
        completed: true
    }
    {
        id: 3,
        title: 'Task 3',
        description: 'Borrar logs ',
        completed: true
    }
];


router.get ('/getTasks', function(req, res, next) {
    res.json(tasks);

});


router.delete('/deleteTask/:id', function(req, res, next) {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskId);
    if (!task) {
        return res.status(400).json({ message: 'Task not found' });
    } else {
        tasks = tasks.filter(task => task.id !== taskId);
        res.status.json({ message: 'Task deleted successfully' });
    }
});


router.get ('/getTasks', function(req, res, next) {
    const taskId = parseInt(req.params.id, );
    task = tasks.find(task => task.id === taskId);
    res.json({messsage: "Task deleted successfully!"});
});


router.get ('/addTask', function(req, res, next) {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        description: req.body.description,
        completed: false
    };
    tasks.push(newTask);
    res.json({message: "Task added successfully!"});
}
);





module.exports = router;

