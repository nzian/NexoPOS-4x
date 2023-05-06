<?php
/**
 * Table Migration
 * @package 4.8.16
**/

namespace Modules\SmpVendor\Migrations;

use App\Classes\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Add the schema here !
        if(Schema::hasTable('nexopos_users')) {
            if(!Schema::hasColumns('nexopos_users', ['vendor_id','','phone2', 'commission'])) {
                Schema::table('nexopos_users_attributes', function (Blueprint $table) {
                    $table->string('vendor_name')->nullable();
                    $table->string('phone2')->nullable();
                    $table->double('monthly_rent')->default(0);
                    $table->double('commission')->default(0);
                });
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // drop tables here
    }
}