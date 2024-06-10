<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plant;

class PlantController extends Controller
{
    public function index() {
        $plant = Plant::get();
        return $this->sendJson($plant, 'Data tanaman berhasil ditampilkan.');
    }
}
