import React, { useState, useEffect } from 'react';
import { adminBridge } from './bridge.js';
import { SitePanel } from './panels/SitePanel.js';
import { ContactsPanel } from './panels/ContactsPanel.js';
import { PagesPanel } from './panels/PagesPanel.js';
import { AssetsPanel } from './panels/AssetsPanel.js';
import { LoginPanel } from './panels/LoginPanel.js';

export function AdminPanel() {
  const [activeTab, setActiveTab] = useState('pages');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState('');
  const [isConnecting, setIsConnecting] = useState(true);

  useEffect(() => {
    // Подключаемся к WebSocket
    adminBridge.connect();

    // Слушаем изменения аутентификации
    adminBridge.onAuth((authStatus, userData) => {
      setIsAuthenticated(authStatus);
      setUser(userData);
      if (!authStatus) {
        setAuthError('Session expired. Please login again.');
      } else {
        setAuthError('');
      }
      setIsConnecting(false);
    });

    // Восстанавливаем сессию из localStorage при загрузке
    const savedToken = localStorage.getItem('admin_token');
    const savedUser = localStorage.getItem('admin_user');
    if (savedToken && savedUser) {
      // bridge.js автоматически попытается восстановить сессию при подключении
      setIsConnecting(true);
    } else {
      setIsConnecting(false);
    }
  }, []);

  const handleLogin = async (username, password) => {
    setAuthError('');
    try {
      await adminBridge.login(username, password);
      // Аутентификация успешна — bridge вызовет onAuth
    } catch (err) {
      setAuthError(err.message);
      throw err;
    }
  };

  const handleLogout = () => {
    adminBridge.logout();
    setIsAuthenticated(false);
    setUser(null);
  };

  if (isConnecting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Connecting to server...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginPanel onLogin={handleLogin} error={authError} />;
  }

  const tabs = [
    { id: 'pages', label: 'Pages' },
    { id: 'contacts', label: 'Contacts' },
    { id: 'site', label: 'Site Config' },
    { id: 'assets', label: 'Assets' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Admin Panel
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Welcome, {user?.username || 'Admin'}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 focus:outline-none"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'pages' && <PagesPanel />}
        {activeTab === 'contacts' && <ContactsPanel />}
        {activeTab === 'site' && <SitePanel />}
        {activeTab === 'assets' && <AssetsPanel />}
      </main>
    </div>
  );
}