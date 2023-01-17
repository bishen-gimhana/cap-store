users=[];
async function insert(user){
   
    console.log(`saving user to db `, user);
    users.push(user);  
    return user; 
}

module.exports={
    insert
};