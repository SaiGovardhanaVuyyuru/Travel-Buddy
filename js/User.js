function getUsers()
{
    let users=localStorage.getItem('users');
    if(users==null)
        users=[]
    else
        users=JSON.parse(users);

    return users;
}

function getUser(email)
{
    let users=getUsers();
    for(let x of users)
        if(x.email==email)
            return x;

    return null;
}

function containsUser(email)
{
    let users=getUsers();

    for(let user of users)
        if(user.email==email)
            return true;
    
    return false;
}


function addUser(name,email,password)
{
    let users=getUsers();
    
    
    if(containsUser(email))
        return false;
    
    users.push({'name':name,'email':email,'password':password}); 
    localStorage.setItem('users',JSON.stringify(users));

    return true;
}

function Login(email,password)
{
    if(containsUser(email))
    {
        let user=getUser(email);
        if(user.password==password)
            {
                localStorage.setItem('currentUser',JSON.stringify(user));
                return true;
            }
        else
            return false;
    }
    else
        return false;
}