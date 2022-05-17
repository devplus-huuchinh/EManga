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
        Schema::create('type_mangas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('manga_id')->nullable();
            $table->unsignedBigInteger('type_id')->nullable();
            $table->timestamps();
        });
        
        // Manga - type_manga (1-N) && type_manga type (1-N)
        schema::table('type_mangas', function(Blueprint $table){
            $table->foreign('manga_id')->references('id')->on('mangas')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('type_id')->references('id')->on('types')->onUpdate('cascade')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('type_mangas');
    }
};
