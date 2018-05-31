<?php

namespace App\Http\Controllers;

class WelcomeController extends Controller
{

    public function index()
    {
        $users = [
            [
                'id' => 1,
                'name' => 'Abbey Wagner',
                'email' => 'abby.wagner@phoenixtest.com',
                'initials' => 'AW',
                'state' => 1,
                'avatar' => '',
                'type' => 1,
                'roles' => [
                    [
                        'id' => 1,
                        'name' => 'PM role',
                        'time_boxed' => null
                    ]
                ]
            ],
            [
                'id' => 2,
                'name' => 'Alan Gasmer',
                'email' => 'alan.gasmer@phoenixtest.com',
                'initials' => 'AG',
                'state' => 1,
                'avatar' => '',
                'type' => 0,
                'roles' => [
                    [
                        'id' => 1,
                        'name' => 'Delegate',
                        'time_boxed' => null
                    ]
                ]
            ],
            [
                'id' => 3,
                'name' => 'Gaia Wess',
                'email' => 'gaia.wess@phoenixtest.com',
                'initials' => 'GW',
                'state' => 1,
                'avatar' => '',
                'type' => 0,
                'roles' => [
                    [
                        'id' => 1,
                        'name' => 'Delegate',
                        'time_boxed' => null
                    ]
                ]
            ],
            [
                'id' => 4,
                'name' => 'Agence Toutrisque',
                'email' => 'agence@genetiks.com',
                'initials' => 'AT',
                'state' => 1,
                'avatar' => '',
                'type' => 0,
                'roles' => [
                    [
                        'id' => 1,
                        'name' => 'PM role',
                        'time_boxed' => null
                    ]
                ]
            ],
            [
                'id' => 5,
                'name' => 'Susan Banks',
                'email' => 'susan.banks@genetiks.com',
                'initials' => 'SB',
                'state' => 1,
                'avatar' => '',
                'type' => 0,
                'roles' => [
                    [
                        'id' => 1,
                        'name' => 'PM role',
                        'time_boxed' => null
                    ]
                ]
            ]
        ];

        return response()->json(
            [
                'users' => $users
            ], 200);
    }

}