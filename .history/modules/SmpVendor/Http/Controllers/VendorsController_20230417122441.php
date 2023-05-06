<?php

/**
 * NexoPOS Controller
 *
 * @since  1.0
 **/

namespace Modules\SmpVendor\Http\Controllers;

use Modules\SmpVendor\Crud\VendorCrud;
use App\Http\Controllers\DashboardController;
use Modules\SmpVendor\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;

class VendorsController extends DashboardController
{
    public function __construct()
    {
        parent::__construct();
    }

    public function listVendors()
    {
        return $this->view('pages.dashboard.crud.table', [
            'title' => __('Vendor List'),
            'createUrl' => url('/dashboard/vendors/create'),
            'description' => __('Manage all Vendor available.'),
            'src' => url('/api/nexopos/v4/crud/smp.vendors'),
        ]);
    }

    public function createVendor()
    {
        ns()->restrict([ 'create.users' ]);

        return VendorCrud::form();
    }

    public function editVendor(Vendor $user)
    {
        ns()->restrict([ 'update.vendors' ]);

        if ($user->id === Auth::id()) {
            return redirect(ns()->route('ns.dashboard.users.profile'));
        }

        return VendorCrud::form($user);
    }

    public function getVendors(Vendor $user)
    {
        ns()->restrict([ 'read.vendors' ]);

        return Vendor::get([ 'username', 'id', 'email' ]);
    }

}
