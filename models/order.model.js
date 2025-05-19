import mongoose from "mongoose";


const orderSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    orderId:{
        type:String,
        required:[true,"Provide order id"],
        unique:true
    },
    productId:{
        type:mongoose.Schema.ObjectId,
        ref:"product"
    },
    product_details:{
     
       name:String,
       image:Array
    },
    paymentId:{
        type:String,
        default:""
    },
    payment_stetus:{
        type:String,
        default:""
    },
    delivery_address:{
        type:mongoose.Schema.ObjectId,
        ref:"Address"
    },
    delivery_stetus:{
        type:String,
        default:""
    },
    SubTotalAmt:{
        type:Number,
        default:0
    },
    totalAmt:{
        type:Number,
        default:0
    },
    invoice_receipt:{
        type:String,
        default:""
    }

},{timestamps:true})


const OrderSchema=mongoose.model("order",orderSchema)

export default OrderSchema; 