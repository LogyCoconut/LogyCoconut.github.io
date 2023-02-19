import{_ as i,Y as t,Z as l,$ as n,a0 as s,a1 as a,a2 as c,I as r}from"./framework-beff9ad1.js";const d={},o=c(`<h2 id="重写历史" tabindex="-1"><a class="header-anchor" href="#重写历史" aria-hidden="true">#</a> 重写历史</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改最近一次提交的提交信息</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span>

<span class="token comment"># 修改多个提交信息（修改最近三次提交信息）</span>
<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> HEAD~3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="暂存修改「git-stash」" tabindex="-1"><a class="header-anchor" href="#暂存修改「git-stash」" aria-hidden="true">#</a> 暂存修改「git stash」</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>💡 当修改项还不确定要提交，又要将代码更新或回去改 bug，此时可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将当前所有修改项(未提交的)暂存，压栈。此时代码回到你上一次的提交，用git status可查看状态</span>
<span class="token function">git</span> stash

<span class="token comment"># 列出所有暂存项</span>
<span class="token function">git</span> stash list

<span class="token comment"># 清除所有暂存项</span>
<span class="token function">git</span> stash <span class="token function">clear</span>

<span class="token comment"># 将暂存的修改重新应用，list中仍有记录</span>
<span class="token function">git</span> stash apply

<span class="token comment"># 将暂存的修改重新应用，list中没有记录</span>
<span class="token function">git</span> stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,6),u={href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"},m={href:"https://backlog.com/git-tutorial/cn",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.phodal.com",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"​​",-1);function h(b,g){const e=r("ExternalLinkIcon");return t(),l("div",null,[o,n("ul",null,[n("li",null,[n("a",u,[s("Git - 官方文档"),a(e)])]),n("li",null,[n("a",m,[s("猴子都能懂的GIT入门"),a(e)])]),n("li",null,[n("a",p,[s("GitHub 漫游指南"),a(e)])])]),v])}const k=i(d,[["render",h],["__file","211003 Git.html.vue"]]);export{k as default};
