import { useState } from 'react';

const Switcher1 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className='flex cursor-pointer select-none items-center'>
      <div className='relative'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <div
          className={`block h-8 w-14 rounded-full transition ${
            isChecked ? 'bg-green-500' : 'bg-gray-300'
          }`}
        ></div>
        <div
          className={`dot absolute top-1 size-6 rounded-full bg-white transition-transform ${
            isChecked ? 'translate-x-7' : 'translate-x-1'
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Switcher1;
