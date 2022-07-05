---
title: "Big Data Solution Architect"
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
          <img src="/assets/pictures/big-data/big-data-02.png" />
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
              <h2>Data Refinery (Hybrid)</h2>
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
            <b>★★ Khả năng mở rộng</b> - có thể chạy terabyte với MPP và khả năng phân cụm<br/>
            <b>★ Tiết kiệm chi phí</b> - chi phí giấy phép MPP RDBMS khá đắt<br/>
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
              <h2>Data Collector</h2>
              <h3>Family/Integration/Messaging</h3>
            </div>
          </div>
          <p class="card__description">
            Mẫu này nhằm mục đích thu thập, tổng hợp và chuyển dữ liệu nhật ký để sử dụng sau này. Thông thường, các triển khai Data Collector cung cấp các plug-in sẵn có để tích hợp với các điểm đến và nguồn sự kiện phổ biến.
          </p>
          <img src="/assets/pictures/big-data/big-data-05.png" />
          <h3>Các hệ quả:</h3>
          <p class="card__description">
            <b>★★ Hiệu suất</b> - có thể xử lý lượng lớn dữ liệu trong thời gian thực<br/>
            <b>★★★ Khả năng tương thích</b> - có thể được cắm với các nguồn và điểm đến sự kiện phổ biến<br/>
            <b>★★ Tính linh hoạt</b> - áp đặt các giới hạn trong các tình huống sử dụng so với mẫu Nhà môi giới tin nhắn<br/>
          </p>
          <h3>Ví dụ triển khai</h3>
          <p class="card__description">
            Apache Flume, Logstash, Fluentd, Scribe
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
              <h2>Distributed Message Broker</h2>
              <h3>Family/Integration/Messaging</h3>
            </div>
          </div>
          <p class="card__description">
            Mô hình này là hậu duệ của Message Broker truyền thống hơn, nhưng cung cấp khả năng mở rộng cao bằng cách phân phối thông báo trên nhiều nút. Hầu hết các triển khai đều cung cấp các chế độ Pub / Sub và Peer-to-Peer.
          </p>
          <img src="/assets/pictures/big-data/big-data-06.png" />
          <h3>Các hệ quả:</h3>
          <p class="card__description">
            <b>★★★ Hiệu suất</b> - có thể xử lý thông lượng cao với độ trễ thấp<br/>
            <b>★ Khả năng tương thích</b> - trong hầu hết các trường hợp, yêu cầu viết mã tùy chỉnh để được cắm với nhà sản xuất sự kiện và người tiêu dùng<br/>
            <b>★★★ Tính linh hoạt</b> - có thể được sử dụng cho nhiều mục đích - định tuyến, chuyển đổi, tổng hợp, pub-sub, v.v<br/>
          </p>
          <h3>Ví dụ triển khai</h3>
          <p class="card__description">
            RabbitMQ, Apache Kafka, Apache ActiveMQ, Amazon SQS
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
              <h2>Column-Family</h2>
              <h3>Family/Data Storage/NoSQL Database</h3>
            </div>
          </div>
          <p class="card__description">
            Mở rộng cơ sở dữ liệu Khóa-Giá trị bằng cách lưu trữ các bộ sưu tập không được xác định chính xác của một hoặc nhiều cặp khóa-giá trị khớp với một bản ghi. Có thể được trình bày dưới dạng mảng hai chiều, theo đó mỗi khóa có một hoặc nhiều cặp khóa-giá trị gắn liền với nó.
          </p>
          <img src="/assets/pictures/big-data/big-data-07.png" />
          <h3>Các hệ quả:</h3>
          <p class="card__description">
            <b>★★★ Hiệu suất</b> - cực kỳ nhanh do không có định nghĩa lược đồ, chức năng toàn vẹn quan hệ, giao dịch hoặc tham chiếu<br/>
            <b>★★★ Khả năng mở rộng</b> - có thể được mở rộng tuyến tính bằng cách chia nhỏ dữ liệu trên các máy chủ bằng cách sử dụng giá trị băm được tính toán dựa trên khóa hàng<br/>
            <b>★★★ Tính khả dụng</b> - tính khả dụng cao được cung cấp bởi hệ thống tệp phân nhóm và phân tán (ví dụ: HDFS)<br/>
            <b>★ Ad-hoc analysis</b> - hỗ trợ lập chỉ mục thứ cấp, nhưng không có chức năng tổng hợp<br/>
          </p>
          <h3>Ví dụ triển khai</h3>
          <p class="card__description">
            Cassandra, HBase
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
              <h2>Column-Family</h2>
              <h3>Family/Data Storage/NoSQL Database</h3>
            </div>
          </div>
          <p class="card__description">
            Hoạt động tương tự như cơ sở dữ liệu Column-Family, nhưng cho phép lưu trữ các cấu trúc phức tạp và lồng sâu hơn nhiều (ví dụ: một tài liệu, trong một tài liệu, trong một tài liệu). Tài liệu vượt qua các ràng buộc của một hoặc hai cấp độ lồng khóa-giá trị của cơ sở dữ liệu Column-Family. Cấu trúc phức tạp và tùy ý có thể tạo thành một tài liệu, có thể được lưu trữ dưới dạng bản ghi.
          </p>
          <img src="/assets/pictures/big-data/big-data-08.png" />
          <h3>Các hệ quả:</h3>
          <p class="card__description">
            <b>★★ Hiệu suất</b> - hiệu suất thay đổi đáng kể từ lần triển khai này sang lần triển khai tiếp theo, nhưng nhìn chung không nhanh bằng cơ sở dữ liệu Khóa-Giá trị<br/>
            <b>★★★ Khả năng mở rộng</b> - hơn 100 tổ chức điều hành các cụm với hơn 100 nút. Một số cụm vượt quá 1.000 nút<br/>
            <b>★★★ Tính khả dụng</b> - tính sẵn sàng cao được cung cấp bằng cách phân cụm và nhân rộng<br/>
            <b>★ ½ A Ad-hoc analysis</b> - tốt hơn một chút so với các họ NoSQL khác, nhưng vẫn không tốt bằng cơ sở dữ liệu quan hệ hoặc công cụ truy vấn tương tác<br/>
          </p>
          <h3>Ví dụ triển khai</h3>
          <p class="card__description">
            MongoDB, CouchDB
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
              <h2>Distributed File System</h2>
              <h3>Family/Data Storage</h3>
            </div>
          </div>
          <p class="card__description">
            Các hệ thống tệp phân tán hiện đại có khả năng chống lỗi cao và được thiết kế để chạy trên phần cứng giá rẻ. Các triển khai mã nguồn mở như HDFS (Hệ thống tệp phân tán Hadoop) và CFS (Hệ thống tệp Cassandra) cung cấp khả năng truy cập thông lượng cao vào dữ liệu ứng dụng và phù hợp với các ứng dụng xử lý tập dữ liệu lớn.
          </p>
          <img src="/assets/pictures/big-data/big-data-09.png" />
          <h3>Các hệ quả:</h3>
          <p class="card__description">
            <b>★★ Hiệu suất</b> - được thiết kế để truy cập đọc / ghi tuần tự nhanh, thực sự tốt cho xử lý hàng loạt (Map Reduce). Đối với việc đọc / ghi ngẫu nhiên được khuyến nghị sử dụng cơ sở dữ liệu NoSQL (ví dụ: HBase trên đầu HDFS<br/>
            <b>★★★ Khả năng mở rộng</b> - có thể mở rộng quy mô và tuyến tính, số lượng nút về mặt lý thuyết là không giới hạn, các cụm sản xuất hiện có với tối đa 10.000 nút<br/>
            <b>★★★ Tính khả dụng</b> - sao chép dữ liệu mặc định đến 3 nút, nhận biết giá đỡ và trung tâm dữ liệu, không có điểm lỗi duy nhất<br/>
          </p>
          <h3>Ví dụ triển khai</h3>
          <p class="card__description">
            Hadoop Distributed File System(HDFS), Cassandra File System (CFS)
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
              <h2>Interactive Query Engine</h2>
              <h3>Family/Analytics/Search & Query</h3>
            </div>
          </div>
          <p class="card__description">
            Bộ xử lý truy vấn phân tán nhằm mục đích chạy các truy vấn phân tích hàng loạt cũng như tương tác với các nguồn dữ liệu có kích thước lớn.
          </p>
          <img src="/assets/pictures/big-data/big-data-10.png" />
          <h3>Các hệ quả:</h3>
          <p class="card__description">
            <b>★★ Hiệu suất</b> - có thể truy vấn lượng lớn dữ liệu trong thời gian con người (2-30 giây), tuy nhiên vẫn không nhanh bằng kho dữ liệu quan hệ<br/>
            <b>★★ ½ Độ tin cậy</b> - một số triển khai cung cấp hỗ trợ truy vấn lâu dài<br/>
            <b>★★★ Ad-hoc analysis</b> - tốt nhất trong lớp, tương tự như các công cụ kho dữ liệu MPP quan hệ<br/>
          </p>
          <h3>Ví dụ triển khai</h3>
          <p class="card__description">
            Hadoop Distributed File System(HDFS), Cassandra File System (CFS)
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
              <h2>Distributed Search Engine</h2>
              <h3>Family/Analytics/Search & Query</h3>
            </div>
          </div>
          <p class="card__description">
            Giải pháp lập chỉ mục có thể mở rộng với tìm kiếm toàn văn, tương tác. Hầu hết các triển khai đều cung cấp API cho phép thực hiện các truy vấn phức tạp trên dữ liệu bán cấu trúc như nhật ký, trang web và tệp tài liệu.
          </p>
          <img src="/assets/pictures/big-data/big-data-11.png" />
          <h3>Các hệ quả:</h3>
          <p class="card__description">
            <b>★★ Ad-hoc analysis</b> - ngôn ngữ truy vấn thường bao gồm tìm kiếm theo từng khía cạnh và không gian địa lý, các hàm thống kê và các phép nối đơn giản để truy vấn, phân tích và trực quan hóa dữ liệu<br/>
            <b>★★★ Khả năng mở rộng</b> - có thể được mở rộng tuyến tính bằng cách cung cấp lập chỉ mục phân tán<br/>
            <b>★★★ Tính khả dụng</b> - tính khả dụng cao được cung cấp bằng cách phân cụm và nhân rộng</br>
          </p>
          <h3>Ví dụ triển khai</h3>
          <p class="card__description">
            Elasticsearch, Apache Solr, Splunk Indexer
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