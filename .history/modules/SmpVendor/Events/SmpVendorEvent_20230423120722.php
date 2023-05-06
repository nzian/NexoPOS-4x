<?php

namespace Modules\SmpVendor\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Modules\SmpVendor\Crud\VendorCrud;
use App\Helpers

/**
 * Register Event
**/
class SmpVendorEvent
{
    use Dispatchable;
    use InteractsWithSockets;
    use SerializesModels;

    public function __construct()
    {
        // ...
    }

    public static function registerCrud($identifier)
    {
        switch ($identifier) {
            case 'smp.vendors':             return VendorCrud::class;
            default: return $identifier;
        }
    }

      /**
     * Will register a new form input
     *
     * @param  array  $form
     * @return array
     */
    public static function updateProductForm($form, $data)
    {
        extract($data);
        /**
         * @param  Product  $model
         */
        $form['tabs']['general']['fields'][] = [
            'type'  =>  'select',
            'label' => __( 'Vendor Id' ),
            'name' => 'nexopos_products.vendor_id',
            'description' => __( 'Product has a vendor' ),
            'options' => Helper::toJsOptions( $UserClass::get(), [ 'id', 'username' ]),
        ];

        return $form;
    }
}