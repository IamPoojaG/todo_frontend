import React from 'react';

export default function item({ text, remove, update }) {
  console.log(remove, update);
  return (
    <div className='item'>
      <div className='text'>{text}</div>
      <div className='icon'>
        <i className='ri-pencil-fill mx-1' onClick={update}>
          Edit
        </i>
        <i className='ri-delete-bin-6-line mx-1' onClick={remove}>
          Delete
        </i>
      </div>
    </div>
  );
}
