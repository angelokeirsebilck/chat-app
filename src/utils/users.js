const users = [];

const addUser = ({ id, username, room}) => {
    // Clean the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Validate the data
    if(!username || !room){
        return {
            error: 'Username and room are required.'
        }
    }

    // Check for existing users
    const existingUser = users.find(u => u.room == room && u.username === username)

    // Validate username
    if(existingUser){
        return {
            error: 'Username already in use.'
        }
    }

    // Store new user
    const user = {id, username, room}
    users.push(user);
    return {
        user
    }
};

const removeUser = id => {
    const index = users.findIndex(u => u.id === id);

    if(index != -1){
       return users.splice(index, 1)[0];
    }
};

const getUser = id => {
    const user = users.find(u => u.id === id);
    return user;
};

const getUsersInRoom = room => {
    room = room.trim().toLowerCase();
    return users.filter( user => user.room === room);
};

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
};