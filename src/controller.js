exports.index = async (req, res, next) => {


    try{

        var results = [];

        return res.json(results).status(200);

    }catch(err){
        next(err);
    }


}