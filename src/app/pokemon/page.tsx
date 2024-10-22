"use client";
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const PokePage = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/");
    })
  return <div>Redirecting...</div>
}

export default PokePage
