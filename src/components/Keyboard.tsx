'use client';

interface KeyboardProps {
  currentChar: string;
  onKeyPress: (key: string) => void;
  userInput: string;
  targetText: string;
}

const keyboardLayout = [
  [
    { key: '`', finger: '左手小指' },
    { key: '1', finger: '左手小指' },
    { key: '2', finger: '左手小指' },
    { key: '3', finger: '左手小指' },
    { key: '4', finger: '左手小指' },
    { key: '5', finger: '左手小指' },
    { key: '6', finger: '右手小指' },
    { key: '7', finger: '右手小指' },
    { key: '8', finger: '右手小指' },
    { key: '9', finger: '右手小指' },
    { key: '0', finger: '右手小指' },
    { key: '-', finger: '右手小指' },
    { key: '=', finger: '右手小指' }
  ],
  [
    { key: 'q', finger: '左手小指' },
    { key: 'w', finger: '左手无名指' },
    { key: 'e', finger: '左手中指' },
    { key: 'r', finger: '左手食指' },
    { key: 't', finger: '左手食指' },
    { key: 'y', finger: '右手食指' },
    { key: 'u', finger: '右手食指' },
    { key: 'i', finger: '右手中指' },
    { key: 'o', finger: '右手无名指' },
    { key: 'p', finger: '右手小指' },
    { key: '[', finger: '右手小指' },
    { key: ']', finger: '右手小指' },
    { key: '\\', finger: '右手小指' }
  ],
  [
    { key: 'a', finger: '左手小指' },
    { key: 's', finger: '左手无名指' },
    { key: 'd', finger: '左手中指' },
    { key: 'f', finger: '左手食指' },
    { key: 'g', finger: '左手食指' },
    { key: 'h', finger: '右手食指' },
    { key: 'j', finger: '右手食指' },
    { key: 'k', finger: '右手中指' },
    { key: 'l', finger: '右手无名指' },
    { key: ';', finger: '右手小指' },
    { key: "'", finger: '右手小指' }
  ],
  [
    { key: 'z', finger: '左手小指' },
    { key: 'x', finger: '左手无名指' },
    { key: 'c', finger: '左手中指' },
    { key: 'v', finger: '左手食指' },
    { key: 'b', finger: '左手食指' },
    { key: 'n', finger: '右手食指' },
    { key: 'm', finger: '右手食指' },
    { key: ',', finger: '右手中指' },
    { key: '.', finger: '右手无名指' },
    { key: '/', finger: '右手小指' }
  ]
];

const fingerColors: { [key: string]: string } = {
  '左手小指': 'bg-red-200 border-red-400',
  '左手无名指': 'bg-orange-200 border-orange-400',
  '左手中指': 'bg-yellow-200 border-yellow-400',
  '左手食指': 'bg-green-200 border-green-400',
  '右手食指': 'bg-blue-200 border-blue-400',
  '右手中指': 'bg-purple-200 border-purple-400',
  '右手无名指': 'bg-pink-200 border-pink-400',
  '右手小指': 'bg-indigo-200 border-indigo-400',
  '拇指': 'bg-gray-200 border-gray-400'
};

export default function Keyboard({ currentChar, onKeyPress, userInput, targetText }: KeyboardProps) {
  const getKeyClass = (key: string, finger: string) => {
    const lowerChar = currentChar.toLowerCase();
    const isCurrent = key.toLowerCase() === lowerChar;
    const baseClass = 'w-8 h-8 md:w-10 md:h-10 rounded border-2 font-mono text-xs md:text-sm flex items-center justify-center transition-all duration-300 cursor-pointer select-none';
    
    if (isCurrent) {
      return `${baseClass} bg-gradient-to-br from-yellow-400 to-orange-500 border-orange-600 text-white font-bold scale-125 shadow-2xl animate-glow ring-4 ring-yellow-300 ring-opacity-50 animate-highlight`;
    }
    
    return `${baseClass} ${fingerColors[finger] || 'bg-gray-100 border-gray-300'} hover:scale-105 hover:bg-gray-200`;
  };

  const handleKeyClick = (key: string) => {
    console.log('Keyboard key clicked:', key);
    // 添加视觉反馈
    const element = document.activeElement as HTMLElement;
    if (element) {
      element.style.transform = 'scale(0.95)';
      setTimeout(() => {
        element.style.transform = '';
      }, 100);
    }
    onKeyPress(key);
  };

  const renderText = () => {
    return targetText.split('').map((char, index) => {
      const isTyped = index < userInput.length;
      const isCorrect = isTyped && userInput[index] === char;
      const isCurrent = index === userInput.length;
      
      return (
        <span key={index}>
          <span
            className={`${
              isTyped
                ? isCorrect
                  ? 'text-green-500 bg-green-50 dark:bg-green-900/20'
                  : 'text-red-500 bg-red-50 dark:bg-red-900/20'
                : isCurrent
                ? 'bg-blue-200 dark:bg-blue-800 border-b-2 border-blue-500'
                : ''
            } px-1 rounded`}
          >
            {char}
          </span>
        </span>
      );
    });
  };

  return (
    <div className="space-y-6">
      {/* Interactive Keyboard */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-lg relative z-10">
        <div className="space-y-2">
          {keyboardLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-1">
              {row.map(({ key, finger }) => (
                <div
                  key={key}
                  className={getKeyClass(key, finger)}
                  title={`${key} - ${finger}`}
                  onClick={() => handleKeyClick(key)}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'scale(0.95)';
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = '';
                  }}
                >
                  {key}
                </div>
              ))}
            </div>
          ))}
          
          {/* Space bar */}
          <div className="flex justify-center mt-2">
            <div
              className={`w-64 h-8 md:h-10 rounded border-2 flex items-center justify-center text-xs md:text-sm transition-all duration-300 cursor-pointer ${
                currentChar.toLowerCase() === ' ' 
                  ? 'bg-gradient-to-br from-yellow-400 to-orange-500 border-orange-600 text-white font-bold scale-125 shadow-2xl animate-glow ring-4 ring-yellow-300 ring-opacity-50 animate-highlight'
                  : 'bg-gray-200 border-gray-400 hover:scale-105 hover:bg-gray-300'
              }`}
              title="空格 - 拇指"
              onClick={() => handleKeyClick(' ')}
            >
              空格
            </div>
          </div>
        </div>
      </div>

      {/* Text Output */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          练习文本输出
        </h3>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 min-h-[120px] text-lg leading-relaxed font-mono">
          {renderText()}
        </div>
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <p>点击键盘上的键来输入文本，当前字母会高亮显示</p>
        </div>
      </div>
    </div>
  );
} 