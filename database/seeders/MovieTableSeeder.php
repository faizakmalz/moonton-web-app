<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'Titanic',
                'slug' => 'Titanic',
                'video_url'=> 'https://www.youtube.com/watch?v=CHekzSiZjrY',
                'category'=> 'Drama',
                'thumbnail' => 'https://i.ytimg.com/vi/LNK_vFYF4eU/maxresdefault.jpg',
                'rating'=> 9.3,
                'is_featured' => 0,

            ],
            [
                'name' => 'Avengers',
                'slug' => 'Avengers',
                'video_url'=> 'https://www.youtube.com/watch?v=eOrNdBpGMv8',
                'category'=> 'Drama',
                'thumbnail' => 'https://wallpapers.com/images/featured/avengers-vm16xv4a69smdauy.jpg',
                'rating'=> 9.9,
                'is_featured' => 1,
            ],
            [
                'name' => 'Exhumma',
                'slug' => 'Exhumma',
                'video_url'=> 'https://www.youtube.com/watch?v=j_6_wLF1pDg',
                'category'=> 'Drama',
                'thumbnail' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4CFqokFL5kGKtsUPY-E0wxn-Bi5_NaiVOw&s',
                'rating'=> 9.8,
                'is_featured' => 0,
            ]
        ];

            Movie::insert($movies);
    }
};
