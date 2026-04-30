import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { AlertCircle, Package, Clock } from 'react-icons/fa';

const KitchenPanel = ({ kitchenId }) => {
  const [socket, setSocket] = useState(null);
  const [stockUpdates, setStockUpdates] = useState([]);
  const [orders, setOrders] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('connecting');
  const [kitchenInventory, setKitchenInventory] = useState([]);

  useEffect(() => {
    const SOCKET_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
    
    console.log('Connecting to socket server:', SOCKET_URL);
    
    const newSocket = io(SOCKET_URL, {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
      transports: ['websocket', 'polling']
    });

    newSocket.on('connect', () => {
      console.log('Kitchen panel connected, socket id:', newSocket.id);
      setConnectionStatus('connected');
      newSocket.emit('join-kitchen', kitchenId);
    });

    newSocket.on('disconnect', () => {
      console.log('Kitchen panel disconnected');
      setConnectionStatus('disconnected');
    });

    newSocket.on('connect_error', (error) => {
      console.error('Connection error:', error);
      setConnectionStatus('error');
    });

    // Listen for stock updates from orders
    newSocket.on('stock-updated', (data) => {
      console.log('Stock updated event received:', data);
      setStockUpdates(prev => [
        {
          ...data,
          id: Date.now(),
          timestamp: new Date().toLocaleTimeString()
        },
        ...prev.slice(0, 9)
      ]);
    });

    // Listen for order assignments
    newSocket.on('order-assigned', (order) => {
      console.log('Order assigned to kitchen:', order);
      setOrders(prev => [
        {
          ...order,
          receivedAt: new Date().toLocaleTimeString()
        },
        ...prev
      ]);
    });

    // Listen for kitchen stock updates
    newSocket.on('kitchen-stock-updated', (data) => {
      console.log('Kitchen stock updated:', data);
      setKitchenInventory(data.inventory || []);
      setStockUpdates(prev => [
        {
          ...data,
          id: Date.now(),
          timestamp: new Date().toLocaleTimeString()
        },
        ...prev.slice(0, 9)
      ]);
    });

    // Listen for order status updates
    newSocket.on('order-status-updated', (order) => {
      console.log('Order status updated:', order);
      setOrders(prev => 
        prev.map(o => o._id === order._id ? { ...order, receivedAt: o.receivedAt } : o)
      );
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [kitchenId]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Kitchen Panel</h1>
            <p className="text-sm text-gray-600 mt-1">Kitchen ID: {kitchenId}</p>
          </div>
          <div className={`px-4 py-2 rounded-full text-white font-semibold flex items-center gap-2 ${
            connectionStatus === 'connected' ? 'bg-green-500' : connectionStatus === 'error' ? 'bg-red-500' : 'bg-yellow-500'
          }`}>
            <span className={`w-3 h-3 rounded-full ${
              connectionStatus === 'connected' ? 'bg-white' : 'bg-white animate-pulse'
            }`}></span>
            {connectionStatus === 'connected' ? 'Connected' : connectionStatus === 'error' ? 'Error' : 'Connecting...'}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Inventory */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Package className="text-purple-600" size={24} />
              <h2 className="text-2xl font-bold">Current Inventory</h2>
            </div>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {kitchenInventory.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <Package size={48} className="mx-auto mb-2 opacity-50" />
                  <p>No products assigned</p>
                </div>
              ) : (
                kitchenInventory.map(item => (
                  <div key={item._id} className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-lg text-purple-900">{item.product?.name}</p>
                        <p className="text-sm text-gray-600">Unit: {item.product?.unit}</p>
                      </div>
                      <span className={`text-lg font-bold px-3 py-1 rounded ${
                        item.quantity > 10 ? 'bg-green-200 text-green-800' : 
                        item.quantity > 0 ? 'bg-yellow-200 text-yellow-800' : 
                        'bg-red-200 text-red-800'
                      }`}>
                        {item.quantity}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Stock Updates */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold">Live Stock Updates</h2>
            </div>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {stockUpdates.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <Clock size={48} className="mx-auto mb-2 opacity-50" />
                  <p>Waiting for stock updates...</p>
                </div>
              ) : (
                stockUpdates.map(update => (
                  <div key={update.id} className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-bold text-lg text-blue-900">
                        {update.orderNumber || 'Stock Update'}
                      </p>
                      <span className="text-xs text-gray-600 flex items-center gap-1">
                        <Clock size={12} /> {update.timestamp}
                      </span>
                    </div>
                    {update.products && (
                      <div className="text-sm text-gray-700 space-y-1">
                        {update.products.map(p => (
                          <div key={p._id} className="flex justify-between">
                            <span>{p.name}</span>
                            <span className="font-semibold text-blue-600">{p.quantity} {p.unit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Active Orders */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="text-green-600" size={24} />
              <h2 className="text-2xl font-bold">Active Orders</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
              {orders.length === 0 ? (
                <div className="col-span-2 text-center py-12 text-gray-500">
                  <AlertCircle size={48} className="mx-auto mb-2 opacity-50" />
                  <p>No active orders</p>
                </div>
              ) : (
                orders.map(order => (
                  <div key={order._id} className={`border-l-4 p-4 rounded ${
                    order.status === 'Ready' ? 'border-green-500 bg-green-50' : 'border-yellow-500 bg-yellow-50'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-bold text-lg">{order.orderNumber}</p>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        order.status === 'Ready' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-700 space-y-1 mb-2">
                      {order.items?.map(item => (
                        <p key={item._id}>{item.product?.name} x {item.quantity}</p>
                      ))}
                    </div>
                    <p className="text-xs text-gray-600">Received: {order.receivedAt}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Connection Info */}
        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="text-sm text-blue-800">
            <strong>Real-time Sync Active:</strong> Kitchen stock and orders are synchronized in real-time with the admin panel. All updates are instant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KitchenPanel;
