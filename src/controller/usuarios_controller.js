
async function getUsers(req,res){
    const msg = req.params.palabra;
    res.status(200).json({state:'ok',msg});
}

module.exports={getUsers}