<?php

namespace App\Http\Controllers;

use App\Models\Salle;
use Illuminate\Http\Request;

class SalleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Salle::all(), 200);
    }

    public function getSalleById($id) {
        $salle = Salle::find($id);
        if(is_null($salle)) {
            return response()->json(['message' => 'Salle Not Found'], 404);
        }
        return response()->json($salle::find($id), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        return Salle::create([
            'name' => $request->input('name'),
            'promotion' => $request->input('promotion')
        ]);
    }

    public function deleteSalle($id) {
        $salle = Salle::find($id);
        if(is_null($salle)) {
            return response()->json(['message' => 'Salle Not Found'], 404);
        }
        $salle->delete();
        return response()->json(null, 204);
    }

    public function updateSalle($id, Request $request)
    {
        $salle = Salle::find($id);
        if(is_null($salle)) {
            return response()->json(['message' => 'Salle Not Found'], 404);
        }
        $salle->update($request->all());
        return response($salle, 200);
    }
}
