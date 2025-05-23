<?php

namespace App\Listeners;

use App\Events\OrderBeforeDeleteEvent;
use App\Services\OrdersService;
use App\Services\TransactionService;

class OrderBeforeDeleteEventListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct( public TransactionService $transactionService, public OrdersService $ordersService )
    {
        //
    }

    /**
     * Handle the event.
     *
     * @return void
     */
    public function handle( OrderBeforeDeleteEvent $event )
    {
        /**
         * delete cash flow entries
         */
        $this->transactionService->deleteOrderTransactionsHistory( $event->order );
        $this->ordersService->deleteOrderSettings( $event->order );
    }
}
