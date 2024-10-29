import { useEffect } from "react";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        
        post(route("register"));
    };

    return (
        <>
            <Head title="Sign up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our snew movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        forInput={"name"}
                                        value={"Full Name"}
                                    />
                                    <TextInput
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        placeholder="Your Fullname..."
                                        onChange={handleOnChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        forInput="email"
                                        value="Email"
                                    />
                                    <TextInput
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        placeholder="Email"
                                        onChange={handleOnChange}
                                        required
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        forInput="password"
                                        value="Password"
                                    />
                                    <TextInput
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        placeholder="Password"
                                        onChange={handleOnChange}
                                        required
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        forInput={"password_comfirmation"}
                                        value={"Confirm Password"}
                                    />
                                    <TextInput
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        placeholder="Password"
                                        onChange={handleOnChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                {/* <Link href={route('prototoype.dashboard')}> */}
                                <SecondaryButton
                                    type="submit"
                                    variant="primary"
                                    processing={processing}
                                >
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </SecondaryButton>
                                <Link href={route("login")}>
                                    <SecondaryButton
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span className="text-base font-semibold">
                                            Sign in to My Account
                                        </span>
                                    </SecondaryButton>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
