---
title: "3 Bước thiết kế: Big Data System"
layout: post
tags:
- gcp
- solution architect 
active: "cs"
order: 11
libjs: 
published: true

---
<style>

 body {
	 box-sizing: border-box;
	 background: #f0f0f0;
}
 .card-grid {
	 --auto-grid-min-size: 28rem;
	 --auto-grid-gap-vertical: 2rem;
}
 .card {
	 padding: 1rem;
	 border-radius: 0.5rem;
	 box-shadow: 0 0.5rem 1.5rem -0.5rem rgba(0, 0, 0, 0.4);
	 background: #fff;
	 display: flex;
	 flex-direction: column;
   margin-top: 2rem;
}
 .card__content {
	 --sidebar-threshold: 75%;
	 --sidebar-gap: 2rem;
	 --sidebar-gap-vertical: 0.75rem;
	 padding-bottom: 1rem;
}
 .card__body {
	 --flow-space: 1rem;
}
 .card__headline {
	 --cluster-justification: space-between;
	 --cluster-gap-vertical: 0.25rem;
}
 .card__headline &gt;
 * {
	 align-items: center;
}
 .card__description {
	 --flow-space: 0.5rem;
	 color: #555;
}
b{
color: #000;
}
 .card__footer {
	 --cluster-justification: space-between;
	 font-size: 0.875rem;
	 color: #999;
	 border-top: 1px solid #ccc;
	 padding-top: 0.75rem;
	 margin-top: auto;
}
 .avatar {
	 overflow: hidden;
}
 .avatar img {
	 display: block;
	 width: 7.5rem;
	 height: 7.5rem;
	 border-radius: 50%;
	 margin-left: auto;
	 margin-right: auto;
	 object-fit: cover;
}
 .book {
	 width: 6rem;
	 height: 7rem;
}
 .book img {
	 width: 100%;
	 height: 100%;
	 object-fit: cover;
	 filter: grayscale(1);
}
 h2, h3 {
	 line-height: 1.3;
}
 h2 {
	 font-size: 1.375rem;
}
 h3 {
	 font-size: 1rem;
}

</style>

<div class="card-grid | auto-grid">
  <div class="card">
    <div class="card__content | sidebar-left">
      <div>
        <div class="avatar">
        </div>
        <div class="card__body | flow">
          <div class="card__headline | cluster">
            <div>
              <h2>Pure Non-relational</h2>
              <h3>Tham khảo cho Data Analytics</h3>
            </div>
          </div>
          <p class="card__description">
             Kiến trúc tham chiếu này không dựa trên các nguyên tắc mô hình quan hệ. Thường thì nó được xây dựng trên bộ lưu trữ NoSQL, Hadoop, Công cụ tìm kiếm và có hiệu quả cao để xử lý dữ liệu bán và phi cấu trúc.
          </p>
            <img src="/assets/pictures/big-data/big-data-01.png" />
          <h3>Các hệ quả:</h3>
          <p class="card__description">
            <b>★★ Ad-hoc analysis</b> - hỗ trợ truy vấn thời gian thực đặc biệt khó hơn trong kiến ​​trúc quan hệ<br/>
            <b>★★ ½ Phân tích thời gian thực</b> - thời gian thực với xử lý từng lần<br/>
            <b>★★★ Xử lý dữ liệu không có cấu trúc</b> - hỗ trợ dễ dàng lưu trữ và xử lý dữ liệu bán và phi cấu trúc<br/>
            <b>★★★ Khả năng mở rộng</b> - có thể mở rộng quy mô giữ petabyte<br/>
            <b>★★★ Tiết kiệm chi phí</b> - giảm thiểu chi phí do công nghệ nguồn mở<br/>
          </p>
          <h3>Ví dụ triển khai</h3>
          <p class="card__description">
            Data Discovery, Data Lake, Operational Intelligence, Business Reporting
          </p>
          <div class="cluster">
          </div>

        </div>
      </div>
    </div>
    <div class="card__footer | cluster">
    </div>
  </div>


  <div class="card">
    <div class="card__content | sidebar-left">
      <div>
        <div class="avatar">
        </div>
        <div class="card__body | flow">
          <div class="card__headline | cluster">
            <div>
              <h2>Data Refinery (Hybrid)</h2>
              <h3>Tham khảo cho Data Analytics</h3>
            </div>
          </div>
          <p class="card__description">
             Kiến trúc tham chiếu này là sự kết hợp của các kỹ thuật quan hệ và không quan hệ. Phần không quan hệ hoạt động như một ETL để tinh chỉnh dữ liệu bán và không có cấu trúc và tải nó đã được làm sạch vào kho dữ liệu quan hệ để phân tích thêm.
          </p>
          <img src="/assets/pictures/big-data/big-data-03.png" />
          <h3>Các hệ quả:</h3>
          <p class="card__description">
            <b>★★★ Ad-hoc analysis</b> - hỗ trợ các truy vấn đọc thời gian thực đặc biệt phức tạp<br/>
            <b>★★ Phân tích thời gian thực</b> - thời gian gần thực với kỹ thuật phân lô vi mô<br/>
            <b>★★ Xử lý dữ liệu không có cấu trúc</b> - hỗ trợ nhập và truy vấn dữ liệu có cấu trúc bán nguyệt như JSON / XML<br/>
            <b>★★ Khả năng mở rộng</b> - có thể chạy terabyte với MPP và khả năng phân cụm<br/>
            <b>★ Tiết kiệm chi phí</b> - Chi phí giấy phép MPP RDBMS khá đắt<br/>
          </p>
          <h3>Ví dụ triển khai</h3>
          <p class="card__description">
            Business Reporting, Enterprise Data Warehousing, Data Discovery
          </p>
          <div class="cluster">
          </div>
        </div>
      </div>
    </div>
    <div class="card__footer | cluster">
    </div>
  </div>



  <div class="card">
    <div class="card__content | sidebar-left">
      <div>
        <div class="avatar">
        </div>
        <div class="card__body | flow">
          <div class="card__headline | cluster">
            <div>
              <h2>Lambda Architecture (Hybrid)</h2>
              <h3>Tham khảo cho Data Analytics</h3>
            </div>
          </div>
          <p class="card__description">
            Kiến trúc tham chiếu này cho phép phân tích lịch sử và hoạt động theo thời gian thực trong cùng một giải pháp. Trong khi batch layer dựa trên các kỹ thuật không quan hệ (thường là Hadoop), thì speed Layer dựa trên kỹ thuật phân luồng để hỗ trợ các yêu cầu phân tích thời gian thực nghiêm ngặt.
          </p>
          <img src="/assets/pictures/big-data/big-data-03.png" />
          <h3>Các hệ quả:</h3>
          <p class="card__description">
            <b>★★ ½ Ad-hoc analysis</b> - Hỗ trợ truy vấn thời gian thực đặc biệt khó hơn trong kiến ​​trúc quan hệ<br/>
            <b>★★★ Phân tích thời gian thực</b> - cách tiếp cận phát trực tuyến với độ trễ dữ liệu thấp<br/>
            <b>★★★ Xử lý dữ liệu không có cấu trúc</b> - hỗ trợ xử lý dữ liệu bán và dữ liệu phi cấu trúc<br/>
            <b>★★★ Khả năng mở rộng</b> - có thể mở rộng quy mô giữ petabyte<br/>
            <b>★★★ Tiết kiệm chi phí</b> - giảm thiểu chi phí do công nghệ nguồn mở<br/>
          </p>
          <h3>Ví dụ triển khai</h3>
          <p class="card__description">
            Real-time Intelligence, Data Discovery, Business Reporting
          </p>
          <div class="cluster">
          </div>
        </div>
      </div>
    </div>
    <div class="card__footer | cluster">
    </div>
  </div>




  <div class="card">
    <div class="card__content | sidebar-left">
      <div>
        <div class="avatar">
        </div>
        <div class="card__body | flow">
          <div class="card__headline | cluster">
            <div>
              <h2>Pure Non-relational</h2>
              <h3>Tham khảo cho Data Analytics</h3>
            </div>
          </div>
          <p class="card__description">
            Kiến trúc tham chiếu này là sự kết hợp của các kỹ thuật quan hệ và không quan hệ. Phần không quan hệ hoạt động như một ETL để tinh chỉnh dữ liệu bán và không có cấu trúc và tải nó đã được làm sạch vào kho dữ liệu quan hệ để phân tích thêm.
          </p>
          <img src="/assets/pictures/big-data/big-data-04.png" />
          <h3>Các hệ quả:</h3>
          <p class="card__description">
            <b>★★★ Ad-hoc analysis</b> - hỗ trợ các truy vấn đọc thời gian thực đặc biệt phức tạp<br/>
            <b>★ Phân tích thời gian thực</b> - độ trễ dữ liệu cao do xử lý hàng loạt<br/>
            <b>★★★ Xử lý dữ liệu không có cấu trúc</b> - hỗ trợ dễ dàng lưu trữ và xử lý dữ liệu bán và phi cấu trúc<br/>
            <b>★★★ Khả năng mở rộng</b> - có thể chạy terabyte với MPP và khả năng phân cụm<br/>
            <b>★★★ Tiết kiệm chi phí</b> - chi phí giấy phép MPP RDBMS khá đắt<br/>
          </p>
          <h3>Ví dụ triển khai</h3>
          <p class="card__description">
            Data Discovery, Business Reporting, Enterprise Data Warehousing
          </p>
          <div class="cluster">
          </div>

        </div>
      </div>
    </div>
    <div class="card__footer | cluster">
    </div>
  </div>




  <div class="card">
    <div class="card__content | sidebar-left">
      <div>
        <div class="avatar">
        </div>
        <div class="card__body | flow">
          <div class="card__headline | cluster">
            <div>
              <h2>Pure Non-relational</h2>
              <h3>Tham khảo cho Data Analytics</h3>
            </div>
          </div>
          <p class="card__description">
             Kiến trúc tham chiếu này không dựa trên các nguyên tắc mô hình quan hệ. Thường thì nó được xây dựng trên bộ lưu trữ NoSQL, Hadoop, Công cụ tìm kiếm và có hiệu quả cao để xử lý dữ liệu bán và phi cấu trúc.
          </p>
          <img src="https://cdn.mathpix.com/snip/images/OrydOegUYcO8JxqXNy0JR9SLaVpaO6PDDKTknbDVhu8.original.fullsize.png" />
          <h3>Các hệ quả:</h3>
          <p class="card__description">
            <b>★★ Ad-hoc analysis</b> - hỗ trợ truy vấn thời gian thực đặc biệt khó hơn trong kiến ​​trúc quan hệ<br/>
            <b>★★ ½ Phân tích thời gian thực</b> - thời gian thực với xử lý từng lần<br/>
            <b>★★★ Xử lý dữ liệu không có cấu trúc</b> - hỗ trợ dễ dàng lưu trữ và xử lý dữ liệu bán và phi cấu trúc<br/>
            <b>★★★ Khả năng mở rộng</b> - có thể mở rộng quy mô giữ petabyte<br/>
            <b>★★★ Tiết kiệm chi phí</b> - giảm thiểu chi phí do công nghệ nguồn mở<br/>
          </p>
          <h3>Ví dụ triển khai</h3>
          <p class="card__description">
            Data Discovery, Data Lake, Operational Intelligence, Business Reporting
          </p>
          <div class="cluster">
          </div>

        </div>
      </div>
    </div>
    <div class="card__footer | cluster">
    </div>
  </div>



</div>