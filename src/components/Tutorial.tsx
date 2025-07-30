'use client';

interface TutorialProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function Tutorial({ isVisible, onClose }: TutorialProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              🎯 指法练习教程
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                🖐️ 正确的指法姿势
              </h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <ul className="space-y-2 text-sm">
                  <li>• 左手食指放在 <strong>F</strong> 键上</li>
                  <li>• 右手食指放在 <strong>J</strong> 键上</li>
                  <li>• 其他手指自然放在相邻的键位上</li>
                  <li>• 手腕保持水平，不要弯曲</li>
                  <li>• 手指自然弯曲，不要伸直</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                🎨 颜色编码系统
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">左手</h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-red-200 border border-red-400 rounded"></span>
                      <span>小指 (Q, A, Z)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-200 border border-orange-400 rounded"></span>
                      <span>无名指 (W, S, X)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-yellow-200 border border-yellow-400 rounded"></span>
                      <span>中指 (E, D, C)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-200 border border-green-400 rounded"></span>
                      <span>食指 (R, F, V, T, G, B)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">右手</h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-blue-200 border border-blue-400 rounded"></span>
                      <span>食指 (Y, U, H, J, N, M)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-purple-200 border border-purple-400 rounded"></span>
                      <span>中指 (I, K, ,)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-pink-200 border border-pink-400 rounded"></span>
                      <span>无名指 (O, L, .)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-indigo-200 border border-indigo-400 rounded"></span>
                      <span>小指 (P, ;, /)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                🎯 练习步骤
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                  <div>
                    <strong>观察当前字母</strong> - 查看屏幕上高亮显示的字母
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                  <div>
                    <strong>确认手指位置</strong> - 根据颜色提示找到正确的手指
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                  <div>
                    <strong>按下对应键位</strong> - 使用正确的手指按下键盘上的键
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span>
                  <div>
                    <strong>检查反馈</strong> - 观察字符是否正确输入（绿色=正确，红色=错误）
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                💡 练习建议
              </h3>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-sm">
                <ul className="space-y-2">
                  <li>• 从基础指法练习开始（asdf jkl;）</li>
                  <li>• 不要急于求成，先确保准确性</li>
                  <li>• 保持正确的手指姿势</li>
                  <li>• 练习时不要看键盘，培养肌肉记忆</li>
                  <li>• 每天坚持练习15-30分钟</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              开始练习
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 