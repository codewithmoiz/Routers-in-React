import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {

  let githubData = useLoaderData();


  return (
    <div className="text-center text-white bg-gray-600 p-4 text-3xl">
      Github Followers: {githubData.followers || 'Loading...'}
      <img className='m-auto w-[300px] my-[20px]' src={githubData.avatar_url} alt="Github Profile Pic" />
    </div>
  );
};

export default Github;
