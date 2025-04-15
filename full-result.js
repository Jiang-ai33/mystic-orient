document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const fortune = params.get('fortune');

    // 生成详细的占卜结果
    const detailedFortune = {
        basicInfo: [
            "八字：甲子 乙丑 丙寅 丁卯",
            "五行：木水 木土 火木 火木",
            "格局：正官格，偏财格",
            "喜用神：金、水",
            "忌神：木、火",
            "命主身强，喜财官，忌印比"
        ],
        decadeFortune: [
            "2024-2033年：事业上升期，财运亨通",
            "2034-2043年：贵人相助，事业有成",
            "2044-2053年：财运稳定，家庭和睦",
            "2054-2063年：晚年幸福，子孙孝顺"
        ],
        personality: [
            "性格特点：聪明机智，善于交际",
            "优点：有领导才能，做事果断",
            "缺点：有时过于自信，容易冲动",
            "建议：多听取他人意见，保持谦逊"
        ],
        loveMarriage: [
            "感情运势：桃花运旺盛，异性缘好",
            "婚姻状况：晚婚为宜，婚后幸福",
            "配偶特点：性格温和，事业有成",
            "建议：珍惜缘分，相互包容"
        ],
        wealth: [
            "财运特点：正财稳定，偏财旺盛",
            "投资建议：适合稳健投资，避免投机",
            "财富积累：中年后财富增长明显",
            "理财建议：合理规划，分散投资"
        ],
        career: [
            "事业方向：适合管理、金融、教育行业",
            "发展建议：把握机遇，勇于创新",
            "职场关系：与同事相处融洽，贵人相助",
            "晋升机会：中年后有望获得重要职位"
        ],
        health: [
            "体质特点：体质偏热，易上火",
            "注意事项：注意作息规律，避免熬夜",
            "养生建议：多喝水，适当运动",
            "疾病预防：注意心血管健康"
        ],
        luckItems: [
            "幸运颜色：金色、白色",
            "幸运数字：4、9",
            "开运物品：金饰、水晶",
            "风水建议：办公室宜坐北朝南"
        ]
    };

    // 显示各个部分的内容
    Object.keys(detailedFortune).forEach(key => {
        const container = document.getElementById(key);
        detailedFortune[key].forEach(text => {
            const p = document.createElement('p');
            p.textContent = text;
            container.appendChild(p);
        });
    });
}); 