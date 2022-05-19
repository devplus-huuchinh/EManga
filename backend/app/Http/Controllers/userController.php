<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Throwable;

use App\Models\User;

class userController extends Controller
{

    public function getUsers()
    {
        try {
            $users = User::where('roleId', 1)->get();
            return response()->json($users);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'get_error',
                'error' => $th,
            ], 500);
        }
    }

    public function register(Request $request)
    {
        // dd($request);
        try{
            $request->validate([
                'name'=>'required|max:255',
                'email'=>'required|unique:users|max:255',
                'password' =>'required',
            ]);

            $registerFormData = $request->all();

            $createNewUser = User::create([
                'name' => $registerFormData['name'],
                'email'=> $registerFormData['email'],
                'password' => Hash::make($registerFormData['password']),
            ]);

            return response()->json($createNewUser);
        }
        catch(\Exception $er){
            return response()->json([
                'message' => 'register_fail',
                'error' => $er,
            ]);
        }  
    }

    public function login(Request $request){
        // dd($request->all());
        try
        {
            $request->validate([
                'email' => 'email|required',
                'password' => 'required',
            ]);

            $loginFormData = $request->all();

            if(!Auth::attempt($loginFormData)){
                return response()->json([
                    'error' =>'unauthorize',
                    'status_code' => 500,
                ]);
            }

            $user = User::where('email', $request->email)->first();

            if(!Hash::check($loginFormData['password'], $user->password,[]))
            {
                throw new \Exception('incorrect password');

            }

            $plainToken = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'status_code' =>200,
                'access_token' =>$plainToken,
                'token_type'=> 'Bearer',

            ]);
             
        }
        catch(\exception $er)
        {
            return response()->json([
                'status_code' => 500,
                'message' => 'Login Error',
                'error' => $er,
            ]);
            // dd('asdads');
        }
    }

    public function logout(Request $request)
    {
        try{
            Auth::logout();
            return response()->json([
                'message' =>'logout success',
            ]);
        }
        catch (\Throwable $th) {
            return response()->json([
                'message' => 'logout_error',
                'error' => $th,
            ]);
        }
    }

}
