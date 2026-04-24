"use server"

import { revalidatePath } from "next/cache";


export const handlePostAction = async(formData) => {
    
    const title = formData.get("title");
    const des = formData.get("des"); 

    console.log({title, des});

    addPost({title, description: des, } )

    revalidatePath("/server-action",  )
    
  }