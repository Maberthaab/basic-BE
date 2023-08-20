const users =[
    {
        id: 1,
        email: "thataa@gmail.com",
        password: "thaa",
        name_user:"thataa",
        tanggal_lahir : "15-04-2002",
        alamat : "Surabaya",
        gender: "cewek",
        no_hp:"085707811131"

    },
     {
        id: 2,
        email: "berlian@gmail.com",
        password: "ber12",
        name_user:"berlian",
        tanggal_lahir : "20-08-2001",
        alamat : "Jombang",
        gender: "cewek",
        no_hp:"085708990015"
    },
]

const userAuth = (email, password)=>{
    const user = users.find(user => user.email == email || user.no_hp == email)
    //const user = users.find(user => user.email == email && user.password == password && user.no_hp == no_hp)
    let message = null

    if (!user) {
        message = 'Login gagal, Silahkan check email dan password' 
       } else {   
        message = 'Login berhasil, Selamat datang ${user.name_user}'
    }
} else {
    message = 'Email or no_hp tidak terdaftar'
}

    console.log(message);
};

    const createUser = (email, password, name_user, tanggal_lahir, alamat, gender, no_hp) => {
    
            const useremail = users.find((user) => user.email === email);
            const idLatest = users[users.length -1].id;
            let message = null;
            
        
    //  const user = {id, email, password, name_user, tanggal_lahir, alamat, gender, no_hp}

        if(useremail){
            message = "Email telah terdaftar";
        } else {
        users.push({id:idLatest+1, email, password, name_user, tanggal_lahir, alamat, gender, no_hp});
    
        message = " User berhasil registrasi";
    }
console.log(message);
    };

userAuth("thataa@gmail.com", "thaa")

userAuth("085707811131", "thaa")

createUser(3, "lalapo@gmail.com", "lala", "Lalapo", "10-05-2002", "Kedondong", "cewek", "085620344510")

console.log(users);
