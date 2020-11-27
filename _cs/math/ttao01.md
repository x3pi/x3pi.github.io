---
title: "Measure Theory"
layout: post2
tags:
- Terence Tao
- Math
active: "cs"
order: 4
libjs: 
published: true
hidden:

---
<script>
   
var data1 = 
{"nodeData":{"id":"root","topic":"Measure theory","root":true,"children":[{"topic":"Prologue","id":"5ab1a01895dc9344","direction":0,"expanded":true,"children":[{"topic":"Elementary measure","id":"5ab1ce1a15443153","expanded":true,"children":[{"topic":"Intervals, boxes, elementary sets","id":"5ab1d3a11c7525b9","show":"<b>Definition 1.1.1</b><br>\nAn interval is a subset of $\\mathbf{R}$ of the form: $[a, b],(a, b],[a, b),$ or $(a, b)$<br>\nLength: $|I|:=b-a$<br>\nA box in $\\mathbf{R}^{d}$ is a Cartesian product $B:=I_{1} \\times \\ldots \\times I_{d}$ of $d$ intervals $I_{1}, \\ldots, I_{d}$<br>\nThe volume $|B|$ of such a box $B$ is defined as $|B|:=\\left|I_{1}\\right| \\times \\ldots \\times\\left|I_{d}\\right|$<br>\nAn elementary set is any subset of $\\mathbf{R}^{d}$ which is the union of a finite number of boxes"},{"topic":"Measure of an elementary set","id":"5ab3104c08a4d123","show":"<b>Lemma 1.1.2</b><br>\nLet $E \\subset \\mathbf{R}^{d}$ be an elementary set.<br>\n(i) $E$ can be expressed as the finite union of disjoint boxes.<br>\n(ii) If $E$ is partitioned as the finite union $B_{1} \\cup \\ldots \\cup B_{k}$ of disjoint boxes,<br>\nthen the quantity $m(E):=\\left|B_{1}\\right|+\\ldots+\\left|B_{k}\\right|$ is independent of the partition."},{"topic":"Fundamental properties","id":"5ab435b86273f66d","show":"$E_{1}, \\ldots, E_{k}$ are disjoint elementary sets<br>\n$m\\left(E_{1} \\cup \\ldots \\cup E_{k}\\right)=m\\left(E_{1}\\right)+\\ldots+m\\left(E_{k}\\right)$<br><br>\n$m(\\emptyset)=0$<br><br>\n$m(B)=|B|$<br><br>\n$E \\subset F \\Rightarrow \\lambda(E) \\leq \\lambda(F)$<br><br>\n$m(E \\cup F) \\leq m(E)+m(F)$<br><br>\n$m\\left(E_{1} \\cup \\ldots \\cup E_{k}\\right) \\leq m\\left(E_{1}\\right)+\\ldots+m\\left(E_{k}\\right)$<br><br>\nTranslation invariance<br>\n$m(E+x)=m(E)$<br>\nfor all elementary sets $E$ and $x \\in \\mathbf{R}^{d}$"}]},{"topic":"Jordan measure","id":"5ab50b98d50f587f","expanded":true,"children":[{"topic":"Definition","id":"5ab55a3c4993db1d","show":"Let $E \\subset \\mathbf{R}^{d}$ be a bounded set.<br><br>\n\nThe Jordan inner measure of $E$ is defined as:<br>\n$m_{*,(J)}(E):=\\underset{A \\subset E, A \\text { elementary }}{\\sup } m(A)$<br><br>\n\nThe Jordan outer measure of $E$ is defined as:<br>\n$m^{*,(J)}(E):=\\underset{B \\subset E, B \\text { elementary }}{\\inf} m(B)$<br><br>\n\nIf $m_{*,(J)}(E)=m^{*,(J)}(E),$<br>\nthen we say that $E$ is Jordan measurable,<br>\nand call $m(E):=m_{*,(J)}(E)=m^{*,(J)}(E)$ the Jordan measure of $E$.<br>\nAs before, we write $m(E)$ as $m^{d}(E)$<br>\nwhen we wish to emphasise the dimension $d$."},{"topic":"Lemma","id":"5ab94bb5f61c9135","show":"Let $E, F$ be Jordan measurable.<br>\n$\\bullet$ $E \\cup F, E \\backslash F, E \\cap F$ are Jordan measurable.<br>\n$\\bullet$ $\\lambda(E \\cup F) \\leq \\lambda(E)+\\lambda(F)$<br>\n$\\bullet$ If $E$ and $F$ are disjoint, then $\\lambda(E \\cup F)=\\lambda(E)+\\lambda(F)$<br>\n$\\bullet$ If $E \\subset F,$ then $\\lambda(E) \\leq \\lambda(F)$<br>\n$\\bullet$ $E+x$ is Jordan measurable and $\\lambda(E+x)=\\lambda(E)$<br>"}]},{"topic":"Riemann integral","id":"5aba6f3961f9aedc","expanded":true,"children":[],"show":"$f:[a, b] \\rightarrow \\mathbf{R}$<br>\nA tagged partition $\\mathcal{P}=\\left(\\left(x_{0}, x_{1}, \\ldots, x_{n}\\right),\\left(x_{1}^{*}, \\ldots, x_{n}^{*}\\right)\\right)$ of $[a, b]$ with<br>\n$a=x_{0} < x_{1} < \\ldots < x_{n}=b$ and<br>\n$x_{i-1} \\leq x_{i}^{*} \\leq x_{i}$ for each $i=1, \\ldots, n$<br>\nWe abbreviate $x_{i}-x_{i-1}$ as $\\delta x_{i}$<br>\nThe quantity $\\Delta ( \\mathcal{P} ) :=\\sup _{1 < i < n} \\delta x_{i}$<br>\nThe Riemann sum $\\mathcal{R}(f, \\mathcal{P})$ of $f$ with respect to the tagged partition $\\mathcal{P}$ is defined as<br>\n$\\mathcal{R}(f, \\mathcal{P}):=\\sum_{i=1}^{n} f\\left(x_{i}^{*}\\right) \\delta x_{i}$<br>\n<br>\nWe say that $f$ is Riemann integrable on $[a, b]$ if there exists a real number<br>\n$\\int_{a}^{b} f(x) d x=\\lim _{\\Delta(\\mathcal{P}) \\rightarrow 0} \\mathcal{R}(f, \\mathcal{P})$<br>\nby which we mean that for every $\\varepsilon>0$ there exists $\\delta>0$ such that<br>\n$\\left|\\mathcal{R}(f, \\mathcal{P})-\\int_{a}^{b} f(x) d x\\right| \\leq \\varepsilon$<br>\nfor every tagged partition $\\mathcal{P}$ with $\\Delta(\\mathcal{P}) \\leq \\delta$"},{"topic":"Darboux integral","id":"5ad8c25f582f51f6","show":"$f:[a, b] \\rightarrow \\mathbf{R}$<br>\nThe lower Darboux integral $\\int_{a}^{b} f(x) d x$ of $f$ on $[a, b]$ is defined as<br>\n$$\\underline{\\int_{a}^{b}} f(x) d x:=\\sup _{g \\leq f, \\text { piecewise constant }} p.c.\\int_{a}^{b} g(x) d x$$<br>\nThe upper Darboux integral:<br>\n$$\\overline{\\int_{a}^{b}} f(x) d x:=\\inf _{h \\geq f, \\text { piecewise constant }} p.c. \\int_{a}^{b} h(x) d x$$<br>\nIf these two quantities are equal, we say that $f$ is Darboux integrable,<br>\nand refer to this quantity as the Darboux integral of $f$ on $[a, b]$.\n<br>\n<br>\nReflection identity\n$$\\overline{\\int_{a}^{b}}-f(x) d x=-\\underline{\\int_{a}^{b}} f(x) d x$$"}]},{"topic":"Lebesgue measure","id":"5ada0d18c9f8b466","direction":1,"expanded":true,"children":[{"topic":"Lebesgue measurability","id":"5c25b98df2c23e31","show":"A set $E \\subset \\mathbf{R}^{d}$ is said to be Lebesgue measurable if, for every <br> $\\varepsilon>0,$ there exists an  open set $U \\subset \\mathbf{R}^{d}$ containing<br>  $E$ such that $m^{*}(U \\backslash<br> E) \\leq \\varepsilon .$ If $E$ <br> is Lebesgue measurable, we refer to $m(E):=m^{*}(E)$ as the Lebesgue measure of<br>  $E$ (note that this quantity may be equal to $+\\infty$ ). We also write <br> $m(E)$ as $m^{d}(E)$ when we wish to emphasise the dimension $d$."},{"topic":"Finite additivity<br> for separated sets","id":"5c26c00f0915d246","show":"Let $E, F \\subset \\mathbf{R}^{d}$ be such that <br> $\\operatorname{dist}(E, F)>0,$ where\n\\[\n\\operatorname{dist}(E, F):=\\inf \\{|x-y|: x \\in E, y \\in F\\}\n\\]\nis the distance between $E$ and $F .$ <br>Then $m^{*}(E \\cup F)=m^{*}(E)+$ $m^{*}(F)$"},{"topic":"Outer measure <br>of elementary sets","id":"5c26dde57612b990","show":"Let $E$ be an elementary set. Then the Lebesgue <br> outer measure $m^{*}(E)$ of $E$ is equal to <br> the elementary measure $m(E)$ of $E: m^{*}(E)=m(E)$."},{"topic":"Outer measure of countable<br> unions of almost disjoint\nboxes","id":"5c27183f73a9bc59","show":"Let $E=\\bigcup_{n=1}^{\\infty} B_{n}$ be a countable union of almost disjoint boxes <br> $B_{1}, B_{2}, \\ldots$ Then\n\\[\nm^{*}(E)=\\sum_{n=1}^{\\infty}\\left|B_{n}\\right|\n\\]\nThus, for instance, $\\mathbf{R}^{d}$ itself has an infinite outer measure."},{"topic":"Outer regularity","id":"5c27a3cd7f0159d5","show":"Let $E \\subset \\mathbf{R}^{d}$ be an arbitrary <br> set. Then one has\n\\[\nm^{*}(E)=\\inf _{E \\subset U, U \\text { open }} {m^{*}}(U)\n\\]"},{"topic":"Existence of Lebesgue <br> measurable sets","id":"5c28b9540977e0cb"},{"topic":"Lemma (The measure axioms)","id":"5c29873408af3e1d","show":"$\\bullet$ $($Empty set$) m(\\emptyset)=0$<br>\n$\\bullet$ (Countable additivity) If $E_{1}, E_{2}, \\ldots \\subset \\mathbf{R}^{d}$ is a <br> countable sequence of disjoint Lebesgue <br> measurable sets, then $m\\left(\\bigcup_{n=1}^{\\infty} E_{n}\\right)=$ $\\sum_{n=1}^{\\infty} m\\left(E_{n}\\right)$"}],"show":"undefined"},{"topic":"The Lebesgue integral","id":"5c29c8df003340c3","direction":0}],"expanded":true,"tags":[],"show":"  "},"linkData":{}}
</script>


