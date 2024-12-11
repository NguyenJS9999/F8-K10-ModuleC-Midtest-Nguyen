## Hướng dẫn làm bài

- Thời gian làm bài: 180 phút.
- Download repo về máy của học viên và thực hiện code trực tiếp trong thư mục này.
- Sau khi làm bài xong, học viên đẩy code lên github của mình và nộp lại link repo đó qua google form: https://forms.gle/JacfB8vV9L7sFfsn9.
- Trong quá trình làm bài, gỡ bỏ và không sử dụng các extensions có sử dụng AI như Tabnine, Github copilot, Codeium, v.v.
- Được phép mở các trang web sau trong quá trình làm bài:
  - Bootstrap: https://getbootstrap.com/
  - Tailwind CSS: https://tailwindcss.com/
  - Google Fonts: https://fonts.google.com/
  - Font Awesome: https://fontawesome.com/
  - Boxicons: https://boxicons.com/

## Yêu cầu

- Xây dựng ứng dụng quản lý sản phẩm với ReactJS và json-server bao gồm các tính năng sau:

### Xây dựng bộ định tuyến, layout và giao diện cho ứng dụng (1đ)

- Header: Hiển thị tên ứng dụng và menu điều hướng. (0.25đ)
- Bộ định tuyến cho các trang: Trang chủ, trang đăng ký, trang đăng nhập. (0.25đ)
- Xử lý đúng route "not found" khi người dùng nhập một route không tồn tại. (0.25đ)
- Giao diện chung cho ứng dụng. (0.25đ)

### Trang chủ. (2đ)

- Danh sách sản phẩm dạng lưới bao gồm tối thiểu các thông tin sau: tên sản phẩm, giá sản phẩm, ảnh sản phẩm, nút xem chi tiết. (0.5đ).
- Tính năng chuyển đổi layout: lưới hoặc danh sách. (0.5đ)
- Tính năng lọc sản phẩm theo danh mục (dựa vào categoryId của sản phẩm và danh sách danh mục có ở json-server). (0.5đ)
- Tìm kiếm sản phẩm. (0.5đ)

### Trang đăng ký. (1đ)

- Email: Kiểu email, bắt buộc nhập. (0.25đ)
- Mật khẩu: Kiểu password, bắt buộc nhập, ít nhất 6 ký tự. (0.25đ)
- Nếu đăng ký thất bại, hiển thị đúng thông báo lỗi json-server trả về. (0.5đ)

### Trang đăng nhập. (1đ)

- Validation tương tự trang đăng ký. (0.5đ)
- Nếu đăng nhập thất bại, hiển thị đúng thông báo lỗi json-server trả về. (0.5đ)

### Private route. (1đ)

- Duy trì phiên làm việc của người dùng, nếu người dùng có role là "admin" thì sẽ chuyển hướng đến trang quản lý sản phẩm, nếu không phải role "admin" thì chuyển hướng đến trang chủ. (0.5đ)
- Tính năng đăng xuất. (0.5đ)

### Trang quản lý sản phẩm. (1đ)

- Danh sách sản phẩm dạng bảng. (0.5đ)
- Chức năng xoá sản phẩm có confirm, sau khi xoá thành công sẽ cập nhật lại danh sách sản phẩm. (0.5đ)

### Trang thêm sản phẩm. (1.5đ)

- Tên sản phẩm: Kiểu text, bắt buộc nhập. (0.25đ)
- Giá: Kiểu number, bắt buộc nhập, giá trị lớn hơn hoặc bằng 0. (0.25đ)
- Mô tả: Kiểu text, không bắt buộc nhập. (0.25đ)
- Danh mục: Kiểu select, bắt buộc chọn, bao gồm các danh mục lấy từ json-server. (0.25đ)
- Thêm thành công: reset form và hiển thị thông báo thêm sản phẩm thành công. (0.5đ)

### Trang cập nhật sản phẩm. (1.5đ)

- Yêu cầu đưa thông tin cũ của sản phẩm vào form cập nhật. (0.5đ)
- Kiểm tra dữ liệu tương tự khi thêm sản phẩm. (0.5đ)
- Cập nhật thành công, reset form, hiển thị thông báo cập nhật thành công. (0.5đ)
