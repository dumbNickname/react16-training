import React from 'react';

export const FormGroup = ({ children, bgColor, fontColor }) => (
  <div className="form-group" 
    style={{
      backgroundColor: bgColor,
      color: fontColor,
    }}
  >
    {children}
  </div>
)