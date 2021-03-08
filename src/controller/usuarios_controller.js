import {
    User
} from '../database/database'
async function getUsers(req, res) {
    const msg = req.params.palabra;
    res.status(200).json({
        state: 'ok',
        msg
    });
}

async function login(req, res) {
    try {
        const {
            email,
            password
        } = req.body;
        const user = await User.findOne({
            where: {
                email
            },
        });

        if(!user){
            return res.status(404).json({
                status:'404',
                message:'Usuario o contraseña incorrecta'
            })
        }

        if(password==user.password){
            return res.status(404).json({
                status:'404',
                message:'Usuario o contraseña incorrecta'
            })
        }

        res.status(200).json({
            status:'200',
            message:'Sesion iniciada'
        })
    } catch (error) {
        return res.status(500).json({
            status:'500',
            message:'error al iniciar sesion'
        })
    }
}

module.exports = {
    getUsers,login
}