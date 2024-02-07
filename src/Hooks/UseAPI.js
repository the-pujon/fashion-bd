import { useState, useEffect } from 'react';
import axios from 'axios';

const useAPI = () => {
  const makeRequest = async (url, method, requestData = null) => {
    try {
      const response = await axios[method.toLowerCase()](url, requestData);
      return response.data;
    } catch (error) {
      throw new Error(`Error ${method}ing data: ${error.message}`);
    }
  };

  const get = async (url) => {
    return await makeRequest(url, 'GET');
  };

  const post = async (url, requestData) => {
    return await makeRequest(url, 'POST', requestData);
  };

  const put = async (url, requestData) => {
    return await makeRequest(url, 'PUT', requestData);
  };

  const patch = async (url, requestData) => {
    return await makeRequest(url, 'PATCH', requestData);
  };

  const deleteRequest = async (url) => {
    return await makeRequest(url, 'DELETE');
  };

  return { get, post, put, patch, delete: deleteRequest };
};

export default useAPI;
