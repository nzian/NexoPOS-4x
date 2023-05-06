<?php

namespace Modules\Jresort\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\Jresort\Http\Requests\BookingRequest;
use Modules\Jresort\Models\Booking;
use Modules\Jresort\Services\BookingService;

class BookingController extends Controller
{
    protected $bookingService;

    public function __construct(BookingService $bookingService)
    {
        $this->bookingService = $bookingService;
    }

    public function index()
    {
        $bookings = $this->bookingService->getAllBookings();
        return view('bookings.index', compact('bookings'));
    }

    public function store(BookingRequest $request)
    {
        $this->bookingService->createBooking($request->all());
        return redirect()->back()->with('success', 'Booking created successfully!');
    }

    public function update(BookingRequest $request, Booking $booking)
    {
        $this->bookingService->updateBooking($booking, $request->all());
        return redirect()->back()->with('success', 'Booking updated successfully!');
    }

    public function destroy(Booking $booking)
    {
        $this->bookingService->deleteBooking($booking);
        return redirect()->back()->with('success', 'Booking deleted successfully!');
    }
}
