const Register = () => {
    return (
        <div className='bg-white  w-[32rem]   mx-auto px-16 py-14 shadow-xl shadow-gray-300 rounded-md'>
            <h1 className='text-2xl text-gray-800 font-sans font-normal mb-1'>
                Sign in with your email
            </h1>
            <span className='text-sm text-gray-600'>
                Already have an account?
            </span>
            <span className=' text-sm ml-2 text-blue-500'>
                Sign in
            </span>

            <form className='flex flex-col gap-5 text-gray-500 text-xs mt-10'>
                <div className='border rounded border-gray-300 font-thin flex flex-col p-3 '>
                    <span className=''>Email address</span>
                    <input
                        type='text'
                        className='placeholder:text-sm text-sm outline-none py-[1px]'
                        placeholder='mia@khalifa.com'
                    />
                </div>

                <div className='border rounded border-gray-300 font-thin flex flex-col p-3 '>
                    <span className=''>Password</span>
                    <input
                        type='password'
                        className='placeholder:text-sm text-sm outline-none py-[1px]'
                        placeholder='*********'
                    />
                </div>

                <div>
                    <p className='text-blue-500'>
                        Forgot your password?
                    </p>
                </div>

                <button className='bg-[#5551FF] text-white py-5 rounded text-sm my-3 shadow-xl shadow-[#5551FF]/30 '>
                    Create account
                </button>
            </form>
        </div>
    );
};

export default Login;
