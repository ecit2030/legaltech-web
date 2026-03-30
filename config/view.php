<?php

return [

    'paths' => [
        resource_path('views'),
    ],

    /*
    | Do not use realpath() here: on fresh deploys, storage/framework/views may
    | not exist yet, which makes realpath() return false and breaks view:clear.
    */
    'compiled' => env(
        'VIEW_COMPILED_PATH',
        storage_path('framework/views')
    ),

];
