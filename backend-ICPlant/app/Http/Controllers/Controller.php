<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function sendJson($data = [], $message)
    {
        $Json = [
            'status' => true,
            'message' => $message,
            'data' => $data
        ];

        return response()->json($Json, 200);
    }

public function sendError($message)
    {
        $Json = [
            'status' => false,
            'message' => $message
        ];

        if(!empty($errormessage)){
            $Json['data'] = [$errormessage];
        }

        return response()->json($Json, 400);
    }
}
