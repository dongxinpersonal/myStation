// assets/js/main.js 基础模板
document.addEventListener("DOMContentLoaded", function () {
  // 示例1：页面访问时间统计
  console.log("页面加载完成时间:", new Date().toLocaleString());

  // 示例2：导航栏当前页高亮
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-list a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // 示例3：返回顶部按钮
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑";
  backToTop.className = "back-to-top";
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0 }));
  document.body.appendChild(backToTop);
});
// 进阶功能建议
(() => {
  // 1. 访问计数器（使用localStorage）
  if (!localStorage.getItem("visitCount")) {
    localStorage.setItem("visitCount", 0);
  }
  let count = parseInt(localStorage.getItem("visitCount")) + 1;
  localStorage.setItem("visitCount", count);
  console.log(`这是您第 ${count} 次访问`);

  // 2. 外部链接特殊处理
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.addEventListener("click", () => {
      console.log(`已打开外部链接: ${link.href}`);
    });
  });

  // 3. 代码块复制功能（如果有代码示例）
  document.querySelectorAll("pre code").forEach((codeBlock) => {
    const copyBtn = document.createElement("button");
    copyBtn.textContent = "复制";
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(codeBlock.textContent);
      copyBtn.textContent = "已复制!";
      setTimeout(() => (copyBtn.textContent = "复制"), 2000);
    };
    codeBlock.parentNode.insertBefore(copyBtn, codeBlock);
  });
})();
