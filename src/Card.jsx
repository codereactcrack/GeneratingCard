import React from 'react';
import './Card.css';
import Barcode from 'react-barcode';

const Card = ({ employee }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <div className="card-header">
            <img src='src/assets/Logo.png' alt="Company Logo" className="company-logo" />
          </div>
          <div className="card-body">
            <img src={employee.photo} alt={`${employee.details.firstName} ${employee.details.lastName}`} className="employee-photo center" />
            <h2 className="employee-name center">{employee.details.firstName} {employee.details.lastName}</h2>
            <p className="employee-title center">{employee.details.designation}</p>
            <div className="person-details">
              <p className="employee-department"><span className='sub-title'>Deptarment:</span>  {employee.details.department}</p>
              <p className="employee-email"> <span className='sub-title'>Email: </span>{employee.details.email}</p>
              <p className="employee-phone"> <span className='sub-title'>Phone: </span>{employee.details.phoneNo}</p>
              <p className="employee-code"> <span className='sub-title'>Code: </span>{employee.code}</p>
              <div>
                <Barcode value={employee.employeeId} className="barcode"/>
              </div>
            </div>
          </div>
        </div>
        <div className="card-back">
          <div className="card-header">
            <h2>WEB SOLUTION</h2>
            <p>We are the best in business</p>
          </div>
          <div className="card-body">
            <h2 className="employee-name center">{employee.details.firstName} {employee.details.lastName}</h2>
            <p className="employee-title center">{employee.details.designation}</p>
            <img src={employee.signature} alt="Signature" className="employee-signature center" />
            <div className='person-details'>
              <p className="employee-dob"><span className='sub-title'>D.O.B: </span>{employee.dob}</p>
              <p className="employee-code"><span className='sub-title'>Employee Id: </span> {employee.employeeId}</p>
              <p className="employee-code"><span className='sub-title'>Code:</span> {employee.code} </p>
            <div className='company-details'>

            </div>
              <ul className='social'>
                <li><span className='sub-title'>Instagram: </span> @codereactcrack</li>
                <li><span className='sub-title'>GitHub:</span> @codereactcrack</li>
              </ul>
              <p className='center address'><span className='sub-title'>1233 Eubank Blvd NE,Albuquerque</span></p>
              <p className='center address'><span className='sub-title'>New York - 87112</span></p>
              <p className='center address'><span className='sub-title'>United States</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
