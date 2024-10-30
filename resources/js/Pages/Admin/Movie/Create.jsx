import Checkbox from "@/Components/Checkbox";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/react";

export default function Create({auth}) {

    const {data,setData, post, processing, errors, reset } = useForm({
        name: '',
        category: '',
        video_url: '',
        thumbnail: null,
        rating: '',
        is_featured: false,
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'file' ? event.target.files[0]: event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
            console.log('formdata', key, value);
        }
        post(route('admin.dashboard.movie.store'), { data: formData });

        console.log('event',e);
        console.log('data', data);        
        
    };

    return (
        <Authenticated auth={auth}>
            <Head>
                <title>Create Movie</title>
            </Head>
            <div>
                <h1 className='font-bold text-[24px]'>Insert New Movie</h1>
                <div className='mb-4'></div>

                <form onSubmit={submit} className='flex flex-col gap-4' encType="multipart/form-data">
                    <div>
                        <InputLabel
                            forInput='name'
                            value='Name'
                        />
                        <TextInput
                            type="text"
                            name="name"
                            variant="light"
                            onChange={handleOnChange}
                            placeholder='Enter Name'
                        />
                    </div>
                    <div>
                        <InputLabel
                            forInput='category'
                            value='Category'
                        />
                        <TextInput
                            type="text"
                            name="category"
                            variant="light"
                            onChange={handleOnChange}
                            placeholder='Enter Category'
                    />
                    </div>
                    <div>
                        <InputLabel
                            forInput='video_url'
                            value='Video URL'
                        />
                        <TextInput
                            type="url"
                            name="video_url"
                            variant="light"
                            onChange={handleOnChange}
                            placeholder='Video URL'
                    />
                    </div>
                    <div>
                        <InputLabel
                            forInput='rating'
                            value='Rating'
                        />
                        <TextInput
                            type="number"
                            name="rating"
                            variant="light"
                            onChange={handleOnChange}
                            placeholder='Rating'
                    />
                    </div>
                    <div className='flex flex-row mt-4 items-center gap-4'>
                        <InputLabel
                            forInput='is-featured'
                            value='Is Featured'
                        />
                        <Checkbox
                            name='is_featured'
                            onChange={(event) => setData('is_featured', event.target.checked)
                            }
                        />
                    </div>
                    <div>
                        <InputLabel
                            forInput='thumbnail'
                            value='Thumbnail'
                        />

                        <TextInput
                            type="file"
                            name="thumbnail"
                            variant="light"
                            // value={data.thumbnail}
                            onChange={handleOnChange}
                            placeholder='thumbnail'
                    />
                    </div>
                    <SecondaryButton
                        disabled={processing}
                        type="submit"
                        processing={processing}
                        >Upload Movie
                    </SecondaryButton>     
                    
                </form>
            </div>
        </Authenticated>
    )
}