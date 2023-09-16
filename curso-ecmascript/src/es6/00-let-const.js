function newUser(name, age, country) {
    var name = name || 'Daniel';
    var age = age || 28;
    var country = country || 'CO';
    console.log(name, age, country);
}

newUser();
newUser('lucas', 33, 'ar')

function newAdmin(name = 'Daniel', age = 32, country = 'CO') {
    console.log(name, age, country);
}

newAdmin();