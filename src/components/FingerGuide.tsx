'use client';

interface FingerGuideProps {
  currentChar: string;
  fingerHint: string;
}

const fingerIcons = {
  '左手小指': '👆',
  '左手无名指': '👆',
  '左手中指': '👆',
  '左手食指': '👆',
  '右手食指': '👆',
  '右手中指': '👆',
  '右手无名指': '👆',
  '右手小指': '👆',
  '拇指': '👍'
};

const fingerColors = {
  '左手小指': 'text-red-600 bg-red-100 border-red-300',
  '左手无名指': 'text-orange-600 bg-orange-100 border-orange-300',
  '左手中指': 'text-yellow-600 bg-yellow-100 border-yellow-300',
  '左手食指': 'text-green-600 bg-green-100 border-green-300',
  '右手食指': 'text-blue-600 bg-blue-100 border-blue-300',
  '右手中指': 'text-purple-600 bg-purple-100 border-purple-300',
  '右手无名指': 'text-pink-600 bg-pink-100 border-pink-300',
  '右手小指': 'text-indigo-600 bg-indigo-100 border-indigo-300',
  '拇指': 'text-gray-600 bg-gray-100 border-gray-300'
};

export default function FingerGuide({ currentChar, fingerHint }: FingerGuideProps) {
  if (!currentChar) return null;

  return (
         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6 animate-pulse">
      <div className="text-center">
                 <div className="mb-4">
           <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
             当前字母: <span className="text-6xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-pulse font-bold">{currentChar}</span>
           </div>
         </div>
        
                 <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 ${fingerColors[fingerHint] || 'text-gray-600 bg-gray-100 border-gray-300'} animate-glow`}>
           <span className="text-2xl">{fingerIcons[fingerHint] || '👆'}</span>
           <span className="text-lg font-semibold">使用: {fingerHint}</span>
         </div>
        
                 <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
           <p>请将手指放在正确的位置，然后按下对应的键</p>
           <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-full">
             <span className="text-yellow-600 dark:text-yellow-400">⌨️</span>
             <span className="text-yellow-700 dark:text-yellow-300 font-semibold">键盘上高亮显示的键</span>
           </div>
         </div>
      </div>
    </div>
  );
} 