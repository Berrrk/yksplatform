import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, logout, updateTarget } = useAuth();
  const [newTarget, setNewTarget] = useState(user?.target || '');
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpdateTarget = async () => {
    if (!newTarget.trim()) {
      setMessage('Target cannot be empty');
      return;
    }

    setLoading(true);
    setMessage('');

    const result = await updateTarget(newTarget);
    
    if (result.success) {
      setMessage('Target updated successfully!');
      setIsEditing(false);
    } else {
      setMessage(result.error);
    }
    
    setLoading(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">YKS Platform</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user?.username}!</span>
              <button
                onClick={handleLogout}
                className="btn-secondary"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="card">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    {user?.username?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {user?.username}
                </h2>
                <p className="text-gray-600 text-sm">
                  Member since {new Date(user?.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Main Dashboard */}
          <div className="lg:col-span-2 space-y-6">
            {/* Welcome Section */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome to your Dashboard
              </h3>
              <p className="text-gray-600">
                This is your personal space where you can manage your goals and track your progress.
              </p>
            </div>

            {/* Target Section */}
            <div className="card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Your Current Target
                </h3>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>

              {message && (
                <div className={`mb-4 px-4 py-3 rounded-lg ${
                  message.includes('successfully') 
                    ? 'bg-green-50 border border-green-200 text-green-700'
                    : 'bg-red-50 border border-red-200 text-red-700'
                }`}>
                  {message}
                </div>
              )}

              {isEditing ? (
                <div className="space-y-4">
                  <textarea
                    value={newTarget}
                    onChange={(e) => setNewTarget(e.target.value)}
                    rows="4"
                    className="input-field resize-none"
                    placeholder="What's your current goal or target?"
                  />
                  <div className="flex space-x-3">
                    <button
                      onClick={handleUpdateTarget}
                      disabled={loading}
                      className="btn-primary disabled:opacity-50"
                    >
                      {loading ? 'Updating...' : 'Save Target'}
                    </button>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setNewTarget(user?.target || '');
                        setMessage('');
                      }}
                      className="btn-secondary"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-4">
                  {user?.target ? (
                    <p className="text-gray-800">{user.target}</p>
                  ) : (
                    <p className="text-gray-500 italic">
                      No target set yet. Click "Edit" to set your first goal!
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Active</h4>
                <p className="text-gray-600">You're on track!</p>
              </div>

              <div className="card text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Progress</h4>
                <p className="text-gray-600">Keep going!</p>
              </div>

              <div className="card text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Time</h4>
                <p className="text-gray-600">Stay focused!</p>
              </div>
            </div>

            {/* Motivation Section */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Daily Motivation
              </h3>
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6">
                <p className="text-lg text-gray-800 italic">
                  "Success is not final, failure is not fatal: it is the courage to continue that counts."
                </p>
                <p className="text-sm text-gray-600 mt-2">— Winston Churchill</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 