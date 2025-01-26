import React from 'react'

const GithubUserLoader = async () => {
    const userData = await fetch('https://api.github.com/users/codewithmoiz');
    const data = await userData.json();
    return data;
}

export default GithubUserLoader