import mongoose from 'mongoose'
const MemberSchema = new mongoose.Schema({
    u_name:{
        type:String,
        required:true,

    },
    u_email:{
        type:String,
        required:true,
        unique:true
    },
    member_code:{
        type:String,
        required:true,
        unique:true
    },
    u_pass:{
        type:String,
        required:true

    },
    isAdmin:{
        type:Boolean,
        default:false,



    }
});
const Member = mongoose.model('Member',MemberSchema);
export default Member;