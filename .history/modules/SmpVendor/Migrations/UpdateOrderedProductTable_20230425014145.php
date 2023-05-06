<?php
/**
 * Table Migration
 * @package 4.8.16
**/

namespace Modules\SmpVendor\Migrations;

use App\Classes\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateOrderedProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Add the schema here !
        if(!Schema::hasColumn('nexopos_orders_products', 'vendor_id')) {
            Schema::table('nexopos_orders_products', function (Blueprint $table) {
                $table->unsignedInteger('vendor_id')->nullable();
            });
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
        if(Schema::hasColumn('nexopos_orders_products', 'vendor_id')) {
            Schema::table('nexopos_orders_products', function (Blueprint $table) {
                $table->dropColumn('vendor_id');
            });
        }
    }
}
