import html from '@/assets/img/svg/html.svg'
import css from '@/assets/img/svg/css3.svg'
import js from '@/assets/img/svg/js.svg'
import java from '@/assets/img/svg/java.svg'
import vue from '@/assets/img/svg/vue.svg'
import react from '@/assets/img/svg/react.svg'
import ps from '@/assets/img/svg/ps.svg'
import node from '@/assets/img/svg/node.svg'

const cn = {
  title: '罗金城的简历',
  name: '罗金城',
  logoBlog: '罗金城的博客',
  concact: '联系我',
  university: '深圳大学',
  phone: '13128972305',
  email: '1317697565@qq.com',
  pageNames: [
    '关于我',
    '技能掌握',
    '项目经验',
    '博客文章',
    '联系我'
  ],
  about: '我叫罗金城，目前大四，坐标深圳，是一名前端工程师，除了Javascript，也接触过C,C++,Java。',
  skills: '技能',
  skillImgs: [
    html,
    css,
    js,
    node
  ],
  skillsOthers: [
    ps,
    vue,
    react,
    java
  ],
  blog: '博客文章',
  articles: [
    {
      date: '2017-09-12',
      title: 'ES6常见特性',
      text: 'ES5只有全局作用域，ES6新增了块级作用域，所谓块级作用域，即块内声明的变量只在块内有效。',
      url: 'http://blog.luojc.cn/2017/09/12/ES6/'
    },
    {
      date: '2017-08-12',
      title: '前端跨域',
      text: '由于浏览器同源策略的原因，只有具有相同源的脚本和文档才能相互访问。而所谓的跨域，就是让不同源的脚本，文档能够相互访问的方法。',
      url: 'http://blog.luojc.cn/2017/08/12/crossDomain/'
    },
    {
      date: '2017-07-27',
      title: 'this指针',
      text: '刚接触JavaScript的时候，总会多多少少遇到this的指向问题，MDN给出了很多this的指向，包括全局上下文，函数上下文，箭头函数，对象，原型链等等的this指向，但我们更多的是无法弄清楚函数的指向。',
      url: 'http://blog.luojc.cn/2017/07/27/this/'
    },
    {
      date: '2017-07-04',
      title: '垂直居中',
      text: '在平常写网页时，总会遇到很多水平居中，垂直居中的问题，往往对很多居中属性半生不熟，或者没去好好总结，本文章整理了一些水平，垂直居中的方法，希望有用。',
      url: 'http://blog.luojc.cn/2017/07/04/center/'
    },
    {
      date: '2017-05-04',
      title: 'css定位问题',
      text: 'w3c中指出，除非专门指定，否则所有框都在普通流中定位。也就是说，普通流中的元素的位置由元素在 (X)HTML 中的位置决定。意思即是普通流中的元素会按照其在html中结构布局。',
      url: 'http://blog.luojc.cn/2017/05/04/Position/'
    }
  ],
  projects: [
    {
      title: '购物书店',
      img: 'http://luojc.cn/static/img/book.83d9a9a.png',
      content: '前端采用Vue+elementUi+axios搭建,后端采用node.js,前后端分离,熟悉前后端交互流程。',
      demo: 'http://bookshop.luojc.cn'
    },
    {
      title: '九宫格游戏',
      img: 'http://luojc.cn/static/img/game.11c69ac.png',
      content: '一个九宫格小游戏，巩固基础学习。对JavaScript的一些算法有一定的了解，巩固前端基础知识。',
      demo: 'http://luojc.cn/game'
    },
    {
      title: '树洞控制台',
      img: 'http://luojc.cn/static/img/dashboard.png',
      content: '为小程序制作的控制台，团队合作，负责React组件的编写，熟悉Git的使用，使用Readux。'
    }
  ],
  projectName: '项目经验'
}

const en = {
  title: '罗金城的简历',
  name: 'LuoJC',
  logoBlog: 'LittleB blog',
  concact: 'Concact Me',
  university: 'ShenZhen University',
  phone: '13128972305',
  email: '1317697565@qq.com',
  pageNames: [
    'About Me',
    'Skill Mastery',
    'Project Experience',
    'Blog Articles',
    'Concact Me'
  ],
  about: 'My name is Luo Jincheng, now senior, coordinate Shenzhen, is a front-end engineer, in addition to Javascript, also contacted with C, C++, Java.',
  skills: 'Skill Mastery',
  skillImgs: [
    html,
    css,
    js,
    node
  ],
  skillsOthers: [
    ps,
    vue,
    react,
    java
  ],
  blog: 'Blog Articles',
  articles: [
    {
      date: '2017-09-12',
      title: 'ES6',
      text: 'ES5 has only a global scope, and ES6 adds a block level scope, called the block level scope, where the declared variables within the block are only valid within the block.',
      url: 'http://blog.luojc.cn/2017/09/12/ES6/'
    },
    {
      date: '2017-08-12',
      title: 'Cross Domain',
      text: 'Because of the same source strategy of browsers, only scripts and documents with the same source can access each other. The so-called cross domain, is to let different script, document can access each other.',
      url: 'http://blog.luojc.cn/2017/08/12/crossDomain/'
    },
    {
      date: '2017-07-27',
      title: 'This Pointer',
      text: 'Just contact JavaScript, more or less with the this point, MDN is presented to a lot of this, including the global context, function context, arrow function, object, prototype chain and so on this point, but we couldn\'t figure out is more pointed to function.',
      url: 'http://blog.luojc.cn/2017/07/27/this/'
    },
    {
      date: '2017-07-04',
      title: 'Vertical Centering',
      text: 'Write in a web page, will meet a lot of horizontal center, vertical center problem, often for many middle or not to attribute halfcooked, summary, this article compiled some level method vertically, the hope that useful.',
      url: 'http://blog.luojc.cn/2017/07/04/center/'
    },
    {
      date: '2017-05-04',
      title: 'Css Location',
      text: 'W3C indicates that all boxes are positioned in the normal stream unless specified. That is to say, the position of the elements in the general flow is determined by the position of the element in (X) HTML. That means that the elements in the normal stream follow their layout in html.',
      url: 'http://blog.luojc.cn/2017/05/04/Position/'
    }
  ],
  projects: [
    {
      title: 'Bookstore',
      img: 'http://luojc.cn/static/img/book.83d9a9a.png',
      content: 'The front end is built with Vue+elementUi+axios, the back end adopts node.js, the front and back ends are separated, and the interaction process between the front and back sides is familiar.',
      demo: 'http://bookshop.luojc.cn'
    },
    {
      title: 'Sudoku',
      img: 'http://luojc.cn/static/img/game.11c69ac.png',
      content: 'A square game, consolidate basic learning. Some understanding of JavaScript algorithm, consolidate front-end knowledge.',
      demo: 'http://luojc.cn/game'
    },
    {
      title: 'Dashboard',
      img: 'http://luojc.cn/static/img/dashboard.png',
      content: 'Dashboaard for tree hole applet, team work, responsible for the preparation of front-end React components, familiar with the use of Git, the use of Readux.'
    }
  ],
  projectName: 'Project Experience'
}

export default {
  cn: cn,
  en: en
}