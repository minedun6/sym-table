<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css">
    <link rel="stylesheet" href="/css/sym-table.css">'
    <link rel="stylesheet" href="/css/administration.css">'
    <link rel="stylesheet" href="/css/general.css">
    <link rel="stylesheet" href="/css/user-list.css">
    <link rel="stylesheet" href="/css/user-edit.css">
    <link rel="stylesheet" href="/css/role-list.css">
    <link rel="stylesheet" href="/css/role-edit.css">

    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
</head>
<body class="font-sans min-h-screen bg-grey-darker p-4">

<div class="w-full mx-auto" id="app">
    <sym-table></sym-table>
</div>

<script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>
