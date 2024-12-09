import User from '../models/user_model.js';

export const fetchHomeData = async (req, res, next) => {

    try{
        const emailId = req.query.email;

        const user = await User.findOne({emailId : emailId});

        // console.log(user.committees);

        const transformedCommittees = user.committees.map(comm => ({
            committeeName: comm.committee_name,
            position: comm.position
        }));
        
        const responseUser = {...user._doc, committees : transformedCommittees};

        return res.status(200).json({
            message : "Data pulled",
            user : responseUser
        });

    } catch (err) {
        return res.status(500).json({
            message : "An internal server error occured",
            error : err.message
        });
    }
}