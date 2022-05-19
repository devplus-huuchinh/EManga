<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    use HasFactory;

    protected $table = 'chapters';

    protected $fillable = [
        'chapter',
        'image_url',
    ];

    public function manga()
    {
        return $this->belongsTo(Manga::class,'manga_id','id');
    }
}
