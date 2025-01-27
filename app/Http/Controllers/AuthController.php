<?php

namespace App\Http\Controllers;

use App\Models\estados;
use App\Models\Localidades;
use App\Models\Municipios;
use App\Models\Servicio;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function register(){
        $estados = Estados::where('status',2)->get();
        $municipios = Municipios::where('status',2)
            ->whereIn('estado_id',$estados->pluck('id')->toArray())->get();
        $localidades = Localidades::where('status',2)
            ->whereIn('municipio_id',$municipios->pluck('id')->toArray())->get();
        $paquetes=Servicio::orderBy('costo')->get();

        return view('auth.register',compact('estados','municipios','localidades','paquetes'));
    }
    public function logout(){
        Session::flush();
        Auth::logout();
        return redirect('login');
    }
    public function data(){
        if (!Auth::guest()){
            $datos=User::join('servicio_usuario','servicio_usuario.id_usuario','=','users.id_user')
                ->join('persona','persona.id_persona','=','users.id_persona')
                ->where('users.id_user',Auth::id())
                ->get();
            return $datos;
        }
    }
}
