<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeManga extends Model
{
    use HasFactory;
    
    protected $table = 'type-mangas';

    protected $fillable = [
        'manga_id',
        'type_id',
    ];

    public function manga()
    {
        return $this->belongsTo(Manga::class);
    }

}
