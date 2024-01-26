"use client";
import React from 'react'
import { useRouter,  useSearchParams } from 'next/navigation'



const GoogleAuthCallback = () => {
  const router = useRouter()
  
  const searchParams = useSearchParams()
  const params_state = searchParams.get('state')
  const params_code = searchParams.get('code')
  const obj = {
    state: params_state,
    code: params_code,
  };
  const method = "POST";
  const body = JSON.stringify(obj);
  console.log(body)
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  React.useEffect(() => {
    fetch(`http://localhost:8000/auth/google/callback`, { method, headers, body} )
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          router.push('/')
        }
    })
    .catch(() => {
      console.error
    });
  }, []);
  return (
    <div>
      認証中
    </div>
  )
};

export default GoogleAuthCallback;
