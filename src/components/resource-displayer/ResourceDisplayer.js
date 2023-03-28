import React, { useState } from 'react';
import { getPublicResource, getUserResource, getAdminResource } from '../../services/resourcesService';
import { logout } from '../../services/authService';
import jwt_decode from 'jsonwebtoken/decode';

export const ResourceDisplayer = (props) => {
  const [userResource, setUserResource] = useState('');
  const [publicResource, setPublicResource] = useState('');
  const [adminResource, setAdminResource] = useState('');

  function logOut() {
    logout();
    props.setDisplayResources(false);
  }

  async function displayPublicResource() {
    const token = localStorage.token;
    const decodedToken = jwt_decode(token);
    const currentDate = new Date();
    const expDate = new Date(decodedToken.exp * 1000);
    if (expDate < currentDate) {
        logOut();
    }
    else setPublicResource(await getPublicResource());
  }

  async function displayUserResource() {
    const token = localStorage.token;
    const decodedToken = jwt_decode(token);
    const currentDate = new Date();
    const expDate = new Date(decodedToken.exp * 1000);
    if (expDate < currentDate) {
        logOut();
    }
    else setUserResource(await getUserResource());
  }

  async function displayAdminResource() {
    const token = localStorage.token;
    const decodedToken = jwt_decode(token);
    const currentDate = new Date();
    const expDate = new Date(decodedToken.exp * 1000);
    if (expDate < currentDate) {
        logOut();
    }
    else setAdminResource(await getAdminResource());
  }

  return (
    <div className="resource-display">
        <button type='button' onClick={displayPublicResource}>public</button>
        {publicResource && `<h3>${publicResource}</h3>`}
        <button type='button' onClick={displayUserResource}>user</button>
        {userResource && `<h3>${userResource}</h3>`}
        <button type='button' onClick={displayAdminResource}>admin</button>
        {adminResource && `<h3>${adminResource}</h3>`}
        <button type='button' onClick={logOut}>logout</button>
    </div>
  );
};
