document.addEventListener('DOMContentLoaded', function() {
    // 获取URL参数
    const params = new URLSearchParams(window.location.search);
    const username = params.get('username') || '亲';
    const zodiac = params.get('zodiac') || '未知';

    // 运势分析模板
    const fortuneTemplates = [
        {
            main: "根据星象显示，你近期将迎来重要转折。",
            details: [
                "事业方面将出现新的机遇，需要把握时机。",
                "感情运势正在上升，单身者有望遇到良缘。",
                "财运方面需要谨慎投资，避免冲动消费。",
                "健康方面要注意作息规律，保持良好状态。"
            ]
        },
        {
            main: "命理分析表明，你的财运正在上升期。",
            details: [
                "正财收入稳定增长，偏财运势也不错。",
                "投资理财方面会有意外收获。",
                "适合开展新的商业合作项目。",
                "注意合理规划资金使用。"
            ]
        },
        {
            main: "从八字来看，你的事业运程即将开启新篇章。",
            details: [
                "工作能力得到认可，有望获得晋升机会。",
                "新的项目合作即将展开，需要做好准备。",
                "贵人运旺盛，会得到重要人物的帮助。",
                "注意处理好与同事的关系。"
            ]
        },
        {
            main: "根据紫微斗数，你的感情运势正在酝酿变化。",
            details: [
                "单身者桃花运旺盛，有望遇到心仪对象。",
                "已有伴侣者感情更加稳定，可以考虑进一步发展。",
                "家庭关系和谐，与家人相处融洽。",
                "注意处理好感情与事业的关系。"
            ]
        }
    ];

    // 表单数据对象
    const formData = {
        name: '',
        gender: '',
        year: '',
        month: '',
        day: '',
        hour: '',
        location: ''
    };

    // 为所有输入框添加change事件监听
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('change', function(e) {
            const { name, value } = e.target;
            formData[name] = value;
        });
    });

    const resultDiv = document.getElementById('analysisResult');
    const resultArea = document.getElementById('resultArea');
    const predictBtn = document.getElementById('predictBtn');
    let fortune = ''; // 存储完整的占卜结果
    let shortFortune = ''; // 存储简短的占卜结果

    predictBtn.addEventListener('click', function() {
        try {
            // 验证表单数据
            if (!formData.name || !formData.gender || !formData.year || !formData.month || !formData.day) {
                throw new Error('请填写完整的个人信息');
            }

            // 生成随机运势分析
            const randomIndex = Math.floor(Math.random() * fortuneTemplates.length);
            const template = fortuneTemplates[randomIndex];
            
            // 根据用户信息生成个性化运势
            const personalizedFortune = `
${template.main}
${formData.name}的命理显示，${formData.gender === '男' ? '他' : '她'}的${formData.year}年运势正在转变。
${template.details[0]}
${template.details[1]}
${template.details[2]}
${template.details[3]}
如需查看完整命盘分析与年度运程详解，请点击下方按钮获取完整占卜报告。`;

            // 将运势分析编码并跳转到结果页面
            const encodedFortune = encodeURIComponent(personalizedFortune);
            window.location.href = `result.html?fortune=${encodedFortune}`;

        } catch (error) {
            console.error('详细错误:', error);
            alert(`测算过程中出现错误：${error.message}`);
        }
    });

    // 获取完整报告按钮点击事件
    document.getElementById('getFullReport').addEventListener('click', function() {
        alert('完整报告功能即将上线，敬请期待！');
    });
}); 