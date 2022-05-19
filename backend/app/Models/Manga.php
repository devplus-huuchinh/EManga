<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Manga extends Model
{
    use HasFactory;

    protected $table = 'mangas';

    protected $fillable = [
        'name',
        'image_url',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }

    public function chapter()
    {
        return $this->hasMany(Chapter::class);
    }

    public function type()
    {
        return $this->belongsToMany(Type::class,'type_mangas');
    }

}
