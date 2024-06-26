import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Card from '../Card';

import '../Form/GetDetails.css'

const GetDetails = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const defaultDate = Date();
    const initialDate = dayjs(defaultDate);
    const [selectedDate, setSelectedDate] = useState(initialDate);

    const [photo, setPhoto] = useState();
    const [signature, setSignature] = useState();

    function addPhoto(e) {
        setPhoto(URL.createObjectURL(e.target.files[0]));
    }
    function addSignature(e){
        setSignature(URL.createObjectURL(e.target.files[0]));
    }

    const [employeeData, setEmployeeData] = useState(null);

    const onSubmit = (data) => {
        const employee = {
            details: data,
            dob: selectedDate.format('DD-MM-YYYY'),
            photo: photo,
            signature: signature,
            employeeId: 'CRC001',
            code:'001'
        };
        setEmployeeData(employee);
    };

    return (
        <div className='form-container'>
            {employeeData ? <Card employee={employeeData} /> :
                <form onSubmit={handleSubmit(onSubmit)} className="employee-form">
                    <div className="form-group">
                        <label>First Name -</label>
                        <input type='text' id='firstName' {...register("firstName", { required: true, maxLength: 20 })} />
                        {errors.firstName && <span className="error">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label>Last Name -</label>
                        <input type='text' id='lastName' {...register("lastName", { maxLength: 20 })} />
                    </div>
                    <div className="form-group">
                        <label>Designation -</label>
                        <input type='text' id='designation' {...register("designation", { required: true, maxLength: 50 })} />
                        {errors.designation && <span className="error">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label>Department -</label>
                        <input type='text' id='department' {...register("department", { required: true, maxLength: 50 })} />
                        {errors.department && <span className="error">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label>Email -</label>
                        <input type="email" id="email" {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label>Gender Selection -</label>
                        <select {...register("gender", { required: true })}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                        {errors.gender && <span className="error">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label>Phone Number -</label>
                        <input type='text' id='phoneNo' {...register("phoneNo", { required: true, maxLength: 10, minLength: 10 })} />
                        {errors.phoneNo && <span className="error">Correct Number is required</span>}
                    </div>
                    <div className="form-group">
                        <label>D.O.B -</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker value={selectedDate} onChange={(newDate) => setSelectedDate(newDate)} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className="form-group">
                        <label>Add a Photo</label>
                        <input type="file" onChange={addPhoto} />
                    </div>
                    <div className="form-group">
                        <label>Add Signature</label>
                        <input type="file" onChange={addSignature} />
                    </div>
                    <div className="form-group">
                        <input type="submit" />
                    </div>
                </form>
            }
        </div>
    );
}

export default GetDetails;
