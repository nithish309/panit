import React from 'react';

const Location = () => {
  return (
    <div className="flex justify-center items-center  w-full h-screen">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d236.98423061730637!2d77.60037915067473!3d11.286220818339775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDE3JzEwLjQiTiA3N8KwMzYnMDEuOSJF!5e1!3m2!1sen!2sin!4v1729344246523!5m2!1sen!2sin"
        ></iframe>
    </div>
  );
};

export default Location;
