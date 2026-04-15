// pages/test/test.js
Page({
  data: {
    // 测试数据
    questions: [],
    options: ["认同", "中立", "不认同"],
    results: [],
    resultTags: [
      "小酌爱好者", "健身家", "高产学者", 
      "努力达人", "休闲大师", "社交达人", 
      "数据美化师", "导师的贴心助手"
    ],
    
    // 测试状态
    currentQuestion: 1,
    questionIndex: 1,
    totalQuestions: 61,
    answers: [],
    question: "",
    currentAnswer: null,
    hasAnswer: false,
    isLastQuestion: false,
    showResult: false,
    progressPercent: 0,
    slideDirection: "",
    isAnimating: false,
    
    // 嘲笑框相关
    showMockModal: false,
    mockText: "",
    
    // 嘲笑题目配置
    mockQuestions: {}
    
    // 结果数据
    result: {}
  },

  onLoad: function() {
    // 初始化测试数据
    const sbtiData = this.getSbtiData();
    this.setData({
      questions: sbtiData.questions,
      options: sbtiData.options,
      results: sbtiData.results,
      totalQuestions: sbtiData.questions.length,
      answers: new Array(sbtiData.questions.length).fill(null),
      mockQuestions: this.getMockQuestions()
    });
    
    // 初始化测试
    this.initTest();
  },

  // 获取嘲笑题目配置
  getMockQuestions: function() {
    return {
      3: { // 第4题：实验室的咖啡机是我最好的朋友
        triggerAnswers: [1, 2], // 中立、不认同
        mockText: "该不会实验室连咖啡机都没有吧"
      },
      9: { // 第10题：健身房是我的第二实验室
        triggerAnswers: [1, 2], // 中立、不认同
        mockText: "该不会你连健身房都没去过吧"
      },
      12: { // 第13题：我的体脂率比论文查重率更重要
        triggerAnswers: [1, 2], // 中立、不认同
        mockText: "看来你更关心论文啊"
      },
      27: { // 第28题：我觉得读研后发量明显减少
        triggerAnswers: [0], // 认同
        mockText: "该不会你已经秃了吧"
      },
      51: { // 第52题：我曾因为实验失败而崩溃
        triggerAnswers: [2], // 不认同
        mockText: "该不会你还没做过实验吧"
      },
      59: { // 第60题：我觉得研究生恋爱是奢侈品
        triggerAnswers: [2], // 不认同
        mockText: "该不会你已经有对象了吧"
      },
      64: { // 第65题：我觉得组会就是大型表演现场
        triggerAnswers: [2], // 不认同
        mockText: "该不会你组会从不摸鱼吧"
      },
      54: { // 第55题：我曾为了逃避科研而疯狂做家务
        triggerAnswers: [2], // 不认同
        mockText: "该不会你真的热爱科研吧"
      },
      63: { // 第64题：我的电脑桌面堆满了永远不看的文献
        triggerAnswers: [2], // 不认同
        mockText: "该不会你每篇文献都认真看了吧"
      }
    };
  },

  // 获取测试数据
  getSbtiData: function() {
    return {
      questions: [
        "我在deadline前效率最高",
        "我的导师是我的'老板'",
        "我觉得查重系统是我的敌人",
        "实验室的咖啡机是我最好的朋友",
        "我曾因为论文熬夜到凌晨",
        "我觉得学术会议就是公费旅游",
        
        "压力大时，我会选择喝一杯放松",
        "我觉得实验室聚会喝酒是必要的社交活动",
        "我觉得微醺状态写论文更有灵感",
        "我觉得课题组应该有个小酒馆",
        
        "健身房是我的第二实验室",
        "我的蛋白质粉消耗比试剂还快",
        "我的健身计划比实验计划更详细",
        "我的体脂率比论文查重率更重要",
        
        "我觉得论文数量比质量更重要",
        "我觉得快速发表比深入研究更有价值",
        "我觉得参考文献数量比内容质量更重要",
        "我觉得会议摘要比全文论文更有用",
        
        "我经常主动加班，让同门感到压力",
        "我享受让同门感到追赶不上的感觉",
        "我习惯在朋友圈晒凌晨实验室的打卡照",
        "我喜欢在组会上提出很多问题显示认真",
        
        "我觉得读研后发量明显减少",
        "我擅长在实验室电脑上隐藏娱乐页面",
        "我掌握了'看起来在认真看文献'的技巧",
        "我电脑上有专门的'工作模式'壁纸",
        
        "我曾想退学但最终坚持了下来",
        "我能记住实验室所有人的生日和爱好",
        "我能和实验室的保洁阿姨聊半小时家常",
        "我参加了实验室所有的社交群聊",
        
        "我觉得同门是竞争对手也是战友",
        "我觉得数据稍微'调整'一下也无伤大雅",
        "我觉得异常数据点可以适当删除",
        "我觉得图表美化比数据真实性更重要",
        
        "我对未来就业感到焦虑",
        "我经常给导师带小礼物或家乡特产",
        "我总能找到机会赞美导师的新发型",
        "我记住导师所有喜欢的茶叶口味",
        
        "我觉得科研就是不断的试错",
        "我曾把导师的批评当作人生动力",
        "我觉得读研让我学会了'糊弄学'",
        "我对学术圈的黑话越来越熟悉",
        "我觉得写论文就像生孩子一样痛苦",
        "我曾因为实验失败而崩溃",
        "我觉得研究生的快乐很简单：数据好看、论文录用",
        "我对'内卷'深有体会",
        "我觉得自己有时在'假装'搞科研",
        "我曾为了逃避科研而疯狂做家务",
        "我觉得读研后变得更容易焦虑了",
        "我对'博士'二字既向往又恐惧",
        "我觉得学术成果和运气有很大关系",
        "我曾幻想自己成为学术大牛",
        "我觉得研究生恋爱是奢侈品",
        "我对'非升即走'感到恐慌",
        
        "我觉得实验室的八卦比学术进展更有趣",
        "我的电脑桌面堆满了永远不看的文献",
        "我觉得组会就是大型表演现场",
        "我有一本专门记录导师喜好的笔记本",
        "我觉得学术圈就是个大型熟人社会",
        
        "最后一道题：你认为这个测试准吗？",
        "终极问题：你测完会分享给同门吗？"
      ],
      
      options: ["认同", "中立", "不认同"],
      
      results: [
        {
          type: "小酌爱好者",
          description: "您是实验室的小酌爱好者，擅长在适当的时候放松自己。课题组聚会您永远是气氛担当，懂得劳逸结合。",
          academicPower: 60,
          stressResistance: 85,
          memeSkill: 90
        },
        {
          type: "健身家",
          description: "您是专业的健身家，科研再忙也不忘锻炼。实验室的杠铃比烧杯更熟悉，您的腹肌比论文更硬核。",
          academicPower: 75,
          stressResistance: 95,
          memeSkill: 70
        },
        {
          type: "高产学者",
          description: "您是高效的高产学者，擅长快速产出研究成果。您的目标是：在保证质量的前提下，稳步推进科研进度。",
          academicPower: 70,
          stressResistance: 80,
          memeSkill: 85
        },
        {
          type: "努力达人",
          description: "您是资深的努力达人，不仅自己认真，还带动全组进步。您的存在让课题组充满正能量，是大家的榜样。",
          academicPower: 90,
          stressResistance: 75,
          memeSkill: 65
        },
        {
          type: "休闲大师",
          description: "您是专业的休闲大师，懂得在紧张的科研中适当放松。看起来在认真工作，实则张弛有度，是时间管理大师。",
          academicPower: 50,
          stressResistance: 90,
          memeSkill: 95
        },
        {
          type: "社交达人",
          description: "您是优秀的社交达人，实验室内外都能轻松交流。认识所有楼层的同学，连保洁阿姨都是您的好友。",
          academicPower: 65,
          stressResistance: 85,
          memeSkill: 88
        },
        {
          type: "数据美化师",
          description: "您是优雅的数据处理专家，擅长让数据展示得更清晰。您的实验记录本充满了巧妙的可视化设计。",
          academicPower: 80,
          stressResistance: 70,
          memeSkill: 82
        },
        {
          type: "导师的贴心助手",
          description: "您是导师的贴心助手，深谙沟通之道。您的赞美让导师心情愉悦，是同门中的'情商担当'。",
          academicPower: 70,
          stressResistance: 88,
          memeSkill: 75
        }
      ]
    };
  },

  // 初始化测试
  initTest: function() {
    this.loadQuestion();
    this.updateProgressBar();
    this.updateNavigationButtons();
  },

  // 加载当前题目
  loadQuestion: function() {
    const currentIndex = this.data.currentQuestion - 1;
    const question = this.data.questions[currentIndex];
    const currentAnswer = this.data.answers[currentIndex];
    const isLastQuestion = this.data.currentQuestion === this.data.totalQuestions;
    const hasAnswer = currentAnswer !== null;
    
    this.setData({
      question: question,
      questionIndex: this.data.currentQuestion,
      currentAnswer: currentAnswer,
      hasAnswer: hasAnswer,
      isLastQuestion: isLastQuestion
    });
  },

  // 选择选项
  selectOption: function(e) {
    const optionIndex = e.currentTarget.dataset.index;
    const currentIndex = this.data.currentQuestion - 1;
    const answers = [...this.data.answers];
    
    answers[currentIndex] = optionIndex;
    
    this.setData({
      answers: answers,
      currentAnswer: optionIndex,
      hasAnswer: true
    });
    
    this.updateProgressBar();
    this.updateNavigationButtons();
    
    // 检查是否需要显示嘲笑框
    this.checkAndShowMock(currentIndex, optionIndex);
  },

  // 检查并显示嘲笑框
  checkAndShowMock: function(questionIndex, answerIndex) {
    const mockConfig = this.data.mockQuestions[questionIndex];
    if (mockConfig && mockConfig.triggerAnswers.includes(answerIndex)) {
      this.setData({
        showMockModal: true,
        mockText: mockConfig.mockText
      });
    }
  },

  // 关闭嘲笑框
  closeMockModal: function() {
    this.setData({
      showMockModal: false,
      mockText: ""
    });
  },

  // 更新进度条
  updateProgressBar: function() {
    const answeredCount = this.data.answers.filter(answer => answer !== null).length;
    const progressPercent = (answeredCount / this.data.totalQuestions) * 100;
    this.setData({
      progressPercent: progressPercent
    });
  },

  // 更新导航按钮状态
  updateNavigationButtons: function() {
    const hasAnswer = this.data.currentAnswer !== null;
    this.setData({
      hasAnswer: hasAnswer
    });
  },

  // 上一题（带右滑动画）
  prevQuestion: function() {
    if (this.data.currentQuestion > 1 && !this.data.isAnimating) {
      this.setData({
        isAnimating: true,
        slideDirection: "slide-right-exit"
      });

      setTimeout(() => {
        this.setData({
          currentQuestion: this.data.currentQuestion - 1,
          showResult: false,
          slideDirection: "slide-right-enter"
        });
        this.loadQuestion();
        this.updateProgressBar();

        setTimeout(() => {
          this.setData({
            slideDirection: "slide-right-enter-active",
            isAnimating: false
          });
        }, 50);
      }, 200);
    }
  },

  // 下一题（当前题向左滑出，下题从右边滑入）
  nextQuestion: function() {
    if (this.data.currentQuestion < this.data.totalQuestions && !this.data.isAnimating) {
      this.setData({
        isAnimating: true,
        slideDirection: "slide-left-exit"
      });

      setTimeout(() => {
        this.setData({
          currentQuestion: this.data.currentQuestion + 1,
          slideDirection: "slide-right-enter"
        });
        this.loadQuestion();
        this.updateProgressBar();

        setTimeout(() => {
          this.setData({
            slideDirection: "slide-right-enter-active",
            isAnimating: false
          });
        }, 50);
      }, 200);
    }
  },

  // 提交测试
  submitTest: function() {
    // 确保所有题目都已回答
    const unanswered = this.data.answers.filter(answer => answer === null).length;
    if (unanswered > 0) {
      wx.showToast({
        title: `还有 ${unanswered} 题未完成`,
        icon: 'none',
        duration: 2000
      });
      return;
    }
    
    // 计算得分
    const score = {
      agree: this.data.answers.filter(answer => answer === 0).length,
      neutral: this.data.answers.filter(answer => answer === 1).length,
      disagree: this.data.answers.filter(answer => answer === 2).length
    };
    
    // 计算结果类型
    const resultIndex = this.calculateResult(score);
    const result = this.data.results[resultIndex];
    
    // 显示结果
    this.setData({
      result: result,
      showResult: true
    });
  },

  // 计算结果类型（增强算法）
  calculateResult: function(score) {
    // 定义每种人格类型对应的题目索引范围
    const typeQuestionRanges = {
      0: [6, 7, 8, 9],      // 酒蒙子：第7-10题
      1: [10, 11, 12, 13],   // 健身家：第11-14题
      2: [14, 15, 16, 17],   // Academic Garbage Producer：第15-18题
      3: [18, 19, 20, 21],   // 内卷家：第19-22题
      4: [22, 23, 24, 25],   // 摸鱼大师：第23-26题
      5: [26, 27, 28, 29],   // 社交牛逼症：第27-30题
      6: [30, 31, 32, 33],   // 数据造假者：第31-34题
      7: [34, 35, 36, 37]    // 导师的马屁精：第35-38题
    };
    
    // 计算每种类型的分数
    const typeScores = [];
    for (let i = 0; i < 8; i++) {
      const indices = typeQuestionRanges[i];
      let typeScore = 0;
      let typeTotal = 0;
      
      for (const idx of indices) {
        const answer = this.data.answers[idx];
        if (answer !== null) {
          typeTotal++;
          if (answer === 0) { // 认同
            typeScore += 2;
          } else if (answer === 1) { // 中立
            typeScore += 1;
          }
        }
      }
      
      const avgScore = typeTotal > 0 ? typeScore / typeTotal : 0;
      typeScores.push(avgScore);
    }
    
    // 找到分数最高的类型
    let maxScore = -1;
    let maxType = 0;
    for (let i = 0; i < typeScores.length; i++) {
      if (typeScores[i] > maxScore) {
        maxScore = typeScores[i];
        maxType = i;
      }
    }
    
    // 如果有多个类型分数接近，使用后备逻辑
    let closeTypes = 0;
    for (let i = 0; i < typeScores.length; i++) {
      if (i !== maxType && maxScore - typeScores[i] < 0.3) {
        closeTypes++;
      }
    }
    
    if (closeTypes > 0) {
      const total = score.agree + score.neutral + score.disagree;
      const agreeRatio = score.agree / total;
      const disagreeRatio = score.disagree / total;
      
      if (agreeRatio > 0.5) {
        return 3; // 内卷家
      } else if (disagreeRatio > 0.5) {
        return 4; // 摸鱼大师
      } else if (score.neutral > score.agree && score.neutral > score.disagree) {
        return 5; // 社交牛逼症
      } else if (score.agree > score.disagree) {
        return 2; // Academic Garbage Producer
      } else {
        const randomTypes = [0, 1, 6, 7];
        return randomTypes[Math.floor(Math.random() * randomTypes.length)];
      }
    }
    
    return maxType;
  },

  // 重新测试
  retakeTest: function() {
    this.setData({
      currentQuestion: 1,
      answers: new Array(this.data.totalQuestions).fill(null),
      showResult: false,
      progressPercent: 0
    });
    this.initTest();
  },

  // 分享功能
  onShareAppMessage: function() {
    const resultType = this.data.result.type || '研值人格';
    return {
      title: `我测出了【${resultType}】！快来测测你的研值人格吧！`,
      path: '/pages/test/test',
      imageUrl: ''
    };
  }
});