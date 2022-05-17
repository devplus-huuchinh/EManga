<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        // role - user (1-N)
        schema::table('users', function(Blueprint $table){
            $table->foreign('role_id')->references('id')->on('roles')->onUpdate('cascade')->onDelete('cascade');
        });
        
        // user - Manga (1-N)
        schema::table('mangas', function(Blueprint $table){
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });

        // Manga - chapter (1-N)
        schema::table('chapters', function(Blueprint $table){
            $table->foreign('manga_id')->references('id')->on('mangas')->onUpdate('cascade')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
                // user-role (1-N)
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['role_id']);
        });
        //  user-campaign (1-N)
        Schema::table('mangas', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
        });
        // campaign-profile  && position profile  (1-N)
        Schema::table('chapters', function (Blueprint $table) {
            $table->dropForeign(['manga_id']);
        });
    }
};
