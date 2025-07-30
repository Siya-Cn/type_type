'use client';

import { useState } from 'react';

export default function Settings() {
  const [settings, setSettings] = useState({
    theme: 'auto',
    soundEnabled: true,
    vibrationEnabled: false,
    showFingerHints: true,
    showKeyboard: true,
    autoStart: false,
    difficulty: 'medium',
    practiceTime: 15,
    targetWpm: 40
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            设置
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            个性化你的练习体验
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8">
          {/* Appearance Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              外观设置
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">主题模式</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">选择你喜欢的界面主题</p>
                </div>
                <select
                  value={settings.theme}
                  onChange={(e) => handleSettingChange('theme', e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                >
                  <option value="light">浅色模式</option>
                  <option value="dark">深色模式</option>
                  <option value="auto">跟随系统</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">显示指法提示</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">在练习时显示当前字母的指法提示</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.showFingerHints}
                    onChange={(e) => handleSettingChange('showFingerHints', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">显示键盘</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">在练习界面显示虚拟键盘</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.showKeyboard}
                    onChange={(e) => handleSettingChange('showKeyboard', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Sound & Feedback Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">🔊</span>
              声音和反馈
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">按键音效</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">点击键盘时播放音效</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.soundEnabled}
                    onChange={(e) => handleSettingChange('soundEnabled', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">震动反馈</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">在移动设备上提供震动反馈</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.vibrationEnabled}
                    onChange={(e) => handleSettingChange('vibrationEnabled', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Practice Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">⚙️</span>
              练习设置
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">自动开始</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">进入练习页面时自动开始计时</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.autoStart}
                    onChange={(e) => handleSettingChange('autoStart', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">难度等级</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">选择练习的难度级别</p>
                </div>
                <select
                  value={settings.difficulty}
                  onChange={(e) => handleSettingChange('difficulty', e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                >
                  <option value="easy">简单</option>
                  <option value="medium">中等</option>
                  <option value="hard">困难</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">练习时长（分钟）</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">设置每次练习的目标时长</p>
                </div>
                <input
                  type="number"
                  min="5"
                  max="60"
                  value={settings.practiceTime}
                  onChange={(e) => handleSettingChange('practiceTime', parseInt(e.target.value))}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white w-20"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">目标WPM</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">设置你的目标打字速度</p>
                </div>
                <input
                  type="number"
                  min="10"
                  max="100"
                  value={settings.targetWpm}
                  onChange={(e) => handleSettingChange('targetWpm', parseInt(e.target.value))}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white w-20"
                />
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">💾</span>
              数据管理
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">导出练习数据</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">将你的练习记录导出为CSV文件</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  导出
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">清除所有数据</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">删除所有练习记录和设置（不可恢复）</p>
                </div>
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                  清除
                </button>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">ℹ️</span>
              关于
            </h2>
            
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex justify-between">
                <span>版本</span>
                <span>1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span>开发者</span>
                <span>打字练习团队</span>
              </div>
              <div className="flex justify-between">
                <span>最后更新</span>
                <span>2024年1月15日</span>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg">
            保存设置
          </button>
        </div>
      </div>
    </div>
  );
} 