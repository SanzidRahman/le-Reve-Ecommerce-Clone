import Image from "next/image";
import loginBanner from "../../../public/login-banner.jpg";
import logoblack from "../../../public/logo-black.png";

const SignInPage = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center">
      <div className="flex basis-1/2">
        <Image src={loginBanner} alt="login-banner" height={700} width={700} />
      </div>
      <div className="flex flex-col xl:flex xl:flex-col mt-10 justify-center items-center basis-1/2 mb-50">
        <Image src={logoblack} alt="logoBlack" height={100} width={100} />
        <p className="text-[10px] mt-2">
          Join us and stay in the loop for exclusive deals, offers, discounts,
          received
        </p>
        <p className="text-[10px]">OTPs, surprising gift vouchers and more!</p>
        <p className="mt-10 text-[14px]">Enter Your Mobile Number</p>
        <span className="h-15 max-w-[300px] text-center text-[9px] mx-auto">
          ( Note: If you hold Privilege Membership, kindly utilize your
          membership number for logging in and enjoy the associated benefits in
          online.)
        </span>
        <div className="flex flex-col justify-center items-center">
          <input
            className="h-10 w-80 border border-black pl-4 mb-2"
            type="text"
            placeholder="01XXXXXXXX"
          />
          <button className="h-10 w-80 bg-yellow-300 cursor-pointer">LogIn</button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
