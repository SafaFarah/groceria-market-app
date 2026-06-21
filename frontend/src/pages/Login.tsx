import { useState } from 'react'
import { heroSectionData } from '../assets/assets'
import { Link } from 'react-router-dom'
import { Loader2Icon, LockIcon, MailIcon, ShoppingCartIcon, UserIcon } from 'lucide-react'

const Login = () => {
  const [isLoginState, setIsLoginState] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.SubmitEvent)=>{
    e.preventDefault()
    setLoading(true);
    setTimeout(()=> window.location.href = "/", 1000)
  }

  return (
    <div className='min-h-screen flex'>
        {/* Left Side */}
        <div className='hidden lg:flex lg:w-1/2 bg-pacific-cyan-900 relative items-center
        justify-center'>
        <img src={heroSectionData.grocery_image} alt='' className='absolute inset-0
        object-cover h-full  opacity-10' />
        <div className='relative text-center px-12'>
          <h2 className='text-4xl font-semibold text-white mb-4'> Welcome back to Groceria </h2>
          <p className='text-white/70 text-xl max-w-sm mx-auto'>
          Fresh groceries are just a few clicks away. Explore quality products, 
          track your orders, and enjoy the best deals at Groceria.</p>
        </div>
        </div>
        {/* right Side */}
        <div className='flex-1 flex-center px-4 py-12 bg-cream'>
          <div className='w-full max-w-md mx-auto'>
            {/* form header */}
            <div className='text-center mb-8'>
              <Link to="/" className='inline-flex items-center gap-2 mb-6'>
                <ShoppingCartIcon className='size-8 text-pacific-cyan-800' />
                <span className='text-2xl font-semibold text-pacific-cyan-800 '>
                Groceria </span>
              </Link>
              <h1 className='text-2xl font-semibold text-pacific-cyan-800 mb-2'>
                {isLoginState ? "Sign in to your account" : "Sign up to an account"}
              </h1>
              <p className='text-sm text-pacific-cyan-800'>
                {isLoginState ? "Don't have an account?" : "Already have an account."}
                <button onClick={()=>setIsLoginState(!isLoginState)} className='text-pacific-cyan-600 
                  ml-1 font-semibold hover:text-pacific-cyan-800 transition-colors'>
                  {isLoginState ? "Create one" : "Sign in"}
                </button>
              </p>
            </div>

            {/* Login - Register Form */}
            <form onSubmit={handleSubmit} className='space-y-5'>
              {!isLoginState && (
                <label className='text-sm flex flex-col gap-1'>
                  Name
                  <div className='relative'>
                    <UserIcon className='absolute left-3.5 top-1/2
                    -translate-y-1/2 size-4 text-pacific-cyan-800' />
                    <input
                    type='text'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                    placeholder='Your name'
                    className='w-full pl-10 pr-4 py-3 text-sm bg-white
                    rounded-xl border not-foucs:border-pacific-cyan-900
                    transition-all'/>
                  </div>
                </label>
              )}
              <label className='text-sm flex flex-col gap-1'>
                  Email
                  <div className='relative'>
                    <MailIcon className='absolute left-3.5 top-1/2
                    -translate-y-1/2 size-4 text-pacific-cyan-800' />
                    <input
                    type='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    placeholder='you@example.com'
                    className='w-full pl-10 pr-4 py-3 text-sm bg-white
                    rounded-xl border not-foucs:border-pacific-cyan-900
                    transition-all'/>
                  </div>
                </label>
                <label className='text-sm flex flex-col gap-1'>
                  Password
                  <div className='relative'>
                    <LockIcon className='absolute left-3.5 top-1/2
                    -translate-y-1/2 size-4 text-pacific-cyan-800' />
                    <input
                    type='Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    placeholder='********'
                    className='w-full pl-10 pr-4 py-3 text-sm bg-white
                    rounded-xl border not-foucs:border-pacific-cyan-900
                    transition-all'/>
                  </div>
                </label>
              <button 
              type='submit'
              disabled={loading}
              className='flex-center w-full py-3 bg-pacific-cyan-800 text-white
              font-semibold rounded-xl hover:bg-pacific-cyan-900 transition-colors
              disabled:opacity-50'>
                {loading ? <Loader2Icon className='animate-spin'/> :
                isLoginState ? "Sign in" : "Sign Up"}
              </button>
            </form>
          </div>
        </div>
    </div>
  )
}
export default Login