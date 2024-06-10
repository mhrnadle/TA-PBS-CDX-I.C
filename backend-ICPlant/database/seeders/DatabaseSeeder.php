<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        DB::table('plant')->insert([
            [
                'nama_tanaman' => 'Anemon',  
                'nama_latin' => 'Actiniaria', // Add Latin name
                'jenis' => 'Anthozoa',  // Add plant type
                'deskripsi' => 'Anemon laut adalah hewan dari kelas Anthozoa yang sekilas terlihat seperti tumbuhan, tetapi jika diamati lebih jauh, anemon laut merupakan jenis hewan.',
                'img' => 'public/img/guppy.jpg',
                'habitat' => 'Anemon banyak dijumpai pada daerah terumbu karang yang dangkal dan jarang dijumpai pada daerah terumbu karang yang persentase tutupan karang batunya tinggi.',  // Add habitat information
                'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ],
            [
                'nama_tanaman' => 'Anemon',  
                'nama_latin' => 'Actiniaria', // Add Latin name
                'jenis' => 'Anthozoa',  // Add plant type
                'deskripsi' => 'Anemon laut adalah hewan dari kelas Anthozoa yang sekilas terlihat seperti tumbuhan, tetapi jika diamati lebih jauh, anemon laut merupakan jenis hewan.',
                'img' => 'public/img/guppy.jpg',
                'habitat' => 'Anemon banyak dijumpai pada daerah terumbu karang yang dangkal dan jarang dijumpai pada daerah terumbu karang yang persentase tutupan karang batunya tinggi.',  // Add habitat information
                'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ],
            [
                'nama_tanaman' => 'Anemon',  
                'nama_latin' => 'Actiniaria', // Add Latin name
                'jenis' => 'Anthozoa',  // Add plant type
                'deskripsi' => 'Anemon laut adalah hewan dari kelas Anthozoa yang sekilas terlihat seperti tumbuhan, tetapi jika diamati lebih jauh, anemon laut merupakan jenis hewan.',
                'img' => 'public/img/guppy.jpg',
                'habitat' => 'Anemon banyak dijumpai pada daerah terumbu karang yang dangkal dan jarang dijumpai pada daerah terumbu karang yang persentase tutupan karang batunya tinggi.',  // Add habitat information
                'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ],
    ]);
    }
}
