---
title: "Lựa chọn công nghệ lưu trữ phù hợp"
layout: fullPage
tags:
- gcp
active: "cs"
order: 7
libjs: 
published: true
hidden: true


---
<div id="fullpage">
    <div class="section"  >One asdfasdfasd</div>
    <div class="section">
      <div class="slide" data-anchor="slide1" id="map1" >Two 1</div>
      <div class="slide" data-anchor="slide2" id="map2" >Two 2</div>
    </div>
    <div class="section">Three</div>
    <div class="section">Four</div>
</div>



<script>
   
var data1 = 
{"nodeData":{"id":"root","topic":"Chọn công nghệ lưu trữ phù hợp","root":true,"children":[{"topic":"Vòng đời dữ liệu","id":"5ae5d566c5969277","direction":0,"expanded":true,"children":[{"topic":"Nhập","id":"5ae5d977b00aabf3","expanded":true,"children":[{"topic":"Dữ liệu ứng dụng","id":"5ae5ea873b006d7e","expanded":true,"children":[{"topic":"Stackdriver\nLogging","id":"5ae5f00eab3f7613"},{"topic":" Cloud SQL","id":"5ae5f2d223a60fa7"},{"topic":" Cloud Datastore","id":"5ae5f4a6acafd6c8"}]},{"topic":"Streaming Data\n","id":"5ae6046abaf89422","children":[{"topic":"Cloud Pub/Sub","id":"5ae6013637266df0"}]},{"topic":"Batch Data\n","id":"5ae605893c5eb7a3","expanded":true,"children":[{"topic":"Cloud Storage","id":"5ae60d35b919d41f"}]}]},{"topic":"Lưu trữ ","id":"5ae5da1ab015848b","expanded":true,"children":[{"topic":"Data Access Patterns","id":"5ae61280b23748ae"},{"topic":"Kiểm soát truy cập","id":"5ae6149637c900d9"},{"topic":"Thời gian để lưu trữ","id":"5ae6170235ee0ca0"}]},{"topic":"Xử lý và<br>phân tích ","id":"5ae5de933d824349","expanded":true,"children":[{"topic":"Chuyển đổi dữ liệu","id":"5ae61b14b4d9f1ed","expanded":true,"children":[{"topic":"Cloud Dataflow","id":"5ae61e8c31454880"}]},{"topic":"Phân tích dữ liệu","id":"5ae6208db6151ba7","expanded":true,"children":[{"topic":"Cloud Dataflow,<br>Cloud Dataproc,<br>BigQuery <br>và Cloud ML Engine<br>đều hữu ích cho<br> việc phân tích dữ liệu.","id":"5ae62397b892713f"}]}]},{"topic":"Khám phá<br> và hình dung","id":"5ae5e13539a5563a","expanded":true,"children":[{"topic":"Cloud Datalab","id":"5ae63579bb50cda6"},{"topic":"Google Data Studio","id":"5ae6375139a8e92e"}]}]},{"topic":"Khía cạnh kỹ thuật","id":"5ae63b0ba4416dcd","direction":1,"expanded":true,"children":[{"topic":"Khối lượng dữ liệu","id":"5ae64294b3077c9d"},{"topic":"Tốc độ","id":"5ae64ad3a3ecf709"},{"topic":"Sự thay đổi cấu trúc","id":"5ae64eebaeb67a1c"},{"topic":"Data Access Patterns\n","id":"5ae67b1d2240ee3e"},{"topic":"Yêu cầu bảo mật","id":"5ae67dcc2566e5b3"}]},{"topic":"Các loại cấu trúc","id":"5ae6951a2d20b514","direction":0,"expanded":true,"children":[{"topic":"Có cấu trúc","id":"5ae697f223c70517","expanded":true,"children":[{"topic":"Giao dịch","id":"5ae69f49a78c3b3c","expanded":true,"children":[{"topic":"Regional","id":"5ae6a1d82d7cc6fb","expanded":true,"children":[{"topic":"Cloud\nSQL ","id":"5ae6a5d127603bc9"}]},{"topic":"Global","id":"5ae6a3b4aeb7ce68","expanded":true,"children":[{"topic":"Cloud\nSpanner ","id":"5ae6a7712bfd24a4"}]}]},{"topic":"Phân tích","id":"5ae6aa5ba1fc6aba","expanded":true,"children":[{"topic":"BigQuery","id":"5ae6b6ca21eeb48f"}]}]},{"topic":"Bán cấu trúc","id":"5ae699e02eb59b40","expanded":true,"children":[{"topic":"Lập chỉ mục đầy đủ","id":"5ae6ae212d3f5bae","expanded":true,"children":[{"topic":"Cloud\nDatastore ","id":"5ae6b391ab1166c7"}]},{"topic":"Row Key ","id":"5ae6b0f1a58556b2","expanded":true,"children":[{"topic":"Bigtable","id":"5ae6b5182d4a12e7"}]}]},{"topic":"Không có cấu trúc","id":"5ae69bc827401d74","expanded":true,"children":[{"topic":"Cloud\nStorage","id":"5ae6b8e22b4b7a4f"}]}]},{"topic":"Cân nhắc thiết <br>kế lược đồ","id":"5ae6c04e2c58e90d","direction":1,"expanded":true,"children":[{"topic":"Thiết kế cơ sở<br>dữ liệu quan hệ","id":"5ae72ccb18e94b3f","expanded":true,"children":[{"topic":"Online transaction<br>processing (OLTP)","id":"5ae7a31a1ab5025c","show":"Xử lý dữ liệu hoạt động gần đây<br>\nKích thước nhỏ hơn, thường dao động từ 100Mb đến 10Gb<br>\nMục tiêu là thực hiện các hoạt động hàng ngày<br>\nSử dụng các truy vấn đơn giản<br>\nTốc độ xử lý nhanh hơn<br>\nYêu cầu thao tác đọc / ghi"},{"topic":"Online analytical<br>processing (OLAP)","id":"5ae7a6369f65e61a","show":"Xử lý tất cả dữ liệu lịch sử<br>\nKích thước lớn hơn, thường dao động từ 1Tb đến 100Pb<br>\n Mục tiêu là đưa ra quyết định từ các nguồn dữ liệu lớn<br>\n Sử dụng các truy vấn phức tạp<br>\nTốc độ xử lý chậm hơn<br>\nChỉ yêu cầu thao tác đọc"}]},{"topic":"Thiết kế cơ sở<br> dữ liệu NoSQL","id":"5ae7b57e086c317b","expanded":true,"children":[{"topic":"Key-Value ","id":"5ae7b9570de5b6b5","expanded":true,"children":[{"topic":"Cloud Memorystore","id":"5ae7cff60b4c641d"}]},{"topic":"Document ","id":"5ae7d3de06000da1","expanded":true,"children":[{"topic":"Cloud Datastore","id":"5ae7d9c782c5293f"}]},{"topic":"Wide-Column","id":"5ae7dc9f88c68eb8","expanded":true,"children":[{"topic":"Bigtable","id":"5ae7ef798d527c0e"}]},{"topic":"Graph ","id":"5ae7f2930caa2ed2","expanded":true,"children":[],"show":"GCP không có cơ sở dữ liệu đồ thị được quản lý,<br>\nnhưng Bigtable có thể được sử dụng làm phụ trợ lưu trữ <br>cho HGraphDB (https://github.com/rayokota/hgraphdb)<br> hoặc JanusGraph (https://janusgraph.org)."}]}]},{"topic":"Ví dụ sử dụng","id":"5ae86169fd084ce9","direction":0,"expanded":true,"children":[{"topic":"Stackdriver Logging","id":"5ae865d3f29c4915","show":"undefined","expanded":true,"children":[{"topic":"1","id":"5ae93cdced1f9892","show":"Phát triển ứng dụng di động cho khách hàng của công ty bạn sử <br> dụng để theo dõi thông tin về tài khoản của họ. Nhà phát<br> triển giải thích rằng họ muốn viết tin nhắn mỗi khi<br> một sự kiện quan trọng xảy ra, chẳng hạn như khách hàng<br> mở, xem hoặc xóa tài khoản và muốn giảm <br>thiểu chi phí quản trị."}]},{"topic":"Cloud Dataflow","id":"5ae895bf769bd1b2","expanded":true,"children":[{"topic":"1","id":"5ae962416249e613","show":"Bạn chịu trách nhiệm phát triển cơ chế nhập cho một số lượng <br> lớn các cảm biến IoT. Dịch vụ nhập sẽ chấp nhận dữ liệu <br>trễ đến 10 phút. Dịch vụ cũng nên thực hiện một số chuyển<br> đổi trước khi ghi dữ liệu vào cơ sở dữ liệu. Dịch vụ<br> được quản lý nào sẽ là lựa chọn tốt nhất để quản lý dữ <br>liệu đến muộn và thực hiện chuyển đổi?"}]},{"topic":"Cloud Storage","id":"5ae99c83e955bfac","expanded":true,"children":[{"topic":"1","id":"5ae99cdb6eb1874b","expanded":true,"children":[],"show":"Một nhóm các nhà phân tích đã thu thập một số tập dữ liệu CSV <br>với tổng kích thước là 50 GB. Họ có kế hoạch lưu trữ bộ dữ<br> liệu trong GCP và sử dụng các phiên bản Compute Engine <br>để chạy RStudio, một ứng dụng thống kê tương tác. Dữ liệu <br>sẽ được tải vào RStudio bằng công cụ tải dữ liệu RStudio.<br> Dịch vụ lưu trữ GCP thích hợp nhất cho tập dữ liệu là gì?"}]},{"topic":"BigQuery","id":"5ae9e7c3592d357a","expanded":true,"children":[{"topic":"1","id":"5ae9e876d1904fc4","show":"Một nhóm các nhà phân tích đã thu thập vài terabyte dữ liệu<br> đo từ xa trong bộ dữ liệu CSV. Họ dự định lưu trữ<br> bộ dữ liệu trong GCP và <b>truy vấn và phân tích</b> dữ <br>liệu bằng SQL. Dịch vụ lưu trữ GCP thích hợp nhất cho<br> tập dữ liệu nào sau đây?"}]}]},{"topic":"Hệ thống lưu trữ trên GCP","id":"5b5fdb6b8ee18ac1","direction":1,"expanded":true,"children":[{"topic":"Cloud SQL ","id":"5b5fe865f94e3304","show":"Cloud SQL là dịch vụ cơ sở dữ liệu quan hệ được <br> quản lý đầy đủ hỗ trợ cơ sở dữ liệu MySQL, <br> PostgreSQL và SQL Server."},{"topic":"Cloud Spanner \n","id":"5b5fea0f7d164a95","show":"Cloud Spanner là cơ sở dữ liệu quan hệ, <br> có thể mở rộng theo chiều ngang, cơ sở dữ liệu toàn <br> cầu của Google."},{"topic":"Cloud Bigtable ","id":"5b5feb6b7c2b1910","show":"Cloud Bigtable là cơ sở dữ liệu NoSQL Wide-Column <br> được sử dụng cho cơ sở dữ liệu khối lượng lớn<br> yêu cầu độ trễ mili giây (mili giây) thấp.<br> Cloud Bigtable được sử dụng cho IoT, chuỗi<br> thời gian, tài chính và các ứng dụng tương tự."},{"topic":"Cloud Firestore ","id":"5b5fecc20f31a81c","show":"Cloud Firestore là cơ sở dữ document liệu được quản lý thay thế Cloud Datastore."},{"topic":"BigQuery","id":"5b5fee367bd1d8b1","show":"BigQuery là cơ sở dữ liệu kho dữ liệu <br> phân tích quy mô petabyte, chi phí thấp được <br> quản lý hoàn toàn."},{"topic":"Cloud Memorystore ","id":"5b5fef6df3f6d52e","show":"Cloud Memorystore là một dịch vụ Redis được quản <br> lý, thường được sử dụng để lưu vào bộ nhớ đệm."},{"topic":"Cloud Storage ","id":"5b5ff0a7f5b063db","show":"Google Cloud Storage là một hệ thống lưu trữ đối <br> tượng. Nó được thiết kế để lưu giữ dữ liệu <br>  phi cấu trúc, chẳng hạn như dữ liệu files,<br> hình ảnh, video, sao lưu files và bất kỳ dữ <br> liệu nào khác."}]}],"expanded":true,"tags":[]},"linkData":{}}
</script>


<script>

new fullpage('#fullpage', {
  licenseKey: 'YOUR KEY HERE',
  navigation: true,
    afterLoad: function(origin, destination, direction, trigger){
        if(destination.index == 1){
                MindElixirRender('#map1', data1)
        }
    },
    afterSlideLoad: function( section, origin, destination, direction, trigger){
      if(destination.anchor == 'slide1'){
               MindElixirRender('#map1', data1)
      }
      if(destination.anchor == 'slide2'){
               MindElixirRender('#map2', data1)
      }
    } 
});

</script>



