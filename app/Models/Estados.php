<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estados extends Model
{
    use HasFactory;
    protected $table = 'estados';
    protected $primaryKey='id';
    protected $fillable=['clave','nombre','abrev','activo'];


    public function cpe(){

    }
    public function ap(){

}
}
