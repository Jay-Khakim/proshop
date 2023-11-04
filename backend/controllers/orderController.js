import asyncHandler from '../middleware/asyncHandler.js'
import Order from '../models/orderModel.js'


// @desc    Create new Order 
// @router  POST /api/orders
// @access  Private

const addOrderItems = asyncHandler(async(req, res)=>{
    res.send('add order items');
})

// @desc    Get logged in user orders
// @router  GET /api/orders/myorders
// @access  Private

const getMyOrders = asyncHandler(async(req, res)=>{
    res.send('get my orders');
})

// @desc    Get order by ID
// @router  GET /api/orders/:id
// @access  Private

const getOrderById = asyncHandler(async(req, res)=>{
    res.send('get order by ID');
})


// @desc    Update order to Paid
// @router  GET /api/orders/:id/pay
// @access  Private

const updateOrderToPaid = asyncHandler(async(req, res)=>{
    res.send('update order to Paid');
})

// @desc    Update order to delivered
// @router  GET /api/orders/:id/deliver
// @access  Private

const updateOrderToDelivered = asyncHandler(async(req, res)=>{
    res.send('update order to Delivered');
})

// @desc    Get all orders
// @router  GET /api/orders/
// @access  Private/admin

const getOrders = asyncHandler(async(req, res)=>{
    res.send('get all orders');
})

export{
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders
}