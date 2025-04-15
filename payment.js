document.addEventListener('DOMContentLoaded', function() {
    // 获取URL参数
    const params = new URLSearchParams(window.location.search);
    const fortune = params.get('fortune');

    // 支付按钮点击事件
    document.getElementById('payButton').addEventListener('click', function() {
        // 模拟支付过程
        this.disabled = true;
        this.innerHTML = '支付处理中...';

        // 模拟支付成功
        setTimeout(() => {
            // 跳转到完整结果页面
            window.location.href = `full-result.html?fortune=${encodeURIComponent(fortune)}`;
        }, 1500);
    });
}); 