// 表单验证和提交

document.getElementById('appointment-form').addEventListener('submit', function(e) {

    e.preventDefault();

    

    const name = this.querySelector('input[type="text"]').value.trim();

    const phone = this.querySelector('input[type="tel"]').value.trim();

    

    if (!name || !phone) {

        alert('请填写姓名和联系电话');

        return;

    }

    

    // 模拟提交

    alert('预约提交成功！我们将尽快与您联系。');

    this.reset();

});



// 平滑滚动

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        

        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            window.scrollTo({

                top: targetElement.offsetTop - 80,

                behavior: 'smooth'

            });

        }

    });

});



// 导航栏滚动效果

window.addEventListener('scroll', function() {

    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 100) {

        navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';

    } else {

        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';

    }

});

文件4: _config.yml (GitHub Pages配置)
title: 美家装饰展示网站

description: 专业室内设计与装修服务

baseurl: ""

url: "https://zhengshf.github.io/meijia-decor"



# 构建设置

markdown: kramdown

highlighter: rouge



# 主题设置

theme: jekyll-theme-minimal



# 插件

plugins:

  - jekyll-feed

  - jekyll-seo-tag

  - jekyll-sitemap



# SEO设置

author:

  name: 美家装饰

  email: contact@meijia-decor.com



social:

  name: 美家装饰

  links:

    - https://github.com/zhengshf

2. 提交文件：
上传完4个文件后，点击 "Commit changes"。
3. 配置GitHub Pages：
访问: https://github.com/zhengshf/meijia-decor/settings/pages
Source: 选择 "GitHub Actions"
保存
4. 等待2-3分钟：
访问: https://zhengshf.github.io/meijia-decor/
🚀 现在立即操作
请你先上传这4个文件，然后配置GitHub Pages。
上传完成后告诉我，我帮你检查网站状态！
