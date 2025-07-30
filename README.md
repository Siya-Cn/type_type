# 指法练习网站

一个基于Next.js构建的指法练习网站，帮助用户从基础开始，一个字母一个字母地练习指法，提高打字速度和准确性。

## 功能特性

- 🎯 **指法练习** - 一个字母一个字母地练习，适合初学者
- 🖐️ **指法提示** - 实时显示当前字母应该使用哪个手指
- ⌨️ **交互式键盘** - 可视化键盘布局，当前字母高亮显示
- 🎨 **颜色编码** - 不同颜色代表不同手指，直观易懂
- 📊 **详细统计** - 显示WPM（每分钟单词数）、准确率、用时等关键指标
- 🎨 **现代化UI** - 使用Tailwind CSS构建的响应式设计，支持深色模式
- 🔄 **多篇文章** - 内置5篇不同的练习文本，从基础指法到完整句子
- ✅ **实时反馈** - 打字时实时显示正确和错误的字符
- 📱 **移动端友好** - 完全响应式设计，支持各种设备
- 📚 **指法指南** - 内置完整的指法指南，帮助用户学习正确的手指位置
- 🎓 **教程系统** - 详细的指法教程，帮助用户快速上手

## 技术栈

- **Next.js 14** - React框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **React Hooks** - 状态管理

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
```

## 使用说明

1. **查看教程** - 点击"查看教程"按钮了解正确的指法姿势和练习方法
2. **开始练习** - 点击"开始练习"按钮或直接在输入框中开始打字
3. **观察键盘** - 查看交互式键盘，当前字母会高亮显示
4. **指法提示** - 练习过程中会显示当前字母应该使用哪个手指
5. **实时统计** - 练习过程中会实时显示WPM、准确率、用时等数据
6. **完成练习** - 输入完整个文本后，会显示最终统计结果
7. **重新开始** - 可以重新开始当前文本的练习
8. **下一篇文章** - 切换到下一篇练习文本
9. **指法指南** - 页面底部有完整的指法指南供参考

## 统计指标说明

- **WPM (Words Per Minute)** - 每分钟正确输入的单词数
- **准确率** - 正确输入的字符占总字符数的百分比
- **用时** - 完成练习所需的时间（秒）
- **正确/总数** - 正确输入的字符数和总字符数

## 项目结构

```
src/
├── app/
│   ├── page.tsx          # 主页面组件
│   ├── layout.tsx        # 布局组件
│   └── globals.css       # 全局样式
├── components/
│   ├── Keyboard.tsx      # 交互式键盘组件
│   ├── FingerGuide.tsx   # 手指引导组件
│   └── Tutorial.tsx      # 教程组件
```

## 自定义练习文本

可以在 `src/app/page.tsx` 文件中的 `sampleTexts` 数组中添加或修改练习文本：

```typescript
const sampleTexts = [
  "asdf jkl; asdf jkl; asdf jkl; asdf jkl;",  // 基础指法练习
  "qwerty qwerty qwerty qwerty qwerty",       // 上排键练习
  "zxcvbn zxcvbn zxcvbn zxcvbn zxcvbn",       // 下排键练习
  "the quick brown fox jumps over the lazy dog", // 完整句子练习
  "programming is the art of telling another human being what one wants the computer to do" // 长句练习
];
```

## 指法指南

网站内置了完整的指法指南，包括：

- **左手**: 小指(Q,A,Z)、无名指(W,S,X)、中指(E,D,C)、食指(R,F,V,T,G,B)
- **右手**: 食指(Y,U,H,J,N,M)、中指(I,K,)、无名指(O,L,.)、小指(P,;,/)
- **特殊键**: 空格(拇指)、Shift(小指)、Enter(右手小指)

## 部署

这个项目可以轻松部署到Vercel、Netlify等平台：

1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 自动部署完成

## 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 许可证

MIT License
# type_type
