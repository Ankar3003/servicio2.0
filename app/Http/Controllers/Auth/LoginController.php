<?php



namespace App\Http\Controllers\Auth;



use App\Http\Controllers\Controller;

use App\Models\User;
use App\Providers\RouteServiceProvider;

use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Illuminate\Http\Request;

use Auth;
use Illuminate\Support\Facades\Session;


class LoginController extends Controller

{

    /*

    |--------------------------------------------------------------------------

    | Login Controller

    |--------------------------------------------------------------------------

    |

    | This controller handles authenticating users for the application and

    | redirecting them to your home screen. The controller uses a trait

    | to conveniently provide its functionality to your applications.

    |

    */



    use AuthenticatesUsers;



    /**

     * Where to redirect users after login.

     *

     * @var string

     */

    protected $redirectTo = RouteServiceProvider::HOME;



    /**

     * Create a new controller instance.

     *

     * @return void

     */

    public function __construct()

    {

        $this->middleware('guest')->except('logout');

    }



    /**

     * Write code on Method

     *

     * @return response()

     */

    public function login(Request $request)

    {

        $request->validate([

            'email' => 'required',

            'password' => 'required',

        ]);



        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {


            $user=User::join('persona','persona.id_persona','=','users.id_persona')->first()->toArray();
            \Illuminate\Support\Facades\Request::session()->put(['usuario'=>$user]);
            return redirect('/inicio');

        }
        return redirect("login")->withSuccess('Oppes! You have entered invalid credentials');

    }

}
