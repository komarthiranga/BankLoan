import { useState } from 'react';
const useHttp = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState<any>(null)


  const formFiledsHandler = async (urlObj: any) => {
    if (urlObj.method === 'GET') {
      const response = await fetch(urlObj.url);
      let responseData = await response.json();
      responseData = responseData.fields.map((item: any) => { 
        if(typeof item === 'string' && item !== 'email' && item !== 'monthly_income' && item !== 'gender') {
            return { name: item, type: 'text', required: true }
        } else if(typeof item === 'string' && item === 'email') {
            return { name: item, type: 'email', required: true }
        } else if(typeof item === 'string' && item === 'monthly_income') {
            return { name: item, type: 'number', required: true }
        } else if(typeof item === 'string' && item === 'gender') {
            return { name: item, type: 'select', required: true, options: ['male', 'female', 'transgender']};
        } else {
            return item;
        }
      }

      );
      setData(responseData);
    } else if (urlObj.method === 'POST') {
      const response = await fetch(urlObj.url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(urlObj.requestBody),
      });
      const content = await response.json();
      setStatus(content);
    }
  };

  return {
    data,
    formFiledsHandler,
    status
  };
};

export default useHttp;
