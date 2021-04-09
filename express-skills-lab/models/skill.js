module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne,
};

const skills = [
    {text: 'HTML', acquired: true},
    {text: 'CSS', acquired: false},
    {text: 'Express.js', acquired: false},
];


function getAll() {
    return skills;
}

function getOne(skillIdx) {
    return skills[skillIdx];
}

function create(skill) {
    skills.push(skill);
}

function deleteOne(skillIdx) {
    skills.splice(skillIdx, 1);
}

function updateOne(updatedSkill, skillIdx) {
    skills.splice(skillIdx, 1, updatedSkill);
}