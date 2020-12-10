---
title: Bộ lồi
date: 2018-04-06 00:00:01 +07:00
tags:
- life
layout: slide
creationdate: 2018-04-06 00:00:00 +07:00
order: 110
---
<section class="slide-top">
   <h3 class="aligncenter ">
      Tập lồi (convex sets)
   </h3>
   <ol class="text-cols">
      <li><a  href="#slide=1">Tập hợp affine và tập lồi</a></li>
      <li><a  href="#slide=3">Một số ví dụ quan trọng</a></li>
      <li><a  href="#slide=16">Các phép toán bảo toàn độ lồi</a></li>
      <li><a  href="#slide=22">Bất bình đẳng tổng quát</a></li>
      <li><a  href="#slide=28">Tách và hỗ trợ siêu phẳng</a></li>
      <li><a  href="#slide=33">Hình nón kép và bất đẳng thức tổng quát</a></li>
   </ol>
</section>
<section class="slide-top">
   <h3 class="aligncenter">Affine set</h3>
   <p><b>đường thẳng</b>: đi qua hai đểm $x_{1}, x_{2}$ </p>
   $$
   x=\theta x_{1}+(1-\theta) x_{2} \quad(\theta \in \mathbf{R})
   $$
   <img class="aligncenter" width="500" src="/note/coop/img/img01.png">
   <p><b>tập hợp affine</b>: chứa đường thẳng đi qua hai điểm phân biệt bất kỳ trong tập hợp</p>
   <p><b>ví dụ</b>: tập nghiệm của phương trình tuyến tính $\{x \mid A x=b\}$</p>
   <p>(ngược lại, mọi tập hợp affine có thể được biểu diễn dưới dạng tập nghiệm của hệ phương trình tuyến tính)</p>
</section>
<section class="slide-top">
   <h3 class="aligncenter">Tập lồi</h3>
   <p><b>đoạn thẳng</b>: giữa hai đểm $x_{1}, x_{2}$ </p>
   $$
   x=\theta x_{1}+(1-\theta) x_{2}
   $$
   <p> với $0 \leq \theta \leq 1$ </p>
   <p><b>tập lồi</b>: chứa đoạn thẳng giữa hai điểm bất kỳ trong tập hợp</p>
   $$
   x_{1}, x_{2} \in C, \quad 0 \leq \theta \leq 1 \quad \Longrightarrow \quad \theta x_{1}+(1-\theta) x_{2} \in C
   $$
   <p><b>ví dụ</b>: (một tập hợp lồi, hai tập hợp không lồi)</p>
   <img class="aligncenter" width="600" src="/note/coop/img/img02.png">
</section>
<section class="slide-top">
   <h3 class="aligncenter">Tổ hợp lồi và bao lồi</h3>
   <p><b>tổ hợp lồi (Convex combination)</b>: của $x_{1}, \ldots, x_{k}:$ là bất kỳ điểm $x$ của hình thức</p>
   $$
   x=\theta_{1} x_{1}+\theta_{2} x_{2}+\cdots+\theta_{k} x_{k}
   $$
   <p> với $\theta_{1}+\cdots+\theta_{k}=1, \theta_{i} \geq 0$ </p>
   <img class="aligncenter" width="100" src="/note/coop/img/img04.png">
   <p> $P$ thuộc tổ hợp lồi của $x_1, x_2, x_3$ còn $Q$ thì không</p>
   <p><b>bao lồi (convex hull, conv $S$)</b>:  tập hợp lồi nhỏ nhất chứa $S$</p>
   <img class="aligncenter" width="200" src="/note/coop/img/img03.png">
</section>
<section class="slide-top">
   <h3 class="aligncenter">Nón lồi</h3>
   <p><b>tổ hợp lồi không âm</b>:(conic nonnegative combination) của $x_{1} và x_{2}$ là bất kỳ điểm $x$ của hình thức </p>
   $$
   x=\theta_{1} x_{1}+\theta_{2} x_{2}
   $$
   <p> với $\theta_{1} \geq 0, \theta_{2} \geq 0$ </p>
   <img class="aligncenter" width="200" src="/note/coop/img/img05.png">
   <p><b>hình nón lồi</b>:(convex cone) tập hợp chứa tất cả các tổ hợp hình nón của các điểm trong tập hợp</p>
   <div class='grid'>
      <div class='column'>
         <img class="aligncenter" width="200" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Circular-pyramid.png">
      </div>
      <div class='column'>
         <img class="aligncenter" width="200" src="https://upload.wikimedia.org/wikipedia/commons/1/17/Polyhedral-cone.png">
      </div>
   </div>
</section>

<section class="slide-top">
   <h3 class="aligncenter">Siêu phẳng và nửa không gian</h3>
   <p><b>siêu phẳng</b>:tập hợp của hình thức $\left\{x \mid a^{T} x=b\right\}(a \neq 0)$</p>
   <p>Trong không gian Euclid $n$ chiều, siêu phẳng là khái niệm mở rộng của mặt phẳng lên thành $n-1$ chiều.
      Ví dụ, trong không gian 3 chiều, siêu phẳng chính là mặt phẳng 2 chiều. Trong không gian 2 chiều, siêu phẳng là đường thẳng 1 chiều. Siêu phẳng tách đôi không gian.
   </p>
   <img class="aligncenter" style="position: absolute;
      right: 10%;
      top: 20%;
      z-index: 90;" width="300" src="/note/coop/img/img06.png">
   <p><b>nửa không gian</b>:tập hợp của hình thức $\left\{x \mid a^{T} x \leq b\right\}(a \neq 0)$</p>
   <img class="aligncenter" style="position: absolute;
      right: 10%;
      top: 50%;
      z-index: 90;" width="300" src="/note/coop/img/img07.png">
   <p><b>hình nón lồi</b>:(convex cone) tập hợp chứa tất cả các tổ hợp hình nón của các điểm trong tập hợp</p>
   <ul>
      <li>
         $a$ là vectơ pháp tuyến
      </li>
      <li>
         siêu mặt phẳng là affine và lồi; nửa không gian lồi
      </li>
   </ul>
</section>

<section class="slide-top">
   <h3 class="aligncenter">Euclidean balls và ellipsoids</h3>
   <p><b>(Euclidean) ball</b> với tâm $x_{c}$ và bán kính $r$</p>
    $$
    B\left(x_{c}, r\right)=\left\{x \mid\left\|x-x_{c}\right\|_{2} \leq r\right\}=\left\{x_{c}+r u \mid\|u\|_{2} \leq 1\right\}
    $$ 
   <p><b>ellipsoid</b>: tập hợp có dạng</p>
    $$
    \left\{x \mid\left(x-x_{c}\right)^{T} P^{-1}\left(x-x_{c}\right) \leq 1\right\}
    $$
    <p>với $P \in \mathbf{S}_{++}^{n}($i.e., $P$ symmetric positive definite)</p>
    <p>đại diện khác: $\left\{x_{c}+A u \mid\|u\|_{2} \leq 1\right\}$  với A square và nonsingular</p>
    <p><b>Tham khảo:</b></p>
    <ul>
        <li><a  href="http://slpl.cse.nsysu.edu.tw/chiaping/la/pdm.pdf">http://slpl.cse.nsysu.edu.tw/chiaping/la/pdm.pdf</a></li>
      <li><a  href="https://math.stackexchange.com/questions/1402910/why-is-a-positive-definite-matrix-needed-in-the-ellipsoid-matrix-representation">math sthackexchange</a></li>
    </ul>
</section>

<section class="slide-top">
   <h3 class="aligncenter">Norm balls và norm cones</h3>
   <p><b>norm</b>: một function $\|\cdot\|$ thỏa mãn</p>
    <ul>
        <li>$\|x\| \geq 0 ;\|x\|=0$ nếu và chỉ nếu $x=0$</li>
        <li>$\|t x\|=|t|\|x\|$ với $t \in \mathbf{R}$</li>
        <li>$\|x+y\| \leq\|x\|+\|y\|$</li>
    </ul>
    <p>ký hiệu: $\|\cdot\|$ là chung chung (không xác định) của norm; $\|\cdot\|_{\text {symb }}$ là trường hợp cụ thể của norm</p>
    <p><b>norm ball</b> với tâm $x_{c}$ và bán kính $r:\left\{x \mid\left\|x-x_{c}\right\| \leq r\right\}$</p>
    <p><b>norm cone</b>: $\{(x, t) \mid\|x\| \leq t\}$</p>
</section>


<section class="slide-top">
   <h3 class="aligncenter">Khối đa diện</h3>
   <p>tập nghiệm của nhiều bất phương trình tuyến tính và phương trình bằng nhau (siêu phẳng)</p>
    $$
    A x \preceq b, \quad C x=d
    $$
    <p>$\left(A \in \mathbf{R}^{m \times n}, C \in \mathbf{R}^{p \times n}, \preceq\right.$ là bất bình đẳng từng thành phần$)$</p>
    <img class="aligncenter" width="400" src="/note/coop/img/img08.png">
    <p>đa diện là giao của một số hữu hạn các nửa không gian và siêu mặt phẳng</p>
</section>

<section class="slide-top">
   <h3 class="aligncenter">Positive semidefinite cone</h3>
   <p><b>ký hiệu:</b></p>
    <ul>
        <li>$\mathbf{S}^{n}$ tập hợp $n \times n$ matrix đối xứng</li>
        <li>$\mathbf{S}_{+}^{n}=\left\{X \in \mathbf{S}^{n} \mid X \succeq 0\right\}$ : positive semidefinite $n \times n$ matrices
        $$
        X \in \mathbf{S}_{+}^{n} \Longleftrightarrow z^{T} X z \geq 0 \text { for all } z
        $$
        $\mathbf{S}_{+}^{n}$ là một hình nón lồi
        </li>
        <li>$\mathbf{S}_{++}^{n}=\left\{X \in \mathbf{S}^{n} \mid X \succ 0\right\}$ : positive definite $n \times n$ matrices</li>
    </ul>
    <div class="grid">
        <div class="column">
            <p><b>ví dụ</b>: $X=\left[\begin{array}{ll}x & y \\ y & z\end{array}\right] \in \mathbf{S}_{+}^{2} \Longleftrightarrow x \geq 0, \quad z \geq 0, \quad x z \geq y^{2}$</p>
        </div>
        <div class="column slide-top content-left">
            <img  width="400" src="/note/coop/img/img09.png">
        </div>
    </div>

</section>

<section class="slide-top">
   <h3 class="aligncenter">Các phép toán bảo toàn độ lồi</h3>
   <p>các phương pháp thực tế để xác định độ lồi của một tập hợp $C$</p>
   <ol>
    <li>áp dụng định nghĩa:
        $$
        x_{1}, x_{2} \in C, \quad 0 \leq \theta \leq 1 \quad \Longrightarrow \quad \theta x_{1}+(1-\theta) x_{2} \in C
        $$
    </li>
    <li>
    chỉ ra rằng $C$ nhận được từ các tập lồi đơn giản (siêu phẳng, nửa không gian, norm balls,...) bằng các phép toán bảo toàn độ lồi<br>
    <ul>
    <li>intersection</li>
    <li>affine functions</li>
    <li>perspective function</li>
    <li>linear-fractional functions</li>
    </ul>
    </li>
   </ol>
</section>

<section class="slide-top">
   <h3 class="aligncenter">Intersection</h3>
   <p>giao của (bất kỳ số lượng) tập lồi là lồi</p>
</section>

<section class="slide-top">
   <h3 class="aligncenter">Affine function</h3>
   <p>giả sử $f: \mathbf{R}^{n} \rightarrow \mathbf{R}^{m}$ là affine $\left(f(x)=A x+b\right.$ với $\left.A \in \mathbf{R}^{m \times n}, b \in \mathbf{R}^{m}\right)$ khi đó</p>
   <ul>
   <li>ảnh của một tập lồi dưới $f$ là tập lồi
    $$
    S \subseteq \mathbf{R}^{n} \text { convex } \Longrightarrow f(S)=\{f(x) \mid x \in S\} \text { convex }
    $$
   </li>
   <li>ảnh nghịch đảo ảnh $f^{-1}(C)$ của một tập lồi dưới $f$ là  lồi
    $$
    C \subseteq \mathbf{R}^{m} \text { convex } \Longrightarrow f^{-1}(C)=\left\{x \in \mathbf{R}^{n} \mid f(x) \in C\right\} \text { convex }
    $$
    </li>
    </ul>
    <p><b>ví dụ</b>: scaling, translation, projection</p>
</section>

<section class="slide-top">
   <h3 class="aligncenter">Perspective và hàm phân số tuyến tính</h3>
   <p><b>perspective function</b> $P: \mathbf{R}^{n+1} \rightarrow \mathbf{R}^{n}$
    $$
    P(x, t)=x / t, \quad \operatorname{dom} P=\{(x, t) \mid t>0\}
    $$
   </p>
   <p>ảnh và ảnh nghịch đảo của tập lồi dưới perspective là tập lồi</p>
   <p><b>hàm phân số tuyến tính</b>$f: \mathbf{R}^{n} \rightarrow \mathbf{R}^{m}$
    $$
    f(x)=\frac{A x+b}{c^{T} x+d}, \quad \operatorname{dom} f=\left\{x \mid c^{T} x+d>0\right\}
    $$
   </p>
   <p>ảnh và ảnh nghịch đảo của tập lồi theo hàm phân số tuyến tính là lồi</p>
</section>

<section class="slide-top">
   <h3 class="aligncenter">Bất bình đẳng tổng quát</h3>
   <p>giao của (bất kỳ số lượng) tập lồi là lồi</p>
</section>

<section class="slide-top">
   <h3 class="aligncenter">Intersection</h3>
   <p>giao của (bất kỳ số lượng) tập lồi là lồi</p>
</section>

<section class="slide-top">
   <h3 class="aligncenter">Intersection</h3>
   <p>giao của (bất kỳ số lượng) tập lồi là lồi</p>
</section>