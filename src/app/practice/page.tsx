'use client';

import { useState } from 'react';
import Keyboard from '@/components/Keyboard';
import FingerGuide from '@/components/FingerGuide';
import Tutorial from '@/components/Tutorial';

interface TypingStats {
  wpm: number;
  accuracy: number;
  totalCharacters: number;
  correctCharacters: number;
  timeElapsed: number;
  currentIndex: number;
}

interface FingerPosition {
  [key: string]: string;
}

const fingerPositions: FingerPosition = {
  'a': '左手小指',
  's': '左手无名指',
  'd': '左手中指',
  'f': '左手食指',
  'g': '左手食指',
  'h': '右手食指',
  'j': '右手食指',
  'k': '右手中指',
  'l': '右手无名指',
  'q': '左手小指',
  'w': '左手无名指',
  'e': '左手中指',
  'r': '左手食指',
  't': '左手食指',
  'y': '右手食指',
  'u': '右手食指',
  'i': '右手中指',
  'o': '右手无名指',
  'p': '右手小指',
  'z': '左手小指',
  'x': '左手无名指',
  'c': '左手中指',
  'v': '左手食指',
  'b': '左手食指',
  'n': '右手食指',
  'm': '右手食指',
  ' ': '拇指'
};

const sampleTexts = [
  'asdf jkl;',
  'qwerty uiop',
  'zxcvbnm',
  'hello world',
  'the quick brown fox',
  'abcdefghijklmnopqrstuvwxyz'
];

export default function Practice() {
  const [currentText, setCurrentText] = useState(sampleTexts[0]);
  const [userInput, setUserInput] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [stats, setStats] = useState<TypingStats>({
    wpm: 0,
    accuracy: 0,
    totalCharacters: 0,
    correctCharacters: 0,
    timeElapsed: 0,
    currentIndex: 0
  });
  const [showTutorial, setShowTutorial] = useState(false);

  const currentChar = userInput.length < currentText.length ? currentText[userInput.length] : '';

  const startTyping = () => {
    setIsStarted(true);
  };

  const resetTyping = () => {
    setUserInput('');
    setIsStarted(false);
    setIsFinished(false);
    setStats({
      wpm: 0,
      accuracy: 0,
      totalCharacters: 0,
      correctCharacters: 0,
      timeElapsed: 0,
      currentIndex: 0
    });
  };

  const nextText = () => {
    const currentIndex = sampleTexts.indexOf(currentText);
    const nextIndex = (currentIndex + 1) % sampleTexts.length;
    setCurrentText(sampleTexts[nextIndex]);
    resetTyping();
  };

  const calculateStats = (input: string, target: string, timeElapsed: number) => {
    const totalChars = target.length;
    const correctChars = input.split('').filter((char, index) => char === target[index]).length;
    const accuracy = totalChars > 0 ? (correctChars / totalChars) * 100 : 0;
    const wpm = timeElapsed > 0 ? (correctChars / 5) / (timeElapsed / 60) : 0;
    
    return {
      wpm,
      accuracy,
      totalCharacters: totalChars,
      correctCharacters: correctChars,
      timeElapsed,
      currentIndex: input.length
    };
  };

  const handleKeyPress = (key: string) => {
    console.log('Key pressed:', key);
    const newInput = userInput + key;
    console.log('New input:', newInput);
    setUserInput(newInput);

    if (!isStarted && newInput.length > 0) {
      console.log('Starting typing...');
      startTyping();
    }

    if (newInput.length >= currentText.length) {
      console.log('Finished typing');
      setIsFinished(true);
      setIsStarted(false);
      const newStats = calculateStats(newInput, currentText, stats.timeElapsed);
      setStats(newStats);
    }
  };

  const getFingerHint = (char: string) => {
    const lowerChar = char.toLowerCase();
    return fingerPositions[lowerChar] || '未知';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            指法练习
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            一个字母一个字母地练习指法，提高打字基础
          </p>
          <button
            onClick={() => setShowTutorial(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            📚 查看教程
          </button>
        </div>

        {/* Finger Guide */}
        {isStarted && currentChar && (
          <FingerGuide 
            currentChar={currentChar} 
            fingerHint={getFingerHint(currentChar)} 
          />
        )}

        {/* Stats Display */}
        {isStarted && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {Math.round(stats.wpm)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">WPM</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {Math.round(stats.accuracy)}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">准确率</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {Math.round(stats.timeElapsed)}s
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">时间</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {stats.correctCharacters}/{stats.totalCharacters}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">字符</div>
              </div>
            </div>
          </div>
        )}

        {/* Control Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={resetTyping}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            重置
          </button>
          <button
            onClick={nextText}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            下一段
          </button>
        </div>

        {/* Interactive Keyboard Practice */}
        <div className="mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              交互式键盘练习
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              点击键盘上的键来练习指法，当前字母会高亮显示
            </p>
            {currentChar && (
              <div className="mb-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
                  <span className="text-lg">🎯</span>
                  <span className="font-semibold">当前需要按的键: <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">{currentChar}</span></span>
                </div>
              </div>
            )}
            <div className="mb-4">
              <button
                onClick={() => handleKeyPress('a')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
              >
                测试点击 - 按A键
              </button>
              <p className="text-sm text-gray-600">当前输入: {userInput}</p>
            </div>
            <Keyboard 
              currentChar={currentChar} 
              onKeyPress={handleKeyPress}
              userInput={userInput}
              targetText={currentText}
            />
          </div>

          {/* Finger Position Guide */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              指法指南
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                  <span className="text-red-500">🔴</span> 左手
                </h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-red-200 border border-red-400 rounded"></span>
                    <span>小指: Q, A, Z</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-orange-200 border border-orange-400 rounded"></span>
                    <span>无名指: W, S, X</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-yellow-200 border border-yellow-400 rounded"></span>
                    <span>中指: E, D, C</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-green-200 border border-green-400 rounded"></span>
                    <span>食指: R, F, V, T, G, B</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                  <span className="text-blue-500">🔵</span> 右手
                </h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-blue-200 border border-blue-400 rounded"></span>
                    <span>食指: Y, U, H, J, N, M</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-purple-200 border border-purple-400 rounded"></span>
                    <span>中指: I, K, ,</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-pink-200 border border-pink-400 rounded"></span>
                    <span>无名指: O, L, .</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-indigo-200 border border-indigo-400 rounded"></span>
                    <span>小指: P, ;, /</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">特殊键</h4>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <div>空格: 拇指</div>
                <div>Shift: 小指</div>
                <div>Enter: 右手小指</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tutorial Modal */}
      <Tutorial 
        isVisible={showTutorial} 
        onClose={() => setShowTutorial(false)} 
      />
    </div>
  );
} 