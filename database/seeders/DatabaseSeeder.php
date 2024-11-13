<?php

namespace Database\Seeders;

use App\Enum\PermissionsEnum;
use App\Enum\RolesEnum;
use App\Models\Feature;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $userRole = Role::create(['name' => RolesEnum::User->value]);
        $adminRole = Role::create(['name' => RolesEnum::Admin->value]);
        $commenterRole = Role::create(['name' => RolesEnum::Commenter->value]);

        $manageFeatures = Permission::create([
            'name' => PermissionsEnum::ManageFeatures->value
        ]);
        $manageUsers = Permission::create([
            'name' => PermissionsEnum::ManageUsers->value
        ]);
        $manageComments = Permission::create([
            'name' => PermissionsEnum::ManageComments->value
        ]);
        $manageUpvoteDownvote = Permission::create([
            'name' => PermissionsEnum::UpvoteDownvote->value
        ]);

        $userRole->syncPermissions([$manageUpvoteDownvote]);
        $commenterRole->syncPermissions([$manageUpvoteDownvote, $manageComments]);
        $adminRole->syncPermissions([$manageComments, $manageFeatures, $manageUpvoteDownvote, $manageUsers]);

        User::factory()->create([
            'name' => 'User',
            'email' => 'user@gmail.com',
        ])->assignRole(RolesEnum::User);

        User::factory()->create([
            'name' => 'Commenter',
            'email' => 'commenter@gmail.com',
        ])->assignRole(RolesEnum::Commenter);

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
        ])->assignRole(RolesEnum::Admin);

        Feature::factory(100)->create();
    }
}
