const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillId: req.params.id
    });
}

function newSkill(req, res) {
    res.render('skills/new');
}


function create(req, res) {
    // create the skill by adding to our 
    // skills array inside of models/skill
    req.body.aquire = false;
    Skill.create(req.body);
    // res.redirect because we need to take the user back to the page
    // with all the todos
    res.redirect('/skills');
}


function deleteSkill(req, res) {
    // delete a todo based on it's id aka index value in the skills
    // array
    Skill.deleteOne(req.params.id);
    // res.redirect to the index page
    res.redirect('/skills');
}

function edit(req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id),
        skillId: req.params.id
    });
}

function update(req, res) {
    // we need to assign the req.body.done property
    // req.body.acquire = false;
    
    if(req.body.acquired === 'on') {
        req.body.done = true;
    } else {
        req.body.done = false;
    }
    // we need to update the object in 
    // the todos array inside models/todo
    Skill.updateOne(req.body, req.params.id);
    // res.redirect /todos
    res.redirect('/skills');
}