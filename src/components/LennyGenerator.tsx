import { useState, useEffect } from 'react';
import { ClipboardCopy, RotateCcw } from 'lucide-react';

interface LennyParts {
  eyes: string[];
  mouths: string[];
  ears: string[];
  hands: string[];
}

const lennyParts: LennyParts = {
  eyes: [
    '•', 'o', 'O', '°', '0', '⊙', '○', '⚆', 'ᗒ', 'ಠ', 'ᵔ', 'ᴗ', '◕', '•́', '≧', 'ᵒ', 'ᵔ', '⌐■', '￣', '•̀', '￢', '╥', '＾',
    '☼', '★', '❋', '✿', '☂', '☾', '☽',
    '♂', '♪', '♥', '☺', '✤', '▢', 'ü',
    'ö', '®', '©', '$', '₮', '€', '£',
    '¥', '₪', '₹', '❤', '€', '⊙', '+',
    '-', 'Π', 'Ⅱ', '∩', 'U', '^', 'v',
    '⋮', ':', '∴', '∷', '≈', '≋', '~',
    '⊕', '⊖', '⊝', '▫', '⊠', '∩', 'U',
    '<', '>', '≠', '≯', '≮', '≭', 'Y',
    '^', '♀', '⚫', '⊕', '◆', '◇', '▣',
    '□', '▢', '▩', '▨', '▧', '▦', '▅',
    '▭', '▫', '▪', '▬', '▯', '△', '▲',
    '▽', '◄', '►', '▼', '▽', '⓪', '⓿',
    '•', '▹', '◃', '⚆', '⚈', 'ᘳ', 'ᘰ',
    '⌒', 'o', 'Σ', 'ヽ', 'ὸ', 'ό', '≪',
    '≫', '\\', '/', 'òó', '~', '°', '@',
    'ὸ', '῾', 'σ', '◃', '▹', '⊗', '×',
    '⊕', '→', '←', 'x-', 'T~', '῏', '◐',
    '◑', '♡', '♡', '❣', '✲', '✿', '✺'
  ],
  mouths: [
    '_', '.', 'ω', '‿', '▽', 'Д', '□', 'ᗜ', 'ᴥ', 'ᗨ', 'ᨓ', 'ᗣ', 'ᗢ', 'ᗤ', 'ᗧ', 'ᗝ', 'ᨎ', 'ᨊ', 'ᨆ',
    '┐', '┌', '┘', 'q', 'u', 'ρ', '⊥', '±', 'ᑌ', 'ᑎ', '^', '∞',
    'Ω', '≥', '▼', 'X', '人', '工', '~', 'Θ', '´', '〜',
    '▲', '∇', 'D', '◦', 'W', 'ᓂ', 'ε', '日', 'I', '|',
    '◊', '⌒', '⋯', '益', 'ᓀ', 'つ', 'ᕕ',
    'ロ', '○', '⌣', '∩', '>', 'ᗛ', '△',
    'ᒥ', 'O', 'V', 'φ', 'U', '♥', '♡',
    '×', 'ツ', '0', 'ж', '☆',
    'ζ', '〰', '6⃣', '⇩', '¯'
  ],
  ears: [
    '(', ')', '༼', '༽', '⎝', '⎠', '⎛', '⎞', '〈', '〉', '⟅', '⟆', '⦃', '⦄', '【', '】', '⸂', '⸃', '₍', '₎',
    '?', '¿', '?', '¿', '?', 'q', 'ρ',
    '@', '୨', 'Є', 'ヨ', 'ع', 'ヨ', 'є',
    '9', '[', ']', '{', '}', '⟦', '$',
    '⌒', '\\', '[', ']', '|', '\\', '/',
    '(*', '(❀', '(❁'
  ],
  hands: [
    '☞', '╰', '╯', '୧', '୨', '٩', '۶', 'ᕙ', 'ᕗ', 'ᕦ', 'ᕤ', '◝', '◜', '⊃', '⊂', '┗', '┓', '╭', '╮', '╰', '╯', 'ᓄ', 'ᓂ', '∩', 'つ', 'っ', 'ノ', '⊂', '⊃',
    '╭∩╮',
    '̿̿ ̿̿ ̿̿ ̿\'̿\'\\̵͇̿̿\\з=',
    '┌П┐',
    '=ε/̵͇̿̿/\'̿\'̿ ̿ ̿̿ ̿̿ ̿̿',
    '━╤デ╦︻',
    '┻̿═━一-',
    '=/̵͇̿̿/\'̿\'̿̿̿ ̿ ̿̿',
    'つ/̵͇̿̿/\'̿\'̿ ̿ ̿̿ ̿̿ ̿̿',
    '̿ ̿̿ ̿̿ ̿\'̿\'\\̵͇̿̿\\⊂=',
    'づ',
    '✺◟',
    '◞✺',
    '▃',
    'ᕕ',
    'ง',
    'ρ', '┐\\', '┐_', '_┌', '┐~', '~┌', 'є',
    '୨', '<', '>', 'C', 'כ', '´', '⎯⎯',
    '⎯⎯~', '※\\', '/※', '-=≡Σ◊', '◊Σ≡=-', '←', 'ᑕ',
    '-', 'L', '⎾', '⎿', '⏌', '=', '■',
    '⌒', '⌣', '→', '︻┳═一', '︻╦̵̵͇̿̿̿̿╤──', '︻デ═一', '︻╦╤─',
    'q', 'ρ.', '\\', '||', '/', '┐', '┌'
  ]
};

const LennyGenerator = () => {
  const [leftEar, setLeftEar] = useState('(');
  const [leftEye, setLeftEye] = useState('•');
  const [mouth, setMouth] = useState('ω');
  const [rightEye, setRightEye] = useState('•');
  const [rightEar, setRightEar] = useState(')');
  const [leftHand, setLeftHand] = useState('☞');
  const [rightHand, setRightHand] = useState('☞');
  const [showToast, setShowToast] = useState(false);
  const [activeLeftTab, setActiveLeftTab] = useState<'hand' | 'ear' | 'eye'>('hand');
  const [activeRightTab, setActiveRightTab] = useState<'eye' | 'ear' | 'hand'>('eye');

  const currentLenny = `${leftHand}${leftEar}${leftEye}${mouth}${rightEye}${rightEar}${rightHand}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentLenny);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const resetLenny = () => {
    setLeftEar('(');
    setLeftEye('•');
    setMouth('ω');
    setRightEye('•');
    setRightEar(')');
    setLeftHand('☞');
    setRightHand('☞');
  };

  const renderTabButton = (
    title: string,
    tabValue: 'hand' | 'ear' | 'eye',
    activeTab: string,
    setActiveTab: (tab: 'hand' | 'ear' | 'eye') => void
  ) => (
    <button
      type="button"
      onClick={() => setActiveTab(tabValue)}
      className={`px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-lg transition-all duration-200 ${
        activeTab === tabValue
          ? 'bg-[#F4963F] text-white'
          : 'bg-white text-gray-700 hover:bg-gray-50'
      }`}
    >
      {title}
    </button>
  );

  const renderPartSelector = (title: string, parts: string[], currentValue: string, setValue: (value: string) => void) => {
    // 将武器类手势和普通手势分开
    const weaponHands = [
      '=', '■', '⌒', '⌣', '→', '︻┳═一', '︻╦̵̵͇̿̿̿̿╤──',
      '︻デ═一', '︻╦╤─', '=', '┐┐┐', 'q', 'ρ.', '\\',
      '||', '/', '┐', '┌', '̿̿ ̿̿ ̿̿ ̿\'̿\'\\̵͇̿̿\\з=',
      '=ε/̵͇̿̿/\'̿\'̿ ̿ ̿̿ ̿̿ ̿̿', '━╤デ╦︻', '┻̿═━一-',
      '=/̵͇̿̿/\'̿\'̿̿̿ ̿ ̿̿', 'つ/̵͇̿̿/\'̿\'̿ ̿ ̿̿ ̿̿ ̿̿',
      '̿ ̿̿ ̿̿ ̿\'̿\'\\̵͇̿̿\\⊂=',
      '-=≡Σ◊', '◊Σ≡=-'
    ];

    const isWeaponSection = parts === lennyParts.hands;
    const regularHands = isWeaponSection ? parts.filter(part => !weaponHands.includes(part)) : parts;
    
    // 获取按钮样式的函数，为长符号提供更多空间
    const getButtonStyle = (part: string, isCurrentValue: boolean) => {
      const longSymbols = ['-=≡Σ◊', '◊Σ≡=-', '̿̿ ̿̿ ̿̿ ̿\'̿\'\\̵͇̿̿\\з=', '=ε/̵͇̿̿/\'̿\'̿ ̿ ̿̿ ̿̿ ̿̿', '━╤デ╦︻', '︻╦̵̵͇̿̿̿̿╤──'];
      const isLongSymbol = longSymbols.includes(part);
      
      const baseStyle = `p-1 md:p-2 text-base md:text-lg border rounded-md transition-all duration-200 ${isLongSymbol ? 'whitespace-nowrap overflow-visible min-w-[80px] md:min-w-[100px]' : ''} ${
        isCurrentValue
          ? 'bg-[#F4963F] text-white border-[#F4963F]'
          : 'bg-white text-gray-700 border-gray-200 hover:border-[#F4963F] hover:text-[#F4963F]'
      }`;
      
      return baseStyle;
    };
    
    return (
      <div className="w-full">
        {title && <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-700">{title}</h3>}
        {isWeaponSection && (
          <>
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-1.5 md:gap-2">
              {regularHands.map((part) => (
                <button
                  key={part}
                  type="button"
                  onClick={() => setValue(part)}
                  className={getButtonStyle(part, currentValue === part)}
                >
                  {part}
                </button>
              ))}
            </div>
            <div className="mt-4 md:mt-6">
              <div className="flex flex-row flex-wrap gap-1.5 md:gap-2">
                {weaponHands.map((part) => (
                  <button
                    key={part}
                    type="button"
                    onClick={() => setValue(part)}
                    className={getButtonStyle(part, currentValue === part)}
                  >
                    {part}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
        {!isWeaponSection && (
          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-1.5 md:gap-2">
            {parts.map((part) => (
              <button
                key={part}
                type="button"
                onClick={() => setValue(part)}
                className={getButtonStyle(part, currentValue === part)}
              >
                {part}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    // 添加全局样式
    const style = document.createElement('style');
    style.textContent = `
      .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #F4963F;
        border-radius: 3px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #E3852E;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-4 py-4 md:py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-[#F4963F]">Lenny Face Generator</h1>
      
      <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
          <div className="text-xl md:text-2xl font-mono bg-gray-50 p-3 md:p-4 rounded-lg w-full md:flex-1 md:mr-4 overflow-x-auto whitespace-nowrap">
            {currentLenny}
          </div>
          <div className="flex gap-2 md:flex-shrink-0">
            <button
              type="button"
              onClick={copyToClipboard}
              className="flex-1 p-2 md:p-3 bg-[#F4963F] text-white rounded-lg hover:bg-[#E3852E] transition-colors flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
            >
              <ClipboardCopy className="w-4 h-4 md:w-5 md:h-5" />
              <span>Copy</span>
            </button>
            <button
              type="button"
              onClick={resetLenny}
              className="flex-1 p-2 md:p-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base"
            >
              <RotateCcw className="w-4 h-4 md:w-5 md:h-5" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-700 text-center">Left Side</h2>
          <div className="flex gap-2 mb-4 justify-center flex-wrap">
            {renderTabButton('Hand', 'hand', activeLeftTab, setActiveLeftTab)}
            {renderTabButton('Ear', 'ear', activeLeftTab, setActiveLeftTab)}
            {renderTabButton('Eye', 'eye', activeLeftTab, setActiveLeftTab)}
          </div>
          
          <div className="max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
            {activeLeftTab === 'hand' && renderPartSelector('', lennyParts.hands, leftHand, setLeftHand)}
            {activeLeftTab === 'ear' && renderPartSelector('', lennyParts.ears, leftEar, setLeftEar)}
            {activeLeftTab === 'eye' && renderPartSelector('', lennyParts.eyes, leftEye, setLeftEye)}
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-700 text-center">Mouth</h2>
          <div className="max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-1.5 md:gap-2">
              {lennyParts.mouths.map((part) => (
                <button
                  key={part}
                  type="button"
                  onClick={() => setMouth(part)}
                  className={`p-1 md:p-2 text-base md:text-lg border rounded-md transition-all duration-200 whitespace-nowrap ${
                    mouth === part
                      ? 'bg-[#F4963F] text-white border-[#F4963F]'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-[#F4963F] hover:text-[#F4963F]'
                  }`}
                >
                  {part}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-700 text-center">Right Side</h2>
          <div className="flex gap-2 mb-4 justify-center flex-wrap">
            {renderTabButton('Hand', 'hand', activeRightTab, setActiveRightTab)}
            {renderTabButton('Ear', 'ear', activeRightTab, setActiveRightTab)}
            {renderTabButton('Eye', 'eye', activeRightTab, setActiveRightTab)}
          </div>
          
          <div className="max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
            {activeRightTab === 'eye' && renderPartSelector('', lennyParts.eyes, rightEye, setRightEye)}
            {activeRightTab === 'ear' && renderPartSelector('', lennyParts.ears, rightEar, setRightEar)}
            {activeRightTab === 'hand' && renderPartSelector('', lennyParts.hands, rightHand, setRightHand)}
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F4963F] text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg z-50 animate-bounce">
          Copied to clipboard!
        </div>
      )}

      <div className="mt-10 md:mt-16 prose max-w-none">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-6 text-gray-800">How to Use the Lenny Face Generator</h2>
        <p className="text-sm md:text-base">
          This Lenny Face Generator allows you to create custom Lenny Faces by mixing and matching different parts.
          Choose from a variety of eyes, mouths, ears, and hands to create your perfect Lenny Face.
          Click the "Copy" button to copy your creation to the clipboard.
        </p>
      </div>
    </div>
  );
};

export default LennyGenerator; 