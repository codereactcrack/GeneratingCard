import React, { useState } from 'react'
import { useForm } from "react-hook-form"

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

const GetDetails = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const defaultDate = Date();
      const initialDate = dayjs(defaultDate);
      const [selectedDate, setSelectedDate] = useState(initialDate);

      const onSubmit = (data) => console.log(data,selectedDate.format('DD-MM-YYYY'))

        return (
            <div className='form-container'>
                <form onSubmit={handleSubmit(onSubmit)}>
            
                    <label>First Name -</label>
                    <input type='text' id='firstName'{...register("firstName" ,{ required: true, maxLength: 20 })} />
                    {errors.firstName && <span>This field is required</span>}
                    <br/>

                    <label>Last Name -</label>
                    <input type='text'id='lastName' {...register("lastName" ,{ maxLength: 20 })} />
                    <br/>

                    <label>Designation -</label>
                    <input type='text' id='designation'{...register("designation", { required: true, maxLength: 20 })} />
                    {errors.designation && <span>This field is required</span>}
                    <br/>

                    <label>Department -</label>
                    <input type='text' id='department'{...register("department", { required: true, maxLength: 20 })} />
                    {errors.department && <span>This field is required</span>}
                    <br/>

                    <label>Email -</label>
                    <input type="email" id="email" {...register("email", { required: true})} />
                    {errors.email && <span>This field is required</span>}
                    <br/>

                    <label>Gender Selection -</label>
                    <select {...register("gender" ,{required:true})} >
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    {errors.gender && <span>This field is required</span>}
                    <br/>

                    <label>Phone Number -</label>
                    <input type='text' id='phoneNo' {...register("phoneNo" ,{ required: true, maxLength: 10 ,minLength:10 })} />
                    {errors.phoneNo && <span>Correct Number is required</span>}
                    <br/>

                    <label>D.O.B -</label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker value={selectedDate} onChange={(newDate)=> setSelectedDate(newDate)}/>
                        </DemoContainer>
                    </LocalizationProvider>
                    <br/>

                    <input type="submit" />
                </form>
            </div>
        )
}

export default GetDetails