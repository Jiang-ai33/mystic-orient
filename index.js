document.addEventListener('DOMContentLoaded', function() {
    const resultDiv = document.getElementById('analysisResult');
    const resultArea = document.getElementById('resultArea');
    const predictBtn = document.getElementById('predictBtn');
    let fortune = ''; // 存储完整的占卜结果
    let shortFortune = ''; // 存储简短的占卜结果

    predictBtn.addEventListener('click', function() {
        // 显示结果区域
        resultArea.classList.remove('hidden');
        
        // 清空之前的结果
        resultDiv.innerHTML = '';
        
        // 模拟占卜过程
        this.disabled = true;
        this.innerHTML = '占卜中...';

        // 模拟API调用
        setTimeout(() => {
            // 生成占卜结果
            fortune = '运势分析：\n\n你的运势显示，近期整体运势不错。各方面都会有不错的发展，但也要注意把握时机。保持积极的心态，勇敢面对挑战。\n\n建议：保持乐观的心态，多与人交流，把握机会。';
            shortFortune = '运势：近期整体运势不错，保持积极心态。';

            // 显示简短的占卜结果
            const p = document.createElement('p');
            p.textContent = shortFortune;
            p.className = 'text-gray-800 leading-relaxed';
            resultDiv.appendChild(p);

            // 添加查看完整结果的按钮
            const fullResultButton = document.createElement('button');
            fullResultButton.textContent = '查看完整结果';
            fullResultButton.className = 'mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors';
            fullResultButton.onclick = function() {
                // 跳转到支付页面
                window.location.href = `payment.html?fortune=${encodeURIComponent(shortFortune)}&originalFortune=${encodeURIComponent(fortune)}`;
            };
            resultDiv.appendChild(fullResultButton);

            // 恢复按钮状态
            this.disabled = false;
            this.innerHTML = '🔮 马上测算・查看运势';
        }, 1500);
    });
}); 