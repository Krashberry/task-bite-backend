const db = require('./models')
const projectData = require('./projectData.json')
const taskData = require('./taskData.json')

db.Project.deleteMany({}, (err, deletedProjects) => {
    db.Project.create(projectData.projects, (err, seededProjects) => {
        if (err) console.log(err);
        
        console.log(data.project.length, 'Project created successfully.')
        
        process.exit()
    })
})

db.Task.deleteMany({}, (err, deletedTasks) => {
    db.Task.create(taskData.Tasks, (err, seededTasks) => {
        if (err) console.log(err);
        
        console.log(data.task.length, 'Task created successfully.')
        
        process.exit()
    })
})