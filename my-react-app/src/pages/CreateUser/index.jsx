import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import React from 'react'

function CreateUser() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div style={{padding:"30px 60px"}}>
        <h1 style={{textAlign:"center"}}>Create User</h1>
        <FormControl onSubmit={handleSubmit(onSubmit)}>
            <FormLabel my={"2"}>Name</FormLabel>
            <Input {...register("Name", { required: true, maxLength: 20 })} type='text' />
            <FormLabel my={"2"}>Surname</FormLabel>
            <Input {...register("Surname", { required: true, maxLength: 20 })} type='text' />
            <FormLabel my={"2"}>Birthday</FormLabel>
            <Input {...register("Birthday", { required: true})} type='date' />
            <FormLabel my={"2"}>Email address</FormLabel>
            <Input {...register("Email", { required: true, maxLength: 20 })} type='email' />
            <Input maxW={"64"} my={"5"} type='submit' />
        </FormControl>
    </div>
  )
}

export default CreateUser