import Image from "next/image"
import Link from "next/link"

const Page = () => {
  return (
    <section>
      <div className="grid min-h-screen grid-cols-2">
        <div className="flex flex-col items-center justify-center bg-[#D9D9D9]">
          <Image
            className="mb-6"
            src="/images/icons/logo.svg"
            alt="Website logo"
            width={127.4}
            height={97}
          />
          <h1 className="text-[32px] font-bold">E-Commerce</h1>
          <span className="text-xl font-medium">By Bootcamp 3.0</span>
        </div>

        <div className="flex flex-col items-center justify-center bg-white">
          <form className="shadow-custom mx-auto flex flex-col justify-center rounded-lg px-14 py-6">
            <fieldset>
              <legend className="mb-2 text-center text-[26px] font-bold">Create an account</legend>
              <p className="mb-8 text-center text-lg">Access to our dashboard</p>

              <div className="relative mb-8 flex items-center">
                <Image
                  className="absolute left-4"
                  src="/images/icons/user.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <input
                  type="text"
                  className="h-[55px] w-[396px] rounded-[10px] border border-solid border-[#A8A8A9] bg-[##F3F3F3] pl-[42px] placeholder:text-xs placeholder:font-medium placeholder:text-[#676767]"
                  placeholder="Username or Email"
                />
              </div>

              <div className="relative mb-8 flex items-center">
                <Image
                  className="absolute left-4"
                  src="/images/icons/padlock.svg"
                  alt=""
                  width={16}
                  height={20}
                />
                <input
                  type="password"
                  className="h-[55px] w-[396px] rounded-[10px] border border-solid border-[#A8A8A9] bg-[##F3F3F3] pl-[42px] placeholder:text-xs placeholder:font-medium placeholder:text-[#676767]"
                  placeholder="Password"
                />
                <Image
                  className="absolute right-3"
                  src="/images/icons/eye.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>

              <div className="relative mb-4 flex items-center">
                <Image
                  className="absolute left-4"
                  src="/images/icons/padlock.svg"
                  alt=""
                  width={16}
                  height={20}
                />
                <input
                  type="password"
                  className="h-[55px] w-[396px] rounded-[10px] border border-solid border-[#A8A8A9] bg-[##F3F3F3] pl-[42px] placeholder:text-xs placeholder:font-medium placeholder:text-[#676767]"
                  placeholder="Confirm Password"
                />
                <Image
                  className="absolute right-3"
                  src="/images/icons/eye.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>

              <Link href="" className="mb-6 flex justify-end text-xs text-[#F83758]">
                Forgot Password?
              </Link>

              <button className="mb-4 h-[55px] w-[396px] rounded-lg bg-[#3163E2] text-xl font-semibold text-white">
                Login
              </button>

              <p className="flex justify-center gap-1 text-lg">
                Don´t have an account yet?
                <Link href="/sign-up">
                  <span className="text-lg font-bold">Register</span>
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Page
