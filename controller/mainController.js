
const mainController = {
    
    index:(req,res) =>{
        return res.render('index');
    },
    
    register:(req,res) =>{
        return res.render('register');
    },
    login:(req,res) =>{
        return res.send('Login');
    }
}



module.exports = mainController; 