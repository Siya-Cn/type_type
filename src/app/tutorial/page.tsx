

export default function TutorialPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            指法教程
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            学习正确的指法，提高打字效率和准确性
          </p>
        </div>

        {/* Tutorial Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              基础指法介绍
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-red-500">🔴</span> 左手指法
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <span className="w-8 h-8 bg-red-200 border border-red-400 rounded flex items-center justify-center text-sm font-bold">Q</span>
                    <div>
                      <div className="font-semibold">小指</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">负责 Q, A, Z 键</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <span className="w-8 h-8 bg-orange-200 border border-orange-400 rounded flex items-center justify-center text-sm font-bold">W</span>
                    <div>
                      <div className="font-semibold">无名指</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">负责 W, S, X 键</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <span className="w-8 h-8 bg-yellow-200 border border-yellow-400 rounded flex items-center justify-center text-sm font-bold">E</span>
                    <div>
                      <div className="font-semibold">中指</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">负责 E, D, C 键</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="w-8 h-8 bg-green-200 border border-green-400 rounded flex items-center justify-center text-sm font-bold">F</span>
                    <div>
                      <div className="font-semibold">食指</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">负责 R, F, V, T, G, B 键</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-blue-500">🔵</span> 右手指法
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="w-8 h-8 bg-blue-200 border border-blue-400 rounded flex items-center justify-center text-sm font-bold">J</span>
                    <div>
                      <div className="font-semibold">食指</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">负责 Y, U, H, J, N, M 键</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <span className="w-8 h-8 bg-purple-200 border border-purple-400 rounded flex items-center justify-center text-sm font-bold">K</span>
                    <div>
                      <div className="font-semibold">中指</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">负责 I, K, , 键</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                    <span className="w-8 h-8 bg-pink-200 border border-pink-400 rounded flex items-center justify-center text-sm font-bold">L</span>
                    <div>
                      <div className="font-semibold">无名指</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">负责 O, L, . 键</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                    <span className="w-8 h-8 bg-indigo-200 border border-indigo-400 rounded flex items-center justify-center text-sm font-bold">P</span>
                    <div>
                      <div className="font-semibold">小指</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">负责 P, ;, / 键</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              练习步骤
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6">
                <div className="text-3xl mb-4">1️⃣</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">基础练习</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  从基本的手指位置开始，练习每个手指负责的键位
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6">
                <div className="text-3xl mb-4">2️⃣</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">组合练习</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  练习相邻键位的组合，提高手指协调性
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6">
                <div className="text-3xl mb-4">3️⃣</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">速度提升</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  在准确的基础上提高打字速度
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              练习技巧
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">保持正确姿势</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    手指自然弯曲，手腕保持水平，避免悬空或过度弯曲
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">专注准确性</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    初期练习时，准确率比速度更重要，建立正确的肌肉记忆
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <span className="text-2xl">⏰</span>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">规律练习</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    每天保持15-30分钟的练习，比长时间不规律的练习更有效
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">循序渐进</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    从简单的字母组合开始，逐步增加难度和复杂度
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              常见错误
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ 错误姿势</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• 手腕过度弯曲</li>
                  <li>• 手指悬空不接触键盘</li>
                  <li>• 坐姿不正确</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">❌ 急于求成</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• 忽视准确性追求速度</li>
                  <li>• 不按指法规则打字</li>
                  <li>• 练习时间不规律</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2">开始你的练习之旅</h3>
              <p className="mb-4 opacity-90">
                现在你已经了解了基础指法，点击下方按钮开始练习吧！
              </p>
              <a
                href="/practice"
                className="inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                🚀 开始练习
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 