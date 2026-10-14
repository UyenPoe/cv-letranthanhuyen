# Personal CV & Portfolio Landing Page – Lê Trần Thanh Uyên

> **Chức danh:** Web & SEO Specialist (Website Administrator · SEO Specialist · WordPress Developer)  
> **Phong cách giao diện:** Dark Tech Portfolio (`#111827`, `#0B2342`, `#22C55E`, `#F9FAFB`, `#9CA3AF`)  
> **Nền tảng triển khai:** GitHub Pages (Static HTML5, CSS3, Vanilla JavaScript)

---

## 1. Cấu trúc thư mục dự án

```text
cv-letranthanhuyen/
├── index.html                  # Trang chính One Page CV (Header, Hero, About, Skills, Experience, Projects, Contact)
├── projects/                   # 6 trang Case Study chi tiết (Đầy đủ thành phần CS01 -> CS12)
│   ├── smartphone-ecommerce.html
│   ├── wangsun-luxury.html
│   ├── san-tham-my.html
│   ├── review-lam-dep.html
│   ├── danh-gia-tham-my.html
│   └── stone-sinks.html
├── assets/
│   ├── css/
│   │   ├── variables.css       # Biến màu sắc, font Inter, kích thước chuẩn Spec
│   │   ├── main.css            # Giao diện trang chủ & các thành phần dùng chung
│   │   ├── case-study.css      # Giao diện trang chi tiết Case Study (CS01 - CS12)
│   │   └── responsive.css      # Responsive Desktop (>=1024px), Tablet (768-1023px), Mobile (<=767px)
│   ├── js/
│   │   ├── data.js             # Dữ liệu tập trung (Song ngữ VI/EN, Thông tin cá nhân, Kỹ năng, Kinh nghiệm, 6 Dự án)
│   │   ├── main.js             # Logic chuyển ngôn ngữ, bật/tắt trạng thái việc làm, bộ lọc, timeline, copy email
│   │   └── case-study.js       # Render tự động nội dung Case Study & điều hướng Dự án Trước/Tiếp theo
│   ├── images/
│   │   ├── avatar.svg          # Ảnh đại diện
│   │   └── projects/           # Hình ảnh giao diện của 6 dự án
│   └── docs/
│       └── CV-Le-Tran-Thanh-Uyen.pdf  # File CV PDF tải xuống
├── sitemap.xml                 # Sitemap chuẩn SEO
├── robots.txt                  # Cấu hình bot tìm kiếm
└── README.md                   # Tài liệu hướng dẫn chỉnh sửa & triển khai
```

---

## 2. Hướng dẫn chỉnh sửa nội dung (Không cần sửa nhiều file)

Toàn bộ dữ liệu văn bản (Tiếng Việt & Tiếng Anh), thông tin liên hệ, kinh nghiệm và danh sách dự án được quản lý tập trung tại file:
👉 **`assets/js/data.js`**

### 2.1. Thay đổi thông tin liên hệ & trạng thái nhận việc mặc định
Mở `assets/js/data.js`, tìm phần `profile`:
```javascript
profile: {
  fullName: "Lê Trần Thanh Uyên",
  availableByDefault: true, // Đổi thành false nếu muốn mặc định là "Đang trong dự án"
  email: "thanhuyenletran@gmail.com",
  phone: "0706 700 528",
  zalo: "https://zalo.me/0706700528",
  github: "https://github.com/UyenPoe",
  cvUrl: "assets/docs/CV-Le-Tran-Thanh-Uyen.pdf"
}
```
*(Ngoài ra, trên thanh Header của website có nút bấm trực tiếp để bật/tắt trạng thái **Sẵn sàng nhận việc / Đang trong dự án** bất cứ lúc nào).*

### 2.2. Thay file CV PDF và Ảnh chụp dự án thực tế
- **Thay file CV PDF:** Chép file PDF chính thức của bạn đè lên đường dẫn `assets/docs/CV-Le-Tran-Thanh-Uyen.pdf`.
- **Thay ảnh đại diện:** Thay file `assets/images/avatar.svg` (hoặc dùng ảnh `.webp` / `.jpg` và cập nhật đường dẫn).
- **Thay ảnh chụp dự án:** Đặt ảnh chụp màn hình (ưu tiên định dạng `.webp` hoặc `.avif`) vào `assets/images/projects/` và cập nhật trường `images` của dự án tương ứng trong `assets/js/data.js`.

### 2.3. Bổ sung một Dự án (Case Study) mới
1. Mở `assets/js/data.js`, thêm một object dự án mới vào mảng `projects: [...]` (theo mẫu các dự án có sẵn).
2. Nhân bản một file trong thư mục `projects/` (ví dụ copy `projects/wangsun-luxury.html` thành `projects/du-an-moi.html`).
3. Trong file HTML mới, đổi thuộc tính `<body data-project-slug="du-an-moi">` trùng với `slug` bạn vừa khai báo trong `assets/js/data.js`, và cập nhật thẻ `<title>` / `<meta>` cho SEO.

---

## 3. Hướng dẫn triển khai lên GitHub Pages (Giai đoạn 4)

```bash
# 1. Khởi tạo Git trong thư mục dự án
git init
git add .
git commit -m "feat: initial release of Personal CV & Portfolio Landing Page v1.0"

# 2. Đẩy lên GitHub Repository
git branch -M main
git remote add origin https://github.com/<username>/cv-letranthanhuyen.git
git push -u origin main
```

Sau đó trên GitHub:
1. Vào **Settings** → **Pages**.
2. Tại mục **Build and deployment**, chọn Source là **Deploy from a branch**.
3. Chọn nhánh `main` và thư mục `/ (root)` → Nhấn **Save**.
4. Sau 1–2 phút, website sẽ hoạt động với đầy đủ HTTPS.
