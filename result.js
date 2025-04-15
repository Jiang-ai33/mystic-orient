document.addEventListener('DOMContentLoaded', function() {
    // 从URL参数中获取运势分析结果
    const params = new URLSearchParams(window.location.search);
    const fortune = params.get('fortune');
    const resultDiv = document.getElementById('analysisResult');

    if (fortune) {
        const fortuneLines = fortune.split('\n');
        const visibleLines = fortuneLines.slice(0, -3); // 前几行不模糊
        const blurredLines = fortuneLines.slice(-3); // 后三行模糊
        
        // 显示不模糊的内容
        visibleLines.forEach(line => {
            if (line.trim()) {
                const p = document.createElement('p');
                p.textContent = line;
                p.className = 'text-gray-800 leading-relaxed';
                resultDiv.appendChild(p);
            }
        });
        
        // 创建模糊内容容器
        const blurContainer = document.createElement('div');
        blurContainer.className = 'relative mt-4';
        resultDiv.appendChild(blurContainer);

        // 显示模糊的内容
        blurredLines.forEach(line => {
            if (line.trim()) {
                const p = document.createElement('p');
                p.textContent = line;
                p.className = 'text-gray-800 leading-relaxed blur-text';
                blurContainer.appendChild(p);
            }
        });

        // 添加获取完整报告按钮
        const fullReportButton = document.createElement('button');
        fullReportButton.textContent = '🔮 获取完整占卜报告';
        fullReportButton.className = 'get-full-report bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors mx-auto block mt-8';
        fullReportButton.onclick = function() {
            window.location.href = `payment.html?fortune=${encodeURIComponent(fortune)}`;
        };
        resultDiv.appendChild(fullReportButton);
    } else {
        // 如果没有运势数据，显示错误信息
        resultDiv.innerHTML = '<p class="text-red-500">未能获取运势分析结果，请返回重新测算。</p>';
    }
}); 