import { v2 as cloudinary } from 'cloudinary';

import dotenv from 'dotenv';

dotenv.config()

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})
console.log("Cloud name:", process.env.CLOUDINARY_CLOUD_NAME); // should not be undefined


const uploadImageCloudinery=async(image)=>{

    const buffer=image?.buffer||Buffer.from(await image.arrayBuffer())
     
    const uploadImage=await new Promise((resolve,reject)=>{
        cloudinary.uploader.upload_stream({folder:"Combat"},(error,uploadResult)=>{
          if (error) {
            console.error("Cloudinary Upload Error:", error);
            return reject(error); // <-- properly reject on error
          }
            return resolve(uploadResult)

        }).end(buffer)

    })
    return uploadImage;

}

export default uploadImageCloudinery;   


// import { v2 as cloudinary } from 'cloudinary';
// import dotenv from 'dotenv';

// dotenv.config();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const uploadImageCloudinery = async (image) => {
//   try {
//     const buffer = image?.buffer || Buffer.from(await image.arrayBuffer());

//     const uploadImage = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: "Combat" ,
          
//         },
//         (error, uploadResult) => {
//           if (error) {
//             return reject(error);
//           }
//           return resolve(uploadResult);
//         }
//       );
//       stream.end(buffer);
//     });

//     return uploadImage;
//   } catch (error) {
//     console.error("Cloudinary upload error:", error);
//     throw error; // Let the controller handle the error
//   }
// };

// export default uploadImageCloudinery;
