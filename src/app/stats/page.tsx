'use client';

import { useState } from 'react';

interface PracticeSession {
  id: string;
  date: string;
  wpm: number;
  accuracy: number;
  duration: number;
  charactersTyped: number;
  errors: number;
}

export default function Stats() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  
  // 模拟数据
  const mockSessions: PracticeSession[] = [
    {
      id: '1',
      date: '2024-01-15',
      wpm: 45,
      accuracy: 92,
      duration: 300,
      charactersTyped: 2250,
      errors: 18
    },
    {
      id: '2',
      date: '2024-01-14',
      wpm: 42,
      accuracy: 89,
      duration: 420,
      charactersTyped: 2940,
      errors: 32
    },
    {
      id: '3',
      date: '2024-01-13',
      wpm: 38,
      accuracy: 85,
      duration: 360,
      charactersTyped: 2280,
      errors: 45
    },
    {
      id: '4',
      date: '2024-01-12',
      wpm: 35,
      accuracy: 82,
      duration: 300,
      charactersTyped: 1750,
      errors: 38
    },
    {
      id: '5',
      date: '2024-01-11',
      wpm: 32,
      accuracy: 78,
      duration: 240,
      charactersTyped: 1280,
      errors: 42
    }
  ];

  const averageWpm = Math.round(mockSessions.reduce((sum, session) => sum + session.wpm, 0) / mockSessions.length);
  const averageAccuracy = Math.round(mockSessions.reduce((sum, session) => sum + session.accuracy, 0) / mockSessions.length);
  const totalTime = mockSessions.reduce((sum, session) => sum + session.duration, 0);
  const totalCharacters = mockSessions.reduce((sum, session) => sum + session.charactersTyped, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            练习统计
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            跟踪你的打字进度和表现
          </p>
        </div>

        {/* Period Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
            <div className="flex space-x-1">
              {[
                { value: 'week', label: '本周' },
                { value: 'month', label: '本月' },
                { value: 'year', label: '今年' },
                { value: 'all', label: '全部' }
              ].map((period) => (
                <button
                  key={period.value}
                  onClick={() => setSelectedPeriod(period.value)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedPeriod === period.value
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">平均WPM</p>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{averageWpm}</p>
              </div>
              <div className="text-3xl">⚡</div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="text-green-500 mr-1">↗</span>
                <span>+12% 相比上周</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">平均准确率</p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{averageAccuracy}%</p>
              </div>
              <div className="text-3xl">🎯</div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="text-green-500 mr-1">↗</span>
                <span>+5% 相比上周</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">总练习时间</p>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{Math.round(totalTime / 60)}分钟</p>
              </div>
              <div className="text-3xl">⏰</div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="text-green-500 mr-1">↗</span>
                <span>+25% 相比上周</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">总字符数</p>
                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">{totalCharacters.toLocaleString()}</p>
              </div>
              <div className="text-3xl">📝</div>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="text-green-500 mr-1">↗</span>
                <span>+18% 相比上周</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">WPM 趋势</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {mockSessions.slice().reverse().map((session) => (
              <div key={session.id} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t"
                  style={{ height: `${(session.wpm / 50) * 200}px` }}
                ></div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  {session.wpm}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {new Date(session.date).toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Sessions */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">最近练习记录</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">日期</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">WPM</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">准确率</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">时长</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">字符数</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">错误</th>
                </tr>
              </thead>
              <tbody>
                {mockSessions.map((session) => (
                  <tr key={session.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4 text-sm text-gray-800 dark:text-white">
                      {new Date(session.date).toLocaleDateString('zh-CN')}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`font-medium ${
                        session.wpm >= 40 ? 'text-green-600 dark:text-green-400' :
                        session.wpm >= 30 ? 'text-yellow-600 dark:text-yellow-400' :
                        'text-red-600 dark:text-red-400'
                      }`}>
                        {session.wpm}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`font-medium ${
                        session.accuracy >= 90 ? 'text-green-600 dark:text-green-400' :
                        session.accuracy >= 80 ? 'text-yellow-600 dark:text-yellow-400' :
                        'text-red-600 dark:text-red-400'
                      }`}>
                        {session.accuracy}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                      {Math.round(session.duration / 60)}分钟
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                      {session.charactersTyped.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                      {session.errors}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">🏆 成就徽章</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🚀</span>
              </div>
              <p className="text-white text-sm font-medium">速度达人</p>
              <p className="text-yellow-200 text-xs">WPM {'>'} 40</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🎯</span>
              </div>
              <p className="text-white text-sm font-medium">精准射手</p>
              <p className="text-yellow-200 text-xs">准确率 {'>'} 95%</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">⏰</span>
              </div>
              <p className="text-white text-sm font-medium">坚持不懈</p>
              <p className="text-yellow-200 text-xs">连续练习7天</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">📝</span>
              </div>
              <p className="text-white text-sm font-medium">打字大师</p>
              <p className="text-yellow-200 text-xs">总字符 {'>'} 10,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 