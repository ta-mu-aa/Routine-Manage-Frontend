"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const CreateBlogpage = () => {
  const router = useRouter();

  const handleSubmit = async () => {
    const res = await fetch(`http://localhost:8000/auth/google`, { cache: "no-store" })
    const redirect_url: string = await res.json();
    if (!res.ok) {
      throw new Error('errorが発生しました')
    }
    window.open(redirect_url, '_blank')
    return res
  }

  return (
    
      <button
        className="bg-slate-200 p-6 rounded shadow-lg"
        onClick={handleSubmit}
    >
    </button>
  )
}

export default CreateBlogpage