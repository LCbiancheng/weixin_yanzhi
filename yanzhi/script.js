// 研值人格测试数据（研究生专属MBTI）
const sbtiData = {
    // 31道研究生专属题目（针对新人格类型优化）
    questions: [
        // 通用研究生生活题目
        "我在deadline前效率最高",
        "我的导师是我的'老板'",
        "我觉得查重系统是我的敌人",
        "实验室的咖啡机是我最好的朋友",
        "我曾因为论文熬夜到凌晨",
        "我觉得学术会议就是公费旅游",
        
        // 酒蒙子相关题目
        "压力大时，我会选择喝一杯放松",
        "我觉得实验室聚会喝酒是必要的社交活动",
        "我觉得微醺状态写论文更有灵感",
        "我觉得课题组应该有个小酒馆",
        
        // 健身家相关题目
        "健身房是我的第二实验室",
        "我的蛋白质粉消耗比试剂还快",
        "我的健身计划比实验计划更详细",
        "我的体脂率比论文查重率更重要",
        
        // Academic Garbage Producer相关题目
        "我觉得论文数量比质量更重要",
        "我觉得快速发表比深入研究更有价值",
        "我觉得参考文献数量比内容质量更重要",
        "我觉得会议摘要比全文论文更有用",
        
        // 内卷家相关题目
        "我经常主动加班，让同门感到压力",
        "我享受让同门感到追赶不上的感觉",
        "我习惯在朋友圈晒凌晨实验室的打卡照",
        "我喜欢在组会上提出很多问题显示认真",
        
        // 摸鱼大师相关题目
        "我觉得读研后发量明显减少",
        "我擅长在实验室电脑上隐藏娱乐页面",
        "我掌握了'看起来在认真看文献'的技巧",
        "我电脑上有专门的'工作模式'壁纸",
        
        // 社交牛逼症相关题目
        "我曾想退学但最终坚持了下来",
        "我能记住实验室所有人的生日和爱好",
        "我能和实验室的保洁阿姨聊半小时家常",
        "我参加了实验室所有的社交群聊",
        
        // 数据造假者相关题目
        "我觉得同门是竞争对手也是战友",
        "我觉得数据稍微'调整'一下也无伤大雅",
        "我觉得异常数据点可以适当删除",
        "我觉得图表美化比数据真实性更重要",
        
        // 导师的马屁精相关题目
        "我对未来就业感到焦虑",
        "我经常给导师带小礼物或家乡特产",
        "我总能找到机会赞美导师的新发型",
        "我记住导师所有喜欢的茶叶口味",
        
        // 其他研究生生活题目
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
        
        // 新增趣味题目
        "我觉得实验室的八卦比学术进展更有趣",
        "我的电脑桌面堆满了永远不看的文献",
        "我觉得组会就是大型表演现场",
        "我有一本专门记录导师喜好的笔记本",
        "我觉得学术圈就是个大型熟人社会",
        
        // 最后总结题
        "最后一道题：你认为这个测试准吗？",
        "终极问题：你测完会分享给同门吗？"
    ],
    
    // 选项（认同、中立、不认同）
    options: ["认同", "中立", "不认同"],
    
    // 研究生人格类型和描述（趣味版）
    results: [
        {
            type: "酒蒙子",
            description: "您是实验室的酒蒙子，擅长用酒精缓解科研压力。课题组聚会您永远是气氛担当，但第二天早上可能会后悔。",
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
            type: "Academic Garbage Producer",
            description: "您是高效的学术垃圾制造者，擅长生产低质量但数量可观的论文。您的目标是：不追求质量，只追求发表。",
            academicPower: 70,
            stressResistance: 80,
            memeSkill: 85
        },
        {
            type: "内卷家",
            description: "您是资深的内卷家，不仅自己拼命，还带动全组内卷。您的存在让同门压力倍增，是课题组的'卷王之王'。",
            academicPower: 90,
            stressResistance: 75,
            memeSkill: 65
        },
        {
            type: "摸鱼大师",
            description: "您是专业的摸鱼大师，摸鱼技巧登峰造极。看起来在认真科研，实际上在刷剧打游戏，是时间管理大师。",
            academicPower: 50,
            stressResistance: 90,
            memeSkill: 95
        },
        {
            type: "社交牛逼症",
            description: "您患有严重的社交牛逼症，实验室内外都是您的舞台。认识所有楼层的同学，连保洁阿姨都是您的好友。",
            academicPower: 65,
            stressResistance: 85,
            memeSkill: 88
        },
        {
            type: "数据造假者",
            description: "您是优雅的数据造假者（开玩笑的），擅长让数据'更美观'。您的实验记录本充满了'创造性'的调整。",
            academicPower: 80,
            stressResistance: 70,
            memeSkill: 82
        },
        {
            type: "导师的马屁精",
            description: "您是导师的专属马屁精，深谙拍马之道。您的赞美让导师心花怒放，是同门中的'情商担当'。",
            academicPower: 70,
            stressResistance: 88,
            memeSkill: 75
        }
    ]
};

// 测试状态管理
const testState = {
    currentQuestion: 0,
    answers: new Array(sbtiData.questions.length).fill(null),
    totalQuestions: sbtiData.questions.length
};

// DOM元素
const questionText = document.getElementById('questionText');
const questionIndex = document.getElementById('questionIndex');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const optionsContainer = document.getElementById('optionsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const progressBar = document.querySelector('.progress-bar');
const resultModal = document.getElementById('resultModal');
const resultType = document.getElementById('resultType');
const resultDescription = document.getElementById('resultDescription');
const closeModal = document.getElementById('closeModal');
const retakeBtn = document.getElementById('retakeBtn');

// 初始化测试
function initTest() {
    totalQuestionsSpan.textContent = testState.totalQuestions;
    loadQuestion();
    updateProgressBar();
    updateNavigationButtons();
}

// 加载当前题目
function loadQuestion() {
    const question = sbtiData.questions[testState.currentQuestion];
    questionText.textContent = question;
    questionIndex.textContent = testState.currentQuestion + 1;
    currentQuestionSpan.textContent = testState.currentQuestion + 1;
    
    // 清空选项容器
    optionsContainer.innerHTML = '';
    
    // 创建选项按钮
    sbtiData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (testState.answers[testState.currentQuestion] === index) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', () => {
            selectOption(index);
        });
        
        optionsContainer.appendChild(optionElement);
    });
}

// 选择选项
function selectOption(optionIndex) {
    // 移除之前的选择
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    
    // 标记当前选择
    options[optionIndex].classList.add('selected');
    testState.answers[testState.currentQuestion] = optionIndex;
    
    // 启用下一题按钮（如果当前已选择）
    updateNavigationButtons();
}

// 更新导航按钮状态
function updateNavigationButtons() {
    // 上一题按钮
    prevBtn.disabled = testState.currentQuestion === 0;
    
    // 下一题/提交按钮
    const hasAnswer = testState.answers[testState.currentQuestion] !== null;
    
    if (testState.currentQuestion === testState.totalQuestions - 1) {
        // 最后一题
        nextBtn.style.display = hasAnswer ? 'none' : 'flex';
        submitBtn.style.display = hasAnswer ? 'flex' : 'none';
        submitBtn.disabled = !hasAnswer;
    } else {
        // 非最后一题
        nextBtn.style.display = 'flex';
        submitBtn.style.display = 'none';
        nextBtn.disabled = !hasAnswer;
    }
}

// 更新进度条
function updateProgressBar() {
    const answeredCount = testState.answers.filter(answer => answer !== null).length;
    const progressPercent = (answeredCount / testState.totalQuestions) * 100;
    progressBar.style.setProperty('--progress-width', `${progressPercent}%`);
    
    // 更新进度条伪元素的宽度
    const progressBarAfter = document.querySelector('.progress-bar::after');
    if (progressBarAfter) {
        progressBarAfter.style.width = `${progressPercent}%`;
    } else {
        // 直接操作样式
        progressBar.style.background = `linear-gradient(90deg, #8a6df1 ${progressPercent}%, #e9ecef ${progressPercent}%)`;
    }
}

// 下一题
function nextQuestion() {
    if (testState.currentQuestion < testState.totalQuestions - 1) {
        testState.currentQuestion++;
        loadQuestion();
        updateProgressBar();
        updateNavigationButtons();
    }
}

// 上一题
function prevQuestion() {
    if (testState.currentQuestion > 0) {
        testState.currentQuestion--;
        loadQuestion();
        updateProgressBar();
        updateNavigationButtons();
    }
}

// 提交测试并计算结果
function submitTest() {
    // 确保所有题目都已回答
    const unanswered = testState.answers.filter(answer => answer === null).length;
    if (unanswered > 0) {
        alert(`请先回答所有题目！还有 ${unanswered} 题未完成。`);
        return;
    }
    
    // 计算得分（简单算法：统计认同、中立、不认同的数量）
    const score = {
        agree: testState.answers.filter(answer => answer === 0).length,
        neutral: testState.answers.filter(answer => answer === 1).length,
        disagree: testState.answers.filter(answer => answer === 2).length
    };
    
    // 根据得分选择结果类型
    const resultIndex = calculateResult(score);
    const result = sbtiData.results[resultIndex];
    
    // 显示结果
    showResult(result);
}

// 计算结果类型（增强算法）
function calculateResult(score) {
    // 定义每种人格类型对应的题目索引范围（基于questions数组）
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
    
    // 计算每种类型的分数（基于相关题目的认同程度）
    const typeScores = [];
    for (let i = 0; i < 8; i++) {
        const indices = typeQuestionRanges[i];
        let typeScore = 0;
        let typeTotal = 0;
        
        for (const idx of indices) {
            const answer = testState.answers[idx];
            if (answer !== null) {
                typeTotal++;
                // 认同得2分，中立得1分，不认同得0分
                if (answer === 0) { // 认同
                    typeScore += 2;
                } else if (answer === 1) { // 中立
                    typeScore += 1;
                }
                // 不认同得0分
            }
        }
        
        // 计算平均分（0-2分）
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
    
    // 如果最高分明显高于其他类型，直接返回
    // 检查是否有其他类型分数接近（相差小于0.3）
    let closeTypes = 0;
    for (let i = 0; i < typeScores.length; i++) {
        if (i !== maxType && maxScore - typeScores[i] < 0.3) {
            closeTypes++;
        }
    }
    
    // 如果有多个类型分数接近，使用原逻辑作为后备
    if (closeTypes > 0) {
        // 使用原比例逻辑作为后备
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
            // 随机分配
            const randomTypes = [0, 1, 6, 7];
            return randomTypes[Math.floor(Math.random() * randomTypes.length)];
        }
    }
    
    // 返回分数最高的类型
    return maxType;
}

// 显示结果弹窗
function showResult(result) {
    resultType.textContent = result.type;
    resultDescription.textContent = result.description;
    
    // 更新维度分析
    const dimBars = document.querySelectorAll('.dim-fill');
    const dimValues = document.querySelectorAll('.dim-value');
    
    dimBars[0].style.width = `${result.academicPower}%`;
    dimValues[0].textContent = `${result.academicPower}%`;
    
    dimBars[1].style.width = `${result.stressResistance}%`;
    dimValues[1].textContent = `${result.stressResistance}%`;
    
    dimBars[2].style.width = `${result.memeSkill}%`;
    dimValues[2].textContent = `${result.memeSkill}%`;
    
    // 显示弹窗
    resultModal.style.display = 'flex';
}

// 重新开始测试
function retakeTest() {
    // 重置状态
    testState.currentQuestion = 0;
    testState.answers.fill(null);
    
    // 重新初始化
    loadQuestion();
    updateProgressBar();
    updateNavigationButtons();
    
    // 隐藏弹窗
    resultModal.style.display = 'none';
}

// 事件监听
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
submitBtn.addEventListener('click', submitTest);
closeModal.addEventListener('click', () => {
    resultModal.style.display = 'none';
});
retakeBtn.addEventListener('click', retakeTest);

// 点击弹窗外部关闭
resultModal.addEventListener('click', (e) => {
    if (e.target === resultModal) {
        resultModal.style.display = 'none';
    }
});

// 分享按钮功能（模拟）
document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const type = this.classList.contains('wechat') ? '微信' : 
                     this.classList.contains('weibo') ? '微博' : '复制链接';
        
        if (type === '复制链接') {
            navigator.clipboard.writeText(window.location.href)
                .then(() => alert('链接已复制到剪贴板！'))
                .catch(() => alert('复制失败，请手动复制地址栏链接。'));
        } else {
            alert(`已模拟分享到${type}，实际功能需接入相应API。`);
        }
    });
});

// 初始化
document.addEventListener('DOMContentLoaded', initTest);