import mongoose from 'mongoose';


const todoSchema = new mongoose.Schema(
    
    {
        title:{
            type: 'string',
            required: [true , "title required"],
        },
        description:{
            type: 'string',
            required: [true , "description required"],
        },
    },
    {
        timestamps: true,
    }
        )



        export default mongoose.model("Todo", todoSchema)