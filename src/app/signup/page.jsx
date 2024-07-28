'use client'
import { BaseURL } from "@/constants/baseUrl";
import { useCookies } from "next-client-cookies";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";

const page = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [name, setName] = useState("")
    const [eye, setEye] = useState(false)
    const passref = useRef(null)
    const cookies = useCookies()
    const router = useRouter()

    const handleBorder = () => {
        if (passref.current) passref.current.parentNode.style.borderColor = '#999999'
    }
    const blurBorder = () => {
        if (passref.current) passref.current.parentNode.style.borderColor = ''
    }
    const signupHandle = async () => {
        try {
            const payload = {
                email,
                name,
                password: pass
            }
            let res = await fetch(`${BaseURL}/signup`, {
                mode: 'cors',
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(payload)
            })
            res = await res.json()
            console.log(res)
            if (res.user) {
                cookies.set('user', res.token)
                router.push("/")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#FFF] to-[#AFA3FF] ">
            <div className='p-[60px] bg-gradient-to-b from-[#F7F7F7] to-[#F0F0F0] rounded-2xl'>
                <div className='text-[48px] leading-[60px] pb-[32px] font-barlow font-semibold'>
                    Welcome to <span className='text-[#4534AC]'>Workflo</span>!
                </div>
                <div className='w-full flex flex-col pb-8'>
                    <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Full name' className='px-3 py-4 rounded-lg mb-6 text-[#999999] bg-[#EBEBEB] outline-[#999999]' />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Your email' className='px-3 py-4 rounded-lg mb-6 text-[#999999] bg-[#EBEBEB] outline-[#999999]' />
                    <div className="flex flex-row items-center justify-center border-2 text-[#999999] bg-[#EBEBEB] w-full px-3 py-4 rounded-lg mb-5 ">
                        <input value={pass} onChange={(e) => setPass(e.target.value)} ref={passref} onBlur={blurBorder} onFocus={handleBorder} type={eye ? 'password' : 'text'} placeholder='Password' className='bg-[#EBEBEB] outline-none w-full' />
                        <div className="px-2 font-semibold" onClick={() => setEye(!eye)}>{eye ? <GoEyeClosed /> : <GoEye />}</div>
                    </div>
                    <button onClick={signupHandle} className='rounded-lg bg-gradient-to-b from-[#4B36CC] to-[#9C93D4] text-white py-[14px] text-center'>Sign up</button>
                </div>
                <div className="text-basic w-full text-center">
                    Already have an account?
                    <Link href={"/login"} className="text-[#4534AC] pl-1">Log in</Link>.
                </div>
            </div>
        </main>
    )
}

export default page