import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            欢迎来到打字练习
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            通过交互式键盘练习，提高你的打字速度和准确性
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/practice"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-lg"
            >
              🚀 开始练习
            </Link>
            <Link
              href="/tutorial"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-lg"
            >
              📚 查看教程
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">⌨️</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              交互式键盘
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              点击虚拟键盘进行练习，实时反馈和指法指导
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              指法练习
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              从基础指法开始，逐步提高打字技能
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              实时统计
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              跟踪WPM、准确率和练习进度
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              视觉反馈
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              颜色编码的键盘布局，清晰的指法提示
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              详细教程
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              完整的指法教程和练习指南
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              个性化设置
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              自定义练习内容和难度设置
            </p>
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            快速开始指南
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">选择练习</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                进入指法练习页面，选择适合的练习内容
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">开始练习</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                点击键盘上的按键，按照指法提示进行练习
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">查看进度</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                实时查看打字速度和准确率，持续改进
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
