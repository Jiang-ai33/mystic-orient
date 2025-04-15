document.addEventListener('DOMContentLoaded', function() {
    const resultDiv = document.getElementById('analysisResult');
    const resultArea = document.getElementById('resultArea');
    const predictBtn = document.getElementById('predictBtn');
    let fortune = ''; // 存储完整的占卜结果
    let shortFortune = ''; // 存储简短的占卜结果

    predictBtn.addEventListener('click', function() {
        const userInfo = getUserInfo();
        if (userInfo) {
            // 生成占卜结果
            const fortune = generateFortune(userInfo);
            // 跳转到结果页面
            window.location.href = `result.html?fortune=${encodeURIComponent(fortune)}`;
        }
    });

    // 初始化日期和时间选择器
    function initDateTimeSelectors() {
        // 初始化年份选择（1900-2025）
        const yearSelect = document.getElementById('year');
        for (let year = 1900; year <= 2025; year++) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        }

        // 初始化月份选择
        const monthSelect = document.getElementById('month');
        for (let month = 1; month <= 12; month++) {
            const option = document.createElement('option');
            option.value = month;
            option.textContent = month;
            monthSelect.appendChild(option);
        }

        // 初始化日期选择
        const daySelect = document.getElementById('day');
        updateDays(); // 初始化日期选项

        // 当年份或月份变化时更新日期选项
        monthSelect.addEventListener('change', updateDays);

        // 初始化小时选择
        const hourSelect = document.getElementById('hour');
        for (let hour = 0; hour < 24; hour++) {
            const option = document.createElement('option');
            option.value = hour;
            option.textContent = hour.toString().padStart(2, '0');
            hourSelect.appendChild(option);
        }

        // 初始化分钟选择（00、10、20、30、40、50）
        const minuteSelect = document.getElementById('minute');
        const minuteOptions = ['00', '10', '20', '30', '40', '50'];
        minuteSelect.innerHTML = '<option value="">分</option>';
        minuteOptions.forEach(minute => {
            const option = document.createElement('option');
            option.value = minute;
            option.textContent = minute;
            minuteSelect.appendChild(option);
        });
    }

    // 更新日期选项
    function updateDays() {
        const month = document.getElementById('month').value;
        const daySelect = document.getElementById('day');
        
        // 清空现有选项
        daySelect.innerHTML = '<option value="">日</option>';
        
        if (month) {
            let daysInMonth;
            // 根据月份设置天数
            if (month === '2') {
                daysInMonth = 29; // 2月有29天
            } else if (['4', '6', '9', '11'].includes(month)) {
                daysInMonth = 30; // 4、6、9、11月有30天
            } else {
                daysInMonth = 31; // 其他月份有31天
            }
            
            // 添加日期选项
            for (let day = 1; day <= daysInMonth; day++) {
                const option = document.createElement('option');
                option.value = day;
                option.textContent = day;
                daySelect.appendChild(option);
            }
        }
    }

    // 修改获取用户信息函数
    function getUserInfo() {
        const name = document.getElementById('name').value;
        const gender = document.getElementById('gender').value;
        const year = document.getElementById('year').value;
        const month = document.getElementById('month').value;
        const day = document.getElementById('day').value;
        const hour = document.getElementById('hour').value;
        const minute = document.getElementById('minute').value;
        const location = document.getElementById('location').value;

        // 验证必填字段
        if (!name || !gender || !year || !month || !day || !hour || !minute || !location) {
            alert('请填写所有必填信息');
            return null;
        }

        // 格式化时间
        const formattedHour = hour.padStart(2, '0');
        const time = `${formattedHour}:${minute}`;

        return {
            name,
            gender,
            birthDate: `${year}-${month}-${day}`,
            birthTime: time,
            location
        };
    }

    // 调用初始化函数
    initDateTimeSelectors();

    // 生成占卜结果
    function generateFortune(userInfo) {
        // 这里可以根据用户信息生成占卜结果
        // 目前使用示例结果
        return `根据紫微斗数，${userInfo.name}的命理显示：
${userInfo.name}的${userInfo.birthDate}运势正在转变。
事业方面将出现新的机遇，需要把握时机。
感情运势正在上升，单身者有望遇到良缘。
财运方面需要谨慎投资，避免冲动消费。
健康方面要注意作息规律，保持良好状态。
如需查看完整命盘分析与年度运程详解，请点击下方按钮获取完整占卜报告。`;
    }
}); 