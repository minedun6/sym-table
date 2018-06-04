<?php

namespace App\Http\Controllers;

class WelcomeController extends Controller
{

    public function index()
    {
        $data = [
            "users" => [
                [
                    "id" => 6,
                    "name" => "Emila Cole",
                    "email" => "emila.cole@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/797C9A96-48D7-8732-78BF-351C4E8D690A.jpg",
                    "initials" => "EC",
                    "state" => 1,
                    "type" => 1,
                    "roles" => [
                        [
                            "id" => 5,
                            "name" => "pm role",
                            "time_boxed" => null
                        ],
                        [
                            "id" => 15,
                            "name" => "Audit Trail Role",
                            "time_boxed" => null
                        ],
                        [
                            "id" => 16,
                            "name" => "Order Role",
                            "time_boxed" => null
                        ]
                    ]
                ],
                [
                    "id" => 7,
                    "name" => "Emma Watson",
                    "email" => "emma.watson@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/7EF659E2-2934-9E20-3664-308E052EC775.jpg",
                    "initials" => "EW",
                    "state" => 1,
                    "type" => 1,
                    "roles" => [
                        [
                            "id" => 5,
                            "name" => "pm role",
                            "time_boxed" => null
                        ]
                    ]
                ],
                [
                    "id" => 8,
                    "name" => "Benjamin Smith",
                    "email" => "benjamin.smith@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/E3E72EC6-48F7-3C56-D87B-FA872728411B.jpg",
                    "initials" => "BS",
                    "state" => 1,
                    "type" => 1,
                    "roles" => []
                ],
                [
                    "id" => 10,
                    "name" => "Michael Hirst",
                    "email" => "michael.hirst@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/C9E7094B-3D4B-581D-9DCD-77E91D8E1C81.jpg",
                    "initials" => "MH",
                    "state" => 1,
                    "type" => 0,
                    "roles" => []
                ],
                [
                    "id" => 11,
                    "name" => "John Weber",
                    "email" => "john.weber@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/ED256438-65F9-6201-C8AD-5B0C57540C37.jpg",
                    "initials" => "JW",
                    "state" => 1,
                    "type" => 0,
                    "roles" => []
                ],
                [
                    "id" => 12,
                    "name" => "James Flynn",
                    "email" => "james.flynn@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/AE73ECCF-49DC-D990-EE9D-54099A8C8A29.jpg",
                    "initials" => "JF",
                    "state" => 1,
                    "type" => 0,
                    "roles" => []
                ],
                [
                    "id" => 13,
                    "name" => "Sherry Marsh",
                    "email" => "sherry.march@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/DE7E8132-9450-C2F1-4E48-8C720B3E2076.jpg",
                    "initials" => "SM",
                    "state" => 1,
                    "type" => 0,
                    "roles" => []
                ],
                [
                    "id" => 14,
                    "name" => "Alan Gasmer",
                    "email" => "alan.gasmer@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/481377B2-BC42-E6FA-935F-44631CB9B7FA.jpg",
                    "initials" => "AG",
                    "state" => 1,
                    "type" => 0,
                    "roles" => []
                ],
                [
                    "id" => 15,
                    "name" => "Sheila Hockin",
                    "email" => "sheila.hockin@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/702A88FC-307E-370F-CDA4-41C382BA8654.jpg",
                    "initials" => "SH",
                    "state" => 1,
                    "type" => 0,
                    "roles" => []
                ],
                [
                    "id" => 16,
                    "name" => "Morgan O'Sullivan",
                    "email" => "morgan.osullivan@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/89882F26-34A7-6524-E2BE-CDA9B55ADE8A.jpg",
                    "initials" => "MO",
                    "state" => 1,
                    "type" => 0,
                    "roles" => []
                ],
                [
                    "id" => 17,
                    "name" => "Steve Wakefield",
                    "email" => "steve.wakefield@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/AF2C8F8C-2F65-2222-DF43-6CF7F6B8C56A.jpg",
                    "initials" => "SW",
                    "state" => 1,
                    "type" => 0,
                    "roles" => []
                ],
                [
                    "id" => 18,
                    "name" => "Keith Thompson",
                    "email" => "keith.thompson@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/7E742491-BEC6-8204-738D-6951D53D3F9C.jpg",
                    "initials" => "KT",
                    "state" => 1,
                    "type" => 0,
                    "roles" => []
                ],
                [
                    "id" => 19,
                    "name" => "Katheryn Winnick",
                    "email" => "katheryn.winnick@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/C44102DF-001B-932E-ACC1-AE8D565319FE.jpg",
                    "initials" => "KW",
                    "state" => 1,
                    "type" => 0,
                    "roles" => []
                ],
                [
                    "id" => 20,
                    "name" => "Alyssa Sutherland",
                    "email" => "alyssa.sutherland@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/681AD89B-F0CF-2AB8-0F41-07F026F0BEF1.jpg",
                    "initials" => "AS",
                    "state" => 1,
                    "type" => 0,
                    "roles" => []
                ],
                [
                    "id" => 21,
                    "name" => "Jessalyn Gilsig",
                    "email" => "jessalyn.gilsig@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/EC8FABA9-85CD-06ED-6797-EF3A95767DD5.jpg",
                    "initials" => "JG",
                    "state" => 1,
                    "type" => 0,
                    "roles" => []
                ],
                [
                    "id" => 22,
                    "name" => "Carrie Crowley",
                    "email" => "carrie.crowley@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/F1678C13-A279-8BBA-AAD8-070E01DEE84F.jpg",
                    "initials" => "CC",
                    "state" => 1,
                    "type" => 0,
                    "roles" => []
                ],
                [
                    "id" => 23,
                    "name" => "Elinor Crawley",
                    "email" => "elinor.crawley@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/BE644759-D9D1-D48C-38AE-DF1DD94B5B73.jpg",
                    "initials" => "EC",
                    "state" => 1,
                    "type" => 0,
                    "roles" => []
                ],
                [
                    "id" => 24,
                    "name" => "Gaia Weiss",
                    "email" => "gaia.weiss@phoenixtest.com",
                    "avatar" => "https://d1ygdc558yb2rj.cloudfront.net/0PbAIa/UqRA9a/5D8D1AB8-E65D-772C-55E9-7124BDBF19C9.jpg",
                    "initials" => "GW",
                    "state" => 1,
                    "type" => 0,
                    "roles" => []
                ],
                [
                    "id" => 25,
                    "name" => "Jesse Jane",
                    "email" => "suspended.user@phoenixtest.com",
                    "avatar" => null,
                    "initials" => "JJ",
                    "state" => 1,
                    "type" => 1,
                    "roles" => [
                        [
                            "id" => 5,
                            "name" => "pm role",
                            "time_boxed" => null
                        ]
                    ]
                ],
                [
                    "id" => 26,
                    "name" => "Emily rose",
                    "email" => "user.resetPassword@phoenixtest.com",
                    "avatar" => null,
                    "initials" => "ER",
                    "state" => 1,
                    "type" => 1,
                    "roles" => [
                        [
                            "id" => 5,
                            "name" => "pm role",
                            "time_boxed" => null
                        ]
                    ]
                ],
                [
                    "id" => 27,
                    "name" => "Have no right I am a slave",
                    "email" => "userWhithNoRights@phoenixtest.com",
                    "avatar" => null,
                    "initials" => "HS",
                    "state" => 1,
                    "type" => 1,
                    "roles" => []
                ]
            ],
            "roles" => [
                [
                    "id" => 5,
                    "name" => "pm role",
                    "time_boxed" => null,
                    "permissions" => [
                        [
                            "module" => "briefcases",
                            "full" => true
                        ],
                        [
                            "module" => "assets",
                            "full" => true
                        ],
                        [
                            "module" => "tracking",
                            "full" => true
                        ],
                        [
                            "module" => "settings",
                            "full" => true
                        ],
                        [
                            "module" => 360,
                            "full" => true
                        ],
                        [
                            "module" => "idialog",
                            "full" => true
                        ],
                        [
                            "module" => "regulatory",
                            "full" => true
                        ],
                        [
                            "module" => "survey",
                            "full" => true
                        ],
                        [
                            "module" => "zinc",
                            "full" => true
                        ],
                        [
                            "module" => "veeva",
                            "full" => true
                        ],
                        [
                            "module" => "recipients",
                            "full" => true
                        ]
                    ]
                ],
                [
                    "id" => 6,
                    "name" => "master role",
                    "time_boxed" => null,
                    "permissions" => [
                        [
                            "module" => "briefcases",
                            "full" => true
                        ],
                        [
                            "module" => "administration",
                            "full" => true
                        ],
                        [
                            "module" => "assets",
                            "full" => true
                        ],
                        [
                            "module" => "tracking",
                            "full" => true
                        ],
                        [
                            "module" => "settings",
                            "full" => true
                        ],
                        [
                            "module" => 360,
                            "full" => true
                        ],
                        [
                            "module" => "idialog",
                            "full" => true
                        ],
                        [
                            "module" => "regulatory",
                            "full" => false
                        ],
                        [
                            "module" => "survey",
                            "full" => true
                        ],
                        [
                            "module" => "zinc",
                            "full" => true
                        ],
                        [
                            "module" => "veeva",
                            "full" => true
                        ],
                        [
                            "module" => "recipients",
                            "full" => true
                        ]
                    ]
                ],
                [
                    "id" => 12,
                    "name" => "Regulatory full",
                    "time_boxed" => null,
                    "permissions" => [
                        [
                            "module" => "assets",
                            "full" => true
                        ],
                        [
                            "module" => "regulatory",
                            "full" => true
                        ]
                    ]
                ],
                [
                    "id" => 13,
                    "name" => "Time boxed futur role",
                    "time_boxed" => [
                        "start_at" => "2020-01-07 00=>00=>00",
                        "end_at" => "2020-01-07 23=>59=>59"
                    ],
                    "permissions" => [
                        [
                            "module" => "briefcases",
                            "full" => false
                        ],
                        [
                            "module" => "assets",
                            "full" => true
                        ]
                    ]
                ],
                [
                    "id" => 14,
                    "name" => "Time boxed current role",
                    "time_boxed" => [
                        "start_at" => "2016-01-07 00=>00=>00",
                        "end_at" => "2020-10-07 23=>59=>59"
                    ],
                    "permissions" => [
                        [
                            "module" => "assets",
                            "full" => true
                        ]
                    ]
                ],
                [
                    "id" => 15,
                    "name" => "Audit Trail Role",
                    "time_boxed" => null,
                    "permissions" => [
                        [
                            "module" => "audit",
                            "full" => true
                        ]
                    ]
                ],
                [
                    "id" => 16,
                    "name" => "Order Role",
                    "time_boxed" => null,
                    "permissions" => [
                        [
                            "module" => "orders",
                            "full" => true
                        ]
                    ]
                ]
            ],
            "affiliates" => [
                [
                    "id" => 1,
                    "name" => "Phoenix UK",
                    "master" => "Abbey Wagner",
                    "permissions" => [
                        [
                            "module" => "recipients",
                            "full" => true
                        ],
                        [
                            "module" => "briefcases",
                            "full" => true
                        ],
                        [
                            "module" => "administration",
                            "full" => true
                        ],
                        [
                            "module" => "assets",
                            "full" => true
                        ],
                        [
                            "module" => "tracking",
                            "full" => true
                        ],
                        [
                            "module" => "settings",
                            "full" => true
                        ],
                        [
                            "module" => "360",
                            "full" => true
                        ],
                        [
                            "module" => "idialog",
                            "full" => true
                        ],
                        [
                            "module" => "regulatory",
                            "full" => true
                        ],
                        [
                            "module" => "survey",
                            "full" => true
                        ],
                        [
                            "module" => "zinc",
                            "full" => true
                        ],
                        [
                            "module" => "veeva",
                            "full" => true
                        ],
                        [
                            "module" => "audit",
                            "full" => true
                        ],
                        [
                            "module" => "orders",
                            "full" => true
                        ]
                    ]
                ],
                [
                    "id" => 2,
                    "name" => "Phoenix US",
                    "master" => "John Doe",
                    "permissions" => [
                        [
                            "module" => "recipients",
                            "full" => true
                        ],
                        [
                            "module" => "briefcases",
                            "full" => true
                        ],
                        [
                            "module" => "administration",
                            "full" => true
                        ],
                        [
                            "module" => "assets",
                            "full" => true
                        ],
                        [
                            "module" => "tracking",
                            "full" => true
                        ],
                        [
                            "module" => "settings",
                            "full" => true
                        ],
                        [
                            "module" => "360",
                            "full" => true
                        ],
                        [
                            "module" => "idialog",
                            "full" => true
                        ],
                        [
                            "module" => "regulatory",
                            "full" => true
                        ],
                        [
                            "module" => "survey",
                            "full" => true
                        ],
                        [
                            "module" => "zinc",
                            "full" => true
                        ]
                    ]
                ]
            ]
        ];

        return response()->json(
            [
                'users' => $data['users'],
                'affiliates' => $data['affiliates'],
                'roles' => $data['roles']
            ], 200);
    }

}