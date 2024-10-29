import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/Authenticated";
import { useForm } from "@inertiajs/react";

export default function Profile({auth}) {

    console.log('profile', auth);

    
    const { data, setData, post, processing } = useForm({
        email: '',
        name: '',
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        
        // post(route('user.dashboard.index'));
    };
    return (
        <Authenticated auth={auth}>
        <div className="pb-24 flex">
                    <div>
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                 Edit Profile
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Change settings and make best from your profile
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        forInput='email'
                                        value='email'
                                    />
                                    <TextInput
                                        className="bg-white text-white"
                                        type='email'
                                        name='email'
                                        placeholder='Email anda'
                                        value={auth.user.email}
                                        onChange={handleOnChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        forInput='name'
                                        value="Name"
                                    />
                                    <TextInput
                                        className="bg-white text-white"
                                        type='text'
                                        name='name'
                                        value={auth.user.name}
                                        onChange={handleOnChange}
                                        placeholder='Nama anda'
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                    <SecondaryButton type="submit" variant="primary" processing={processing}>
                                        <span className="text-base font-semibold">
                                             Edit User
                                        </span>
                                    </SecondaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </Authenticated>
    )
}