#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script to generate professional Microsoft Word (.docx) documents:
1. CV-SEO-Specialist-Le-Tran-Thanh-Uyen.docx
2. Ke-Hoach-Cong-Viec-SEO-Le-Tran-Thanh-Uyen.docx
3. CV-Le-Tran-Thanh-Uyen.docx

All documents use large, legible typography (11-12pt body, 14-20pt headings)
and professional modern layout with deep navy & green accent styling.
"""

import os
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

DOCS_DIR = os.path.join(os.path.dirname(__file__), "assets", "docs")
HO_SO_DIR = os.path.join(os.path.dirname(__file__), "Ho-So-Ung-Tuyen")
os.makedirs(DOCS_DIR, exist_ok=True)
os.makedirs(HO_SO_DIR, exist_ok=True)

def save_document(doc, filename):
    for directory in (DOCS_DIR, HO_SO_DIR):
        target = os.path.join(directory, filename)
        doc.save(target)
        print(f"[OK] Saved: {target} ({os.path.getsize(target)} bytes)")


# Color Palette
COLOR_NAVY = RGBColor(11, 35, 66)      # #0B2342
COLOR_GREEN = RGBColor(22, 163, 74)    # #16A34A (Dark Emerald)
COLOR_TEXT = RGBColor(31, 41, 55)      # #1F2937 (Body Dark)
COLOR_MUTED = RGBColor(75, 85, 99)     # #4B5563 (Gray)
HEX_LIGHT_BG = "F3F4F6"
HEX_NAVY_BG = "0B2342"
HEX_BORDER = "CBD5E1"
HEX_GREEN_LIGHT = "ECFDF5"

def set_cell_background(cell, hex_color):
    shading_elm = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>')
    cell._tc.get_or_add_tcPr().append(shading_elm)

def set_cell_margins(cell, top=120, bottom=120, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}><w:top w:w="{top}" w:type="dxa"/><w:bottom w:w="{bottom}" w:type="dxa"/><w:left w:w="{left}" w:type="dxa"/><w:right w:w="{right}" w:type="dxa"/></w:tcMar>')
    tcPr.append(tcMar)

def add_styled_heading(doc, text, level=1):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(14)
    p.paragraph_format.space_after = Pt(4)
    p.paragraph_format.keep_with_next = True
    
    run = p.add_run(f"■  {text.upper()}")
    run.font.name = "Arial"
    run.font.size = Pt(13.5 if level == 1 else 12)
    run.font.bold = True
    run.font.color.rgb = COLOR_NAVY
    
    # Bottom border simulation via underline / bottom border XML
    pBdr = parse_xml(f'<w:pBdr {nsdecls("w")}><w:bottom w:val="single" w:sz="8" w:space="4" w:color="22C55E"/></w:pBdr>')
    p._p.get_or_add_pPr().append(pBdr)
    return p

def add_bullet_item(doc, title, content, level=0):
    p = doc.add_paragraph(style='List Bullet')
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(3)
    p.paragraph_format.line_spacing = 1.2
    
    if title:
        r_title = p.add_run(f"{title}: ")
        r_title.font.name = "Arial"
        r_title.font.size = Pt(11)
        r_title.font.bold = True
        r_title.font.color.rgb = COLOR_TEXT
        
    r_content = p.add_run(content)
    r_content.font.name = "Arial"
    r_content.font.size = Pt(11)
    r_content.font.color.rgb = COLOR_TEXT
    return p

def create_callout(doc, title, text, bg_hex="F0FDF4", border_color="22C55E"):
    tbl = doc.add_table(rows=1, cols=1)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl.autofit = False
    cell = tbl.cell(0, 0)
    cell.width = Inches(6.8)
    set_cell_background(cell, bg_hex)
    set_cell_margins(cell, top=140, bottom=140, left=180, right=180)
    
    # Left thick border
    tcPr = cell._tc.get_or_add_tcPr()
    borders = parse_xml(f'<w:tcBorders {nsdecls("w")}><w:left w:val="single" w:sz="24" w:space="0" w:color="{border_color}"/><w:top w:val="none"/><w:right w:val="none"/><w:bottom w:val="none"/></w:tcBorders>')
    tcPr.append(borders)
    
    p = cell.paragraphs[0]
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.line_spacing = 1.25
    
    if title:
        rt = p.add_run(f"{title} ")
        rt.font.name = "Arial"
        rt.font.size = Pt(11)
        rt.font.bold = True
        rt.font.color.rgb = COLOR_NAVY
        
    rc = p.add_run(text)
    rc.font.name = "Arial"
    rc.font.size = Pt(11)
    rc.font.color.rgb = COLOR_TEXT

# ==============================================================================
# 1. BUILD CV SEO SPECIALIST (.DOCX)
# ==============================================================================
def build_cv_seo_docx():
    doc = Document()
    
    # Page setup: A4, 0.7 inch margins
    for section in doc.sections:
        section.page_width = Inches(8.27)
        section.page_height = Inches(11.69)
        section.top_margin = Inches(0.7)
        section.bottom_margin = Inches(0.7)
        section.left_margin = Inches(0.75)
        section.right_margin = Inches(0.75)
        
    # Header block
    tbl_hdr = doc.add_table(rows=1, cols=1)
    tbl_hdr.alignment = WD_TABLE_ALIGNMENT.CENTER
    c_hdr = tbl_hdr.cell(0, 0)
    c_hdr.width = Inches(6.77)
    set_cell_background(c_hdr, "0B2342")
    set_cell_margins(c_hdr, top=200, bottom=200, left=240, right=240)
    
    p_name = c_hdr.paragraphs[0]
    p_name.paragraph_format.space_before = Pt(0)
    p_name.paragraph_format.space_after = Pt(2)
    r_name = p_name.add_run("LÊ TRẦN THANH UYÊN")
    r_name.font.name = "Arial"
    r_name.font.size = Pt(21)
    r_name.font.bold = True
    r_name.font.color.rgb = RGBColor(255, 255, 255)
    
    p_role = c_hdr.add_paragraph()
    p_role.paragraph_format.space_before = Pt(0)
    p_role.paragraph_format.space_after = Pt(8)
    r_role = p_role.add_run("SEO SPECIALIST · TECHNICAL SEO · QUẢN TRỊ WEBSITE")
    r_role.font.name = "Arial"
    r_role.font.size = Pt(12)
    r_role.font.bold = True
    r_role.font.color.rgb = RGBColor(34, 197, 94) # Green
    
    p_contact = c_hdr.add_paragraph()
    p_contact.paragraph_format.space_before = Pt(0)
    p_contact.paragraph_format.space_after = Pt(0)
    p_contact.paragraph_format.line_spacing = 1.3
    r_c = p_contact.add_run("🎂 Ngày sinh: 18/01/1986   |   📍 Địa chỉ: TP. Hồ Chí Minh\n📞 Điện thoại / Zalo: 0706 700 528   |   ✉️ Email: thanhuyenletran@gmail.com\n🌐 Portfolio: https://uyenpoe.github.io/cv-letranthanhuyen/   |   🐙 GitHub: https://github.com/UyenPoe")
    r_c.font.name = "Arial"
    r_c.font.size = Pt(10.5)
    r_c.font.color.rgb = RGBColor(229, 231, 235)
    
    # Tóm tắt chuyên môn
    add_styled_heading(doc, "Tóm Tắt Chuyên Môn (Executive Summary)")
    create_callout(
        doc,
        "Định hướng nghề nghiệp:",
        "Chuyên viên SEO & Quản trị Website với hơn 3 năm kinh nghiệm thực chiến trong việc tối ưu hóa công cụ tìm kiếm (White-Hat SEO), kỹ thuật lập chỉ mục (Technical SEO), tối ưu tốc độ Core Web Vitals và thiết kế kiến trúc thông tin Topic Cluster. Thế mạnh độc đáo nhờ năng lực tự lập trình WordPress Plugin tối ưu Content SEO và can thiệp trực tiếp mã nguồn web (HTML, CSS, JavaScript, WordPress, PHP) giúp triển khai đề xuất kỹ thuật nhanh chóng, chính xác mà không phụ thuộc dev.",
        bg_hex="F0FDF4",
        border_color="16A34A"
    )
    
    # Kỹ năng cốt lõi
    add_styled_heading(doc, "Năng Lực & Kỹ Năng Cốt Lõi (Core Skills)")
    add_bullet_item(doc, "Phát triển WordPress Plugin Tối Ưu Content SEO", "Tự tay lập trình plugin PHP thuần tích hợp trình soạn thảo WordPress (Gutenberg & Classic): Đo mật độ từ khóa thời gian thực (1.5–2%), tự động sinh mục lục (Table of Contents - TOC) chuẩn Semantic Anchor, gợi ý liên kết nội bộ (Internal Links) theo Cụm chủ đề và tự động nhúng Schema FAQ/Article JSON-LD. Giúp đội ngũ viết bài tiết kiệm 40% thời gian duyệt bài và đạt chuẩn On-page 100% trước khi xuất bản.")
    add_bullet_item(doc, "Technical SEO & Crawlability", "Kiểm toán cấu trúc crawl, xử lý lỗi robots.txt, XML Sitemap, Canonical URL, chuyển hướng 301/302, mã phản hồi 404/500, tối ưu ngân sách thu thập dữ liệu (Crawl Budget).")
    add_bullet_item(doc, "Tối ưu Hiệu năng (Core Web Vitals)", "Đạt điểm xanh PageSpeed Insights (LCP < 2.5s, CLS < 0.1, INP < 200ms) bằng kỹ thuật nén WebP/AVIF, trì hoãn JS (defer/async), nén Gzip/Brotli, cấu hình bộ nhớ đệm và CDN Cloudflare.")
    add_bullet_item(doc, "Cấu trúc Thực thể (Schema JSON-LD)", "Khai báo thực thể chuẩn Google (Organization, LocalBusiness, MedicalBusiness, Product, Review/AggregateRating, FAQPage, BreadcrumbList) nhằm tăng hiển thị đoạn trích chi tiết (Rich Snippets).")
    add_bullet_item(doc, "Nghiên cứu Từ khóa & Content Cluster", "Phân tích Search Intent, xây dựng Topic Cluster hoàn chỉnh (Trang trụ cột Pillar Page kết hợp bài vệ tinh Cluster Posts), xây dựng cấu trúc liên kết nội bộ (Internal Links) logic.")
    add_bullet_item(doc, "Công cụ chuyên ngành", "Google Search Console, Google Analytics 4, Screaming Frog SEO Spider, Ahrefs, SEMrush, Google Tag Manager, PageSpeed Insights, Rank Math SEO, Yoast SEO.")
    add_bullet_item(doc, "Kỹ năng lập trình & Thiết kế bổ trợ", "WordPress Plugin Development, PHP, HTML5, CSS3, JavaScript; Thiết kế đồ họa & Banner website chuẩn UX với Adobe Photoshop, Illustrator, Figma.")

    # Kinh nghiệm làm việc
    add_styled_heading(doc, "Kinh Nghiệm Thực Chiến (Professional Experience)")
    
    p_job1 = doc.add_paragraph()
    p_job1.paragraph_format.space_before = Pt(8)
    p_job1.paragraph_format.space_after = Pt(2)
    r_j1 = p_job1.add_run("Chuyên viên SEO & Quản trị Website | Doanh nghiệp & Dự án Thực chiến")
    r_j1.font.name = "Arial"
    r_j1.font.size = Pt(12)
    r_j1.font.bold = True
    r_j1.font.color.rgb = COLOR_NAVY
    
    r_time1 = p_job1.add_run("   (2022 – Hiện tại)")
    r_time1.font.name = "Arial"
    r_time1.font.size = Pt(11)
    r_time1.font.italic = True
    r_time1.font.color.rgb = COLOR_MUTED
    
    add_bullet_item(doc, "Phát triển Plugin tối ưu Content SEO", "Tự lập trình công cụ WordPress Plugin In-house hỗ trợ đo mật độ từ khóa, tự động tạo TOC và chèn Schema FAQ, chuẩn hóa 100% bài viết xuất bản và tiết kiệm 40% thời gian duyệt bài của trưởng nhóm.")
    add_bullet_item(doc, "Kiểm toán & Xử lý Technical", "Thực hiện Technical Audit định kỳ bằng Screaming Frog cho 5+ website doanh nghiệp, giải quyết dứt điểm các lỗi chỉ mục (Index Coverage), trùng lặp nội dung, lỗi liên kết gãy và chuỗi chuyển hướng vòng lặp.")
    add_bullet_item(doc, "Tối ưu hóa tốc độ tải trang", "Tái cấu trúc hình ảnh và tài nguyên frontend, đưa chỉ số Core Web Vitals từ mức Cảnh báo đỏ sang mức 'Tốt' (Màu xanh), giảm thời gian tải trang trung bình từ 4.8s xuống dưới 1.8s.")
    add_bullet_item(doc, "Xây dựng chiến lược nội dung SEO", "Nghiên cứu bộ từ khóa ngành 500+ từ khóa dài, phân bổ Topic Cluster và triển khai hơn 120+ bài viết chuẩn SEO, giúp tổng lượng tìm kiếm tự nhiên (Organic Traffic) tăng trưởng hơn 180% sau 6 tháng.")
    add_bullet_item(doc, "Theo dõi & Báo cáo dữ liệu", "Thiết lập sự kiện đo lường chuyển đổi (Click Zalo, Click Gọi điện, Điền Form) trên GA4 qua Google Tag Manager; định kỳ báo cáo hiệu suất từ khóa và tỷ lệ CTR hàng tuần.")
    
    p_job2 = doc.add_paragraph()
    p_job2.paragraph_format.space_before = Pt(10)
    p_job2.paragraph_format.space_after = Pt(2)
    r_j2 = p_job2.add_run("Quản trị Web & Thiết kế Đồ họa / UI UX | Dự án Tự do & Doanh nghiệp")
    r_j2.font.name = "Arial"
    r_j2.font.size = Pt(12)
    r_j2.font.bold = True
    r_j2.font.color.rgb = COLOR_NAVY
    
    r_time2 = p_job2.add_run("   (2021 – 2022)")
    r_time2.font.name = "Arial"
    r_time2.font.size = Pt(11)
    r_time2.font.italic = True
    r_time2.font.color.rgb = COLOR_MUTED
    
    add_bullet_item(doc, "Thiết kế & Tối ưu UI/UX", "Thiết kế wireframe, banner quảng cáo, giao diện website bằng Photoshop, Illustrator và Figma; cải thiện trải nghiệm điều hướng trên di động giúp giảm tỷ lệ thoát (Bounce Rate) 25%.")
    add_bullet_item(doc, "Phát triển Website WordPress", "Xây dựng và bàn giao hệ thống website WordPress chuẩn SEO, tối ưu bảo mật, chống spam và cấu hình tự động sao lưu định kỳ.")

    p_job3 = doc.add_paragraph()
    p_job3.paragraph_format.space_before = Pt(10)
    p_job3.paragraph_format.space_after = Pt(2)
    r_j3 = p_job3.add_run("Senior SEO Specialist & Industrial Web Administrator | Cụm Doanh Nghiệp Cơ Khí Thới An & Cân Hoàng Thiên")
    r_j3.font.name = "Arial"
    r_j3.font.size = Pt(12)
    r_j3.font.bold = True
    r_j3.font.color.rgb = COLOR_NAVY
    
    r_time3 = p_job3.add_run("   (2017 – 2022)")
    r_time3.font.name = "Arial"
    r_time3.font.size = Pt(11)
    r_time3.font.italic = True
    r_time3.font.color.rgb = COLOR_MUTED
    
    add_bullet_item(doc, "Chiến lược từ khóa B2B kỹ thuật cao", "Xây dựng ma trận từ khóa chuyên ngành cơ khí nâng hạ & trạm cân điện tử (cầu trục dầm đơn/đôi, cổng trục, palang, trạm cân xe tải 20-120 tấn, cân sàn, loadcell), đưa hơn 150+ từ khóa cốt lõi lọt Top 1 – Top 5 Google Search.")
    add_bullet_item(doc, "Local SEO & Duy trì thứ hạng 5 năm", "Tối ưu hóa Google Business Profile tại Quận 12 phủ sóng các KCN phía Nam; thiết kế catalog thông số kỹ thuật (Spec Sheets) bằng Illustrator; duy trì thứ hạng bền vững liên tục qua nhiều bản cập nhật thuật toán lớn (2017 – 2022).")
    add_bullet_item(doc, "Quản trị hạ tầng kỹ thuật 4 website", "Quản trị cPanel, sao lưu tự động định kỳ, bảo mật hệ thống vận hành ổn định 99.9% uptime cho 4 website: cautructhoian.vn, hoangthienscale.com, thoianscale.com, canhoangthien.com.")

    # Các dự án tiêu biểu
    add_styled_heading(doc, "Dự Án Tiêu Biểu & Thành Tựu Thực Tế (Featured Case Studies)")
    
    add_bullet_item(doc, "Sản phẩm công nghệ: Custom WordPress Plugin Tối Ưu Content SEO", "Tự code giải pháp in-house siêu nhẹ (Zero Bloatware) tích hợp trực tiếp WordPress Editor: chấm điểm On-page thời gian thực, sinh mục lục bài viết kèm anchor text và tự nhúng Schema FAQ JSON-LD hợp lệ 100% Rich Results Test.")
    add_bullet_item(doc, "Dự án Cổng thông tin Sàn Thẩm Mỹ (santhammy.com - Laravel MVC & Directory SEO)", "Xây dựng cổng thông tin danh bạ thẩm mỹ viện trên nền tảng Laravel (PHP & MySQL): thiết kế kiến trúc MVC, tối ưu bộ định tuyến Routing phân tầng quận/huyện và chuyên khoa thẩm mỹ, tối ưu truy vấn cơ sở dữ liệu đạt TTFB < 0.4s, giúp Googlebot lập chỉ mục 100% URLs danh bạ.")
    add_bullet_item(doc, "Dự án Cụm B2B Thiết Bị Nâng Hạ & Cân Điện Tử (cautructhoian.vn · hoangthienscale.com · canhoangthien.com · thoianscale.com)", "Quản trị kỹ thuật & SEO tổng thể: 150+ từ khóa kỹ thuật Top 1-5 Google, Local Maps phủ sóng KCN phía Nam, mang lại nguồn khách hàng doanh nghiệp B2B ổn định liên tục suốt 5 năm (2017 – 2022).")
    add_bullet_item(doc, "Dự án Viện Thẩm Mỹ WangSun Luxury (vienthammywangsun.com)", "Tùy biến Flatsome Child Theme hoàng gia, tối ưu Technical Audit, triển khai Schema MedicalBusiness & LocalBusiness, nén ảnh WebP tải trang < 1.8s. Kết quả: Tăng trưởng Organic Clicks 210%, lọt Top 10 Google từ khóa dịch vụ làm đẹp tại TP.HCM.")
    add_bullet_item(doc, "Dự án Smartphone E-commerce (smartphone.taichinhtaithanh.com)", "Tự lập trình WordPress Theme sạch từ đầu (Custom Theme), chuẩn hóa cấu trúc URL, Semantic Heading H1-H3, tối ưu tốc độ Core Web Vitals đạt PageSpeed 90+.")
    add_bullet_item(doc, "Dự án Thương mại Stone Sinks Vietnam (stonesinks.vn)", "Khai báo Product Schema chuẩn Google Merchant Center, nén WebP hình ảnh độ nét cao. Kết quả: Tỷ lệ hiển thị trên Google Image tăng 60%, từ khóa sản phẩm chiếm lĩnh trang nhất Google.")

    # Phương châm làm việc
    add_styled_heading(doc, "Nguyên Tắc & Cam Kết Nghề Nghiệp")
    create_callout(
        doc,
        "Cam kết 100% White-Hat SEO:",
        "Tuân thủ nghiêm ngặt nguyên tắc chỉ dẫn quản trị trang web của Google (Google Search Essentials). Tập trung vào giá trị trải nghiệm người dùng, tốc độ tải trang và tính chân thực của thông tin. Tuyệt đối không sử dụng thủ thuật mũ đen hoặc PBN kém chất lượng gây nguy cơ phạt thuật toán.",
        bg_hex="F8FAFC",
        border_color="0B2342"
    )

    save_document(doc, "CV-SEO-Specialist-Le-Tran-Thanh-Uyen.docx")


# ==============================================================================
# 2. BUILD KE HOACH CONG VIEC SEO (.DOCX)
# ==============================================================================
def build_ke_hoach_seo_docx():
    doc = Document()
    
    for section in doc.sections:
        section.page_width = Inches(8.27)
        section.page_height = Inches(11.69)
        section.top_margin = Inches(0.7)
        section.bottom_margin = Inches(0.7)
        section.left_margin = Inches(0.75)
        section.right_margin = Inches(0.75)

    # Header block
    tbl_hdr = doc.add_table(rows=1, cols=1)
    tbl_hdr.alignment = WD_TABLE_ALIGNMENT.CENTER
    c_hdr = tbl_hdr.cell(0, 0)
    c_hdr.width = Inches(6.77)
    set_cell_background(c_hdr, "0B2342")
    set_cell_margins(c_hdr, top=180, bottom=180, left=240, right=240)
    
    p_name = c_hdr.paragraphs[0]
    p_name.paragraph_format.space_before = Pt(0)
    p_name.paragraph_format.space_after = Pt(2)
    r_name = p_name.add_run("BẢN HẠNG MỤC CÔNG VIỆC SEO WEBSITE (SEO SCOPE OF WORK)")
    r_name.font.name = "Arial"
    r_name.font.size = Pt(17)
    r_name.font.bold = True
    r_name.font.color.rgb = RGBColor(255, 255, 255)
    
    p_sub = c_hdr.add_paragraph()
    p_sub.paragraph_format.space_before = Pt(0)
    p_sub.paragraph_format.space_after = Pt(6)
    r_sub = p_sub.add_run("QUY TRÌNH TIÊU CHUẨN & BẢN PHÂN CÔNG NHIỆM VỤ CHUYÊN VIÊN SEO")
    r_sub.font.name = "Arial"
    r_sub.font.size = Pt(11.5)
    r_sub.font.bold = True
    r_sub.font.color.rgb = RGBColor(34, 197, 94)
    
    p_c = c_hdr.add_paragraph()
    p_c.paragraph_format.space_before = Pt(0)
    p_c.paragraph_format.space_after = Pt(0)
    r_c = p_c.add_run("Chuyên viên: Lê Trần Thanh Uyên   |   Ngày sinh: 18/01/1986   |   Vị trí: SEO Specialist & Technical SEO\nLiên hệ: 0706 700 528   |   Email: thanhuyenletran@gmail.com   |   Portfolio: https://uyenpoe.github.io/cv-letranthanhuyen/")
    r_c.font.name = "Arial"
    r_c.font.size = Pt(10.5)
    r_c.font.color.rgb = RGBColor(229, 231, 235)
    
    # Mục tiêu tài liệu
    add_styled_heading(doc, "Mục Tiêu & Phạm Vi Tài Liệu")
    create_callout(
        doc,
        "Mục tiêu tài liệu:",
        "Văn bản này xác lập chi tiết toàn bộ các đầu mục công việc, tiêu chuẩn kỹ thuật và quy trình thực hiện mà Chuyên viên SEO (Lê Trần Thanh Uyên) đảm nhiệm trong quá trình vận hành, phát triển và tối ưu hóa thứ hạng công cụ tìm kiếm cho hệ thống website của doanh nghiệp.",
        bg_hex="F0FDF4",
        border_color="16A34A"
    )
    
    # Giai đoạn 1: Technical SEO Audit
    add_styled_heading(doc, "Giai Đoạn 1: Khảo Sát & Kiểm Toán Kỹ Thuật (Technical SEO Audit)")
    
    p_s1 = doc.add_paragraph()
    p_s1.paragraph_format.space_before = Pt(4)
    p_s1.paragraph_format.space_after = Pt(2)
    r_s1 = p_s1.add_run("1.1. Kiểm soát Khả năng Thu thập dữ liệu & Lập chỉ mục (Crawlability & Indexing)")
    r_s1.font.name = "Arial"
    r_s1.font.size = Pt(12)
    r_s1.font.bold = True
    r_s1.font.color.rgb = COLOR_NAVY
    
    add_bullet_item(doc, "Cấu hình Robots.txt", "Phân quyền chính xác cho Googlebot, chặn các trang quản trị (/wp-admin, /cart, /checkout, search queries) để bảo toàn Crawl Budget.")
    add_bullet_item(doc, "Phân tầng XML Sitemap", "Tách sitemap theo post type (post-sitemap, page-sitemap, product-sitemap, category-sitemap), khai báo chuẩn xác trong Search Console.")
    add_bullet_item(doc, "Kiểm soát Meta Robots & Canonical", "Rà soát thẻ noindex/nofollow tránh chặn nhầm trang quan trọng; thiết lập rel=\"canonical\" chống trùng lặp nội dung.")
    add_bullet_item(doc, "Xử lý lỗi HTTP & Redirects", "Quét Screaming Frog định kỳ để sửa mã 404, 500 và loại bỏ các chuỗi chuyển hướng vòng lặp (Redirect Chains 301/302).")
    
    p_s2 = doc.add_paragraph()
    p_s2.paragraph_format.space_before = Pt(6)
    p_s2.paragraph_format.space_after = Pt(2)
    r_s2 = p_s2.add_run("1.2. Tối ưu Hiệu năng & Trải nghiệm Người dùng (Core Web Vitals)")
    r_s2.font.name = "Arial"
    r_s2.font.size = Pt(12)
    r_s2.font.bold = True
    r_s2.font.color.rgb = COLOR_NAVY
    
    add_bullet_item(doc, "Tối ưu LCP (< 2.5s)", "Chuyển đổi hình ảnh sang định dạng WebP/AVIF, cấu hình font-display: swap, tối ưu Critical CSS.")
    add_bullet_item(doc, "Tối ưu CLS (< 0.1)", "Thiết lập cố định kích thước width/height cho hình ảnh, khung video và banner quảng cáo, triệt tiêu hiện tượng giật vỡ layout.")
    add_bullet_item(doc, "Tối ưu INP (< 200ms)", "Trì hoãn (defer/async) các đoạn mã JavaScript không cần thiết, giải phóng luồng xử lý chính của trình duyệt.")
    add_bullet_item(doc, "Bộ nhớ đệm & CDN", "Kích hoạt nén Brotli/Gzip, thiết lập Cloudflare CDN và cấu hình bộ nhớ đệm trình duyệt (Browser Caching).")

    # Giai đoạn 2: On-page & Entity
    add_styled_heading(doc, "Giai Đoạn 2: Tối Ưu Hóa On-Page & Cấu Trúc Thực Thể (Schema JSON-LD)")
    
    add_bullet_item(doc, "Triển khai Plugin Tối Ưu Content SEO", "Cài đặt WordPress Plugin in-house do chuyên viên tự lập trình để tự động đo lường mật độ từ khóa thời gian thực, sinh mục lục bài viết (Table of Contents - TOC) chuẩn Semantic và tự xuất Schema FAQPage.")
    add_bullet_item(doc, "Chuẩn hóa Heading H1–H3", "Đảm bảo duy nhất 1 thẻ H1 chứa từ khóa trọng tâm, cấu trúc H2–H3 phân bổ logic và mạch lạc.")
    add_bullet_item(doc, "Thẻ Title & Meta Description", "Viết tiêu đề chuẩn 55–60 ký tự, bổ sung các yếu tố kích thích click CTR (con số, ưu đãi, năm cập nhật).")
    add_bullet_item(doc, "Cấu trúc URL chuẩn SEO", "Đường dẫn ngắn gọn, chứa từ khóa, không dấu, phân cấp rõ ràng theo danh mục.")
    add_bullet_item(doc, "SEO Hình ảnh chuyên sâu", "Tên file chuẩn không dấu, nén dưới 150KB, gắn thẻ Alt Text mô tả sát ngữ cảnh.")
    add_bullet_item(doc, "Khai báo Schema Entity", "Cài đặt Schema JSON-LD hoàn chỉnh: Organization, LocalBusiness, MedicalBusiness, Product, Review, FAQPage, BreadcrumbList.")

    # Giai đoạn 3: Topic Cluster & Nội dung
    add_styled_heading(doc, "Giai Đoạn 3: Nghiên Cứu Từ Khóa & Kiến Trúc Cụm Chủ Đề (Topic Cluster)")
    
    add_bullet_item(doc, "Nghiên cứu Search Intent", "Phân loại ý định tìm kiếm (Thông tin, So sánh, Mua hàng) để xây dựng nội dung đúng kỳ vọng của người dùng.")
    add_bullet_item(doc, "Mô hình Topic Cluster", "Xây dựng Trang Trụ Cột (Pillar Page) bao quát chủ đề chính và các bài viết vệ tinh (Cluster Content) phân tích chuyên sâu.")
    add_bullet_item(doc, "Mạng lưới Internal Linking", "Kết nối liên kết nội bộ chặt chẽ 2 chiều giữa Pillar và Cluster, giữ chân người dùng và điều hướng dòng sức mạnh PageRank.")
    add_bullet_item(doc, "Bản đồ Từ khóa (Keyword Mapping)", "Gán đúng từ khóa cho đúng URL đích duy nhất, triệt tiêu hiện tượng tự ăn thịt từ khóa (Keyword Cannibalization).")

    # Giai đoạn 4: Search Console & GA4
    add_styled_heading(doc, "Giai Đoạn 4: Vận Hành Google Search Console, GA4 & Báo Cáo")
    
    add_bullet_item(doc, "Giám sát Indexing Coverage", "Kiểm tra hằng tuần mục 'Trang' trên Search Console, khắc phục ngay các trang bị lỗi loại trừ lập chỉ mục.")
    add_bullet_item(doc, "Phân tích Hiệu suất Tìm kiếm", "Theo dõi biến động Tổng số lượt nhấp (Clicks), Lượt hiển thị (Impressions), CTR trung bình và Vị trí thứ hạng từ khóa.")
    add_bullet_item(doc, "Đo lường Chuyển đổi GA4", "Cài đặt tracking các sự kiện then chốt: Click gọi hotline, click Zalo, nộp form đăng ký tư vấn và giỏ hàng.")
    add_bullet_item(doc, "Báo cáo định kỳ minh bạch", "Cung cấp báo cáo tuần/tháng rõ ràng về thứ hạng từ khóa, tăng trưởng traffic và tỷ lệ chuyển đổi khách hàng tiềm năng.")

    # Lộ trình triển khai (Table)
    add_styled_heading(doc, "Bảng Lộ Trình Phân Bổ Công Việc Thực Tế (Action Roadmap)")
    
    table = doc.add_table(rows=4, cols=3)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    
    col_widths = [Inches(1.5), Inches(3.2), Inches(2.07)]
    headers = ["Giai Đoạn", "Nội Dung Công Việc Chi Tiết", "Kết Quả Đầu Ra Bàn Giao"]
    
    # Header row
    hdr_cells = table.rows[0].cells
    for i, h_text in enumerate(headers):
        hdr_cells[i].width = col_widths[i]
        set_cell_background(hdr_cells[i], "0B2342")
        set_cell_margins(hdr_cells[i], top=100, bottom=100, left=120, right=120)
        p = hdr_cells[i].paragraphs[0]
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        r = p.add_run(h_text)
        r.font.name = "Arial"
        r.font.size = Pt(11)
        r.font.bold = True
        r.font.color.rgb = RGBColor(255, 255, 255)
        
    data = [
        (
            "Tháng 1:\nNền tảng & Technical",
            "• Kiểm toán toàn diện website (Audit lỗi 404, redirect, canonical, robots.txt, sitemap)\n• Tối ưu Core Web Vitals (nén WebP, caching, CDN)\n• Khai báo Schema JSON-LD doanh nghiệp & Breadcrumbs",
            "✔ Website sạch lỗi kỹ thuật\n✔ Tốc độ tải < 2.0s (PageSpeed 90+)\n✔ Search Console chỉ mục sạch"
        ),
        (
            "Tháng 2:\nOn-Page & Nội Dung",
            "• Nghiên cứu từ khóa & lập Keyword Mapping theo Search Intent\n• Chuẩn hóa Heading H1–H3, Title, Meta Description các trang dịch vụ chủ lực\n• Triển khai cụm Topic Cluster đầu tiên",
            "✔ Hoàn thành bảng Keyword Master\n✔ Tối ưu 100% trang dịch vụ chính\n✔ Cụm nội dung đầu tiên lên trang"
        ),
        (
            "Tháng 3 – 6:\nTăng Trưởng & Chuyển Đổi",
            "• Đẩy mạnh sản xuất bài viết vệ tinh & Internal Linking\n• Tối ưu trải nghiệm chuyển đổi (CRO): Call, Zalo, Form\n• Báo cáo định kỳ phân tích từ khóa Top 1–10, tối ưu CTR và xử lý từ khóa chững hạng",
            "✔ Organic Traffic tăng trưởng đều đặn\n✔ Bộ từ khóa chính vào Top 1–10\n✔ Tăng mạnh tỷ lệ chuyển đổi khách hàng"
        ),
    ]
    
    for row_idx, (c0, c1, c2) in enumerate(data, start=1):
        row_cells = table.rows[row_idx].cells
        bg = "F9FAFB" if row_idx % 2 == 1 else "FFFFFF"
        for i, val in enumerate([c0, c1, c2]):
            row_cells[i].width = col_widths[i]
            set_cell_background(row_cells[i], bg)
            set_cell_margins(row_cells[i], top=100, bottom=100, left=120, right=120)
            
            # borders
            tcPr = row_cells[i]._tc.get_or_add_tcPr()
            bdr = parse_xml(f'<w:tcBorders {nsdecls("w")}><w:top w:val="single" w:sz="4" w:space="0" w:color="E2E8F0"/><w:bottom w:val="single" w:sz="4" w:space="0" w:color="E2E8F0"/><w:left w:val="single" w:sz="4" w:space="0" w:color="E2E8F0"/><w:right w:val="single" w:sz="4" w:space="0" w:color="E2E8F0"/></w:tcBorders>')
            tcPr.append(bdr)
            
            p = row_cells[i].paragraphs[0]
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(0)
            p.paragraph_format.line_spacing = 1.25
            r = p.add_run(val)
            r.font.name = "Arial"
            r.font.size = Pt(10.5)
            r.font.color.rgb = COLOR_TEXT
            if i == 0:
                r.font.bold = True

    # Cam kết nghề nghiệp
    add_styled_heading(doc, "Cam Kết & Nguyên Tắc Nghề Nghiệp")
    create_callout(
        doc,
        "Nguyên tắc làm việc của Lê Trần Thanh Uyên:",
        "100% kỹ thuật SEO Mũ Trắng (White-Hat SEO), phát triển bền vững theo đúng hướng dẫn của Google Search Essentials. Đã được kiểm chứng thực tế thành công qua cả ngành B2C (Thẩm mỹ viện, thương mại điện tử) lẫn B2B công nghiệp kỹ thuật cao (cautructhoian.vn, hoangthienscale.com, canhoangthien.com, thoianscale.com duy trì Top 1-5 bền vững suốt 5 năm). Luôn minh bạch và cung cấp đầy đủ quyền truy cập số liệu đo lường thực tế trên Google Search Console & GA4.",
        bg_hex="F8FAFC",
        border_color="0B2342"
    )

    save_document(doc, "Ke-Hoach-Cong-Viec-SEO-Le-Tran-Thanh-Uyen.docx")


# ==============================================================================
# 3. BUILD CV TỔNG HỢP (.DOCX)
# ==============================================================================
def build_cv_general_docx():
    doc = Document()
    
    for section in doc.sections:
        section.page_width = Inches(8.27)
        section.page_height = Inches(11.69)
        section.top_margin = Inches(0.7)
        section.bottom_margin = Inches(0.7)
        section.left_margin = Inches(0.75)
        section.right_margin = Inches(0.75)

    # Header block
    tbl_hdr = doc.add_table(rows=1, cols=1)
    tbl_hdr.alignment = WD_TABLE_ALIGNMENT.CENTER
    c_hdr = tbl_hdr.cell(0, 0)
    c_hdr.width = Inches(6.77)
    set_cell_background(c_hdr, "0B2342")
    set_cell_margins(c_hdr, top=200, bottom=200, left=240, right=240)
    
    p_name = c_hdr.paragraphs[0]
    p_name.paragraph_format.space_before = Pt(0)
    p_name.paragraph_format.space_after = Pt(2)
    r_name = p_name.add_run("LÊ TRẦN THANH UYÊN")
    r_name.font.name = "Arial"
    r_name.font.size = Pt(21)
    r_name.font.bold = True
    r_name.font.color.rgb = RGBColor(255, 255, 255)
    
    p_role = c_hdr.add_paragraph()
    p_role.paragraph_format.space_before = Pt(0)
    p_role.paragraph_format.space_after = Pt(8)
    r_role = p_role.add_run("WEB ADMINISTRATOR · WORDPRESS DEVELOPER · SEO SPECIALIST · GRAPHIC & UI/UX")
    r_role.font.name = "Arial"
    r_role.font.size = Pt(11.5)
    r_role.font.bold = True
    r_role.font.color.rgb = RGBColor(34, 197, 94)
    
    p_c = c_hdr.add_paragraph()
    p_c.paragraph_format.space_before = Pt(0)
    p_c.paragraph_format.space_after = Pt(0)
    r_c = p_c.add_run("🎂 Ngày sinh: 18/01/1986   |   📍 Địa chỉ: TP. Hồ Chí Minh\n📞 Điện thoại / Zalo: 0706 700 528   |   ✉️ Email: thanhuyenletran@gmail.com\n🌐 Website Portfolio: https://uyenpoe.github.io/cv-letranthanhuyen/   |   🐙 GitHub: https://github.com/UyenPoe")
    r_c.font.name = "Arial"
    r_c.font.size = Pt(10.5)
    r_c.font.color.rgb = RGBColor(229, 231, 235)

    # Giới thiệu
    add_styled_heading(doc, "Giới Thiệu Bản Thân (About Me)")
    create_callout(
        doc,
        "Hồ sơ năng lực:",
        "Hơn 3 năm kinh nghiệm thực tế trong phát triển website WordPress, quản trị hạ tầng web, triển khai SEO On-page/Technical và thiết kế đồ họa / giao diện UI/UX. Khả năng tự chủ trọn vẹn từ khâu phác thảo ý tưởng thiết kế đồ họa (Photoshop, Illustrator, Figma), dựng mã nguồn website chuẩn Responsive đến tối ưu hóa thứ hạng công cụ tìm kiếm và đo lường chuyển đổi thực tế.",
        bg_hex="F0FDF4",
        border_color="16A34A"
    )

    # Kỹ năng
    add_styled_heading(doc, "Kỹ Năng Chuyên Môn (Professional Skills)")
    add_bullet_item(doc, "Quản Trị & Phát Triển Web", "WordPress chuyên sâu, Elementor, WooCommerce, Google Blogspot (Custom XML & CRO), tự code WordPress Plugin tùy biến tối ưu Content SEO & Schema JSON-LD, tối ưu mã nguồn HTML5, CSS3, JavaScript, PHP, MySQL, Hosting/cPanel, Cloudflare.")
    add_bullet_item(doc, "SEO Website & Digital Marketing", "Technical SEO, kiểm toán Screaming Frog, Core Web Vitals, Schema JSON-LD, Topic Cluster, Content SEO, Google Search Console, Google Analytics 4, Rank Math.")
    add_bullet_item(doc, "Thiết Kế Đồ Họa & UI/UX Design", "Adobe Photoshop (chỉnh sửa ảnh, thiết kế banner, poster, ấn phẩm mạng xã hội), Adobe Illustrator (thiết kế vector, logo, bộ nhận diện thương hiệu), Figma (thiết kế UI/UX giao diện website, responsive wireframe).")

    # Kinh nghiệm
    add_styled_heading(doc, "Kinh Nghiệm Làm Việc (Work Experience)")
    p_j1 = doc.add_paragraph()
    p_j1.paragraph_format.space_before = Pt(8)
    p_j1.paragraph_format.space_after = Pt(2)
    r_j1 = p_j1.add_run("Web Administrator, SEO Specialist & Designer | Tự do & Doanh nghiệp")
    r_j1.font.name = "Arial"
    r_j1.font.size = Pt(12)
    r_j1.font.bold = True
    r_j1.font.color.rgb = COLOR_NAVY
    r_t1 = p_j1.add_run("   (2022 – Hiện tại)")
    r_t1.font.name = "Arial"
    r_t1.font.size = Pt(11)
    r_t1.font.italic = True
    r_t1.font.color.rgb = COLOR_MUTED

    add_bullet_item(doc, "Phát triển công cụ & Tối ưu SEO", "Tự lập trình WordPress Plugin tối ưu Content SEO (chấm điểm on-page theo thời gian thực, tự sinh mục lục TOC và chèn Schema FAQ), giúp chuẩn hóa 100% bài viết và đưa hơn 30+ từ khóa vào Top 5 Google.")
    add_bullet_item(doc, "Triển khai & Vận hành Web WordPress, Laravel & Blogspot", "Xây dựng và quản trị các website doanh nghiệp trên WordPress tự code theme, cổng danh bạ trên Laravel MVC (santhammy.com), website thương mại điện tử tự code WordPress theme từ đầu (smartphone.taichinhtaithanh.com) và Landing Page tư vấn tài chính trên Google Blogspot (taichinhtaithanh.com). Tối ưu tốc độ tải trang đạt điểm số 90+ trên Google PageSpeed Insights.")
    add_bullet_item(doc, "Thực hiện Chiến dịch SEO", "Lên kế hoạch bộ từ khóa, tối ưu On-page và Technical SEO, giúp website tăng trưởng lượng truy cập tự nhiên hơn 180% và đưa hơn 30+ từ khóa vào Top 5 Google.")
    add_bullet_item(doc, "Thiết kế Đồ họa & Nhận diện", "Thiết kế toàn bộ banner trang chủ, hình ảnh bài viết và ấn phẩm truyền thông mạng xã hội bằng Photoshop và Illustrator.")

    p_j2 = doc.add_paragraph()
    p_j2.paragraph_format.space_before = Pt(10)
    p_j2.paragraph_format.space_after = Pt(2)
    r_j2 = p_j2.add_run("Senior SEO Specialist & Industrial Web Administrator | Cụm Doanh Nghiệp Cơ Khí Thới An & Cân Hoàng Thiên")
    r_j2.font.name = "Arial"
    r_j2.font.size = Pt(12)
    r_j2.font.bold = True
    r_j2.font.color.rgb = COLOR_NAVY
    r_t2 = p_j2.add_run("   (2017 – 2022)")
    r_t2.font.name = "Arial"
    r_t2.font.size = Pt(11)
    r_t2.font.italic = True
    r_t2.font.color.rgb = COLOR_MUTED

    add_bullet_item(doc, "Quản trị hệ thống & SEO B2B tổng thể", "Phụ trách toàn bộ kỹ thuật và SEO cho 4 website công nghiệp nặng (cautructhoian.vn, hoangthienscale.com, thoianscale.com, canhoangthien.com). Đưa hơn 150+ từ khóa ngành cầu trục, cổng trục, palang, trạm cân ô tô xe tải và cảm biến lực loadcell lọt Top 1 – Top 5 Google suốt 5 năm.")
    add_bullet_item(doc, "Local SEO & Ấn phẩm Thiết kế B2B", "Tối ưu hóa Google Business Profile tại Quận 12 phủ sóng tiếp cận khách hàng doanh nghiệp tại TP.HCM và các KCN phía Nam; thiết kế trọn bộ catalogue thông số kỹ thuật (Spec Sheets) bằng Photoshop và Illustrator; vận hành cPanel bền vững.")

    # Dự án tiêu biểu
    add_styled_heading(doc, "Dự Án Tiêu Biểu Đã Triển Khai (Featured Projects)")
    add_bullet_item(doc, "Cầu Trục Thới An & Cân Hoàng Thiên (cautructhoian.vn · hoangthienscale.com)", "Cụm 4 website B2B thiết bị công nghiệp nặng: 150+ từ khóa Top 1-5 Google bền vững suốt 5 năm (2017-2022), Local Maps, catalogue thông số kỹ thuật.")
    add_bullet_item(doc, "WangSun Luxury (vienthammywangsun.com)", "Website phòng khám thẩm mỹ viện: tùy biến Flatsome Child Theme sang trọng, schema MedicalBusiness, tối ưu từ khóa dịch vụ tại TP.HCM, điểm PageSpeed 95+.")
    add_bullet_item(doc, "Tài Chính Tài Thành (taichinhtaithanh.com)", "Landing Page tài chính & vay tiêu dùng 24h trên Google Blogspot: công cụ tính khoản vay tương tác, form đăng ký tối ưu CRO, tên miền riêng.")
    add_bullet_item(doc, "Sàn Thẩm Mỹ (santhammy.com)", "Cổng danh bạ thẩm mỹ viện xây dựng trên Laravel MVC (PHP & MySQL): phân cấp quận/huyện, TTFB < 0.4s, lập chỉ mục 100% URLs trên Search Console.")
    add_bullet_item(doc, "Smartphone E-commerce (smartphone.taichinhtaithanh.com)", "Hệ thống bán lẻ điện thoại WordPress tự code theme từ đầu: tích hợp WooCommerce, bộ lọc sản phẩm thông số/giá, giỏ hàng, tối ưu điểm PageSpeed 90+.")
    add_bullet_item(doc, "Stone Sinks Vietnam (stonesinks.vn)", "Website thương mại chậu đá tự nhiên: hình ảnh nén WebP sắc nét, Product Schema chuẩn Google Merchant, tốc độ tải trang dưới 1.8s.")

    save_document(doc, "CV-Le-Tran-Thanh-Uyen.docx")


def build_cv_graphic_docx():
    """Tạo CV Chuyên Viên Thiết Kế Đồ Họa & Web UI/UX Designer dạng Word với font to rõ ràng."""
    doc = Document()
    
    # Page setup: A4, 0.7 inch margins
    for section in doc.sections:
        section.page_width = Inches(8.27)
        section.page_height = Inches(11.69)
        section.top_margin = Inches(0.7)
        section.bottom_margin = Inches(0.7)
        section.left_margin = Inches(0.75)
        section.right_margin = Inches(0.75)

    # Header block
    tbl_hdr = doc.add_table(rows=1, cols=1)
    tbl_hdr.alignment = WD_TABLE_ALIGNMENT.CENTER
    c_hdr = tbl_hdr.cell(0, 0)
    c_hdr.width = Inches(6.77)
    set_cell_background(c_hdr, "0B2342")
    set_cell_margins(c_hdr, top=200, bottom=200, left=240, right=240)
    
    p_name = c_hdr.paragraphs[0]
    p_name.paragraph_format.space_before = Pt(0)
    p_name.paragraph_format.space_after = Pt(2)
    r_name = p_name.add_run("LÊ TRẦN THANH UYÊN")
    r_name.font.name = "Arial"
    r_name.font.size = Pt(21)
    r_name.font.bold = True
    r_name.font.color.rgb = RGBColor(255, 255, 255)
    
    p_role = c_hdr.add_paragraph()
    p_role.paragraph_format.space_before = Pt(0)
    p_role.paragraph_format.space_after = Pt(8)
    r_role = p_role.add_run("GRAPHIC DESIGNER · WEB UI/UX SPECIALIST · ADOBE SUITE")
    r_role.font.name = "Arial"
    r_role.font.size = Pt(12)
    r_role.font.bold = True
    r_role.font.color.rgb = RGBColor(34, 197, 94)
    
    p_contact = c_hdr.add_paragraph()
    p_contact.paragraph_format.space_before = Pt(0)
    p_contact.paragraph_format.space_after = Pt(0)
    p_contact.paragraph_format.line_spacing = 1.3
    r_c = p_contact.add_run("🎂 Ngày sinh: 18/01/1986   |   📍 Địa chỉ: TP. Hồ Chí Minh\n📞 Điện thoại / Zalo: 0706 700 528   |   ✉️ Email: thanhuyenletran@gmail.com\n🌐 Portfolio: https://uyenpoe.github.io/cv-letranthanhuyen/   |   🐙 GitHub: https://github.com/UyenPoe")
    r_c.font.name = "Arial"
    r_c.font.size = Pt(10.5)
    r_c.font.color.rgb = RGBColor(229, 231, 235)

    # Tóm tắt
    add_styled_heading(doc, "Tóm Tắt Năng Lực Thiết Kế (Design Executive Summary)")
    p_sum = doc.add_paragraph()
    p_sum.paragraph_format.space_after = Pt(8)
    p_sum.paragraph_format.line_spacing = 1.3
    r_sum = p_sum.add_run(
        "Chuyên viên Graphic Designer & Web UI/UX Specialist với hơn 3 năm kinh nghiệm thực chiến thành thạo "
        "bộ công cụ Adobe Creative Suite (Adobe Photoshop, Adobe Illustrator) kết hợp tư duy thiết kế trải nghiệm "
        "người dùng (UI/UX) và kiến thức lập trình giao diện web. Trực tiếp thiết kế bộ nhận diện thương hiệu, "
        "hệ thống banner marketing quảng cáo, xử lý retouching hình ảnh thẩm mỹ viện / sản phẩm cao cấp, và xây dựng "
        "layout website chuẩn responsive tối ưu chuyển đổi (CRO). Am hiểu sâu sắc kỹ thuật tối ưu đồ họa web "
        "(WebP, SVG, nén ảnh chống vỡ layout) giúp sản phẩm số luôn giữ độ sắc nét đỉnh cao cùng tốc độ tải trang dưới 2s."
    )
    r_sum.font.name = "Arial"
    r_sum.font.size = Pt(11)
    r_sum.font.color.rgb = COLOR_TEXT

    # 5 Trụ cột kỹ năng
    add_styled_heading(doc, "Kỹ Năng Thiết Kế Chuyên Nghiệp (5 Trụ Cột Thực Chiến)")
    add_bullet_item(doc, "1. Adobe Photoshop Chuyên Sâu", "Retouching chân dung & thẩm mỹ viện, xử lý ảnh sản phẩm sắc nét (E-commerce), thiết kế Banner quảng cáo Google/Facebook, Poster & Standee sự kiện, phối cảnh Mockups sản phẩm chân thực, Color Grading và ánh sáng nghệ thuật.")
    add_bullet_item(doc, "2. Adobe Illustrator & Vector Design", "Thiết kế Logo & Brand Guidelines, hệ thống Iconography Vector (SVG), Infographic & biểu đồ trực quan, Typography & bố cục chữ nghệ thuật, ấn phẩm in ấn (Namecard, Brochure, Flyer), xuất file in ấn CMYK và Digital RGB chuẩn nét.")
    add_bullet_item(doc, "3. Thiết Kế Giao Diện Web UI/UX", "Wireframing & Prototype (Figma), bố cục Mobile-First Responsive, thiết kế Landing Page tài chính/thẩm mỹ, tối ưu tỷ lệ chuyển đổi (CRO Lead Form), Design System & bảng màu chuẩn web, Micro-interactions.")
    add_bullet_item(doc, "4. Tối Ưu Đồ Họa Web & Hiệu Năng", "Nén ảnh định dạng WebP chất lượng cao, tối ưu mã nguồn SVG siêu nhẹ, cố định tỷ lệ Aspect Ratio chống CLS, xuất ảnh đa độ phân giải Retina 2x/3x, phối hợp Semantic HTML5 & CSS3 Flexbox/Grid, Core Web Vitals chuẩn xanh.")
    add_bullet_item(doc, "5. Ứng Dụng Thực Chiến Vào Hệ Thống Web", "Thiết kế trọn gói giao diện & banner cho Viện thẩm mỹ WangSun Luxury, xây dựng Landing Page tài chính Tài Chính Tài Thành (taichinhtaithanh.com) tối ưu chuyển đổi CRO, Visual Design cho sàn thương mại điện tử chậu đá Stone Sinks Vietnam, giao diện cổng danh bạ Sàn Thẩm Mỹ (santhammy.com).")

    # Kinh nghiệm
    add_styled_heading(doc, "Kinh Nghiệm Thiết Kế Đồ Họa & UI/UX Thực Tế (Experience)")
    
    # Role 1
    p_j1 = doc.add_paragraph()
    p_j1.paragraph_format.space_before = Pt(8)
    p_j1.paragraph_format.space_after = Pt(2)
    r_j1 = p_j1.add_run("Lead Graphic & Web UI/UX Designer | Cụm Website Thẩm Mỹ & Đánh Giá TP.HCM")
    r_j1.font.name = "Arial"
    r_j1.font.size = Pt(12)
    r_j1.font.bold = True
    r_j1.font.color.rgb = COLOR_NAVY
    r_t1 = p_j1.add_run("   (2024 – Hiện tại)")
    r_t1.font.name = "Arial"
    r_t1.font.size = Pt(11)
    r_t1.font.italic = True
    r_t1.font.color.rgb = COLOR_MUTED

    add_bullet_item(doc, "Thiết kế Bộ nhận diện & Banner", "Sử dụng Illustrator và Photoshop sáng tạo hệ thống banner trang chủ, poster dịch vụ điều trị da, phẫu thuật thẩm mỹ theo phong cách sang trọng đẳng cấp cho Viện thẩm mỹ WangSun Luxury, Sàn Thẩm Mỹ, Review Làm Đẹp.")
    add_bullet_item(doc, "Retouching ảnh thẩm mỹ chuyên sâu", "Xử lý hình ảnh trước/sau liệu trình (Before/After), khử khuyết điểm làn da tự nhiên, cân bằng ánh sáng và màu sắc đạt chuẩn y khoa thẩm mỹ.")
    add_bullet_item(doc, "Thiết kế Giao diện UI/UX Web", "Xây dựng bố cục wireframe và layout hoàn chỉnh cho website phòng khám và cổng danh bạ, tối ưu trải nghiệm đọc trên mobile và tăng tỷ lệ click gọi tư vấn.")
    add_bullet_item(doc, "Tối ưu hóa hình ảnh web", "Chuyển đổi toàn bộ thư viện ảnh sang định dạng WebP, giảm 75% dung lượng tải trang mà vẫn giữ nguyên độ nét chi tiết cao.")

    # Role 2
    p_j2 = doc.add_paragraph()
    p_j2.paragraph_format.space_before = Pt(8)
    p_j2.paragraph_format.space_after = Pt(2)
    r_j2 = p_j2.add_run("Visual Product Designer & E-commerce UI/UX | Stone Sinks Vietnam (stonesinks.vn)")
    r_j2.font.name = "Arial"
    r_j2.font.size = Pt(12)
    r_j2.font.bold = True
    r_j2.font.color.rgb = COLOR_NAVY
    r_t2 = p_j2.add_run("   (2023 – 2024)")
    r_t2.font.name = "Arial"
    r_t2.font.size = Pt(11)
    r_t2.font.italic = True
    r_t2.font.color.rgb = COLOR_MUTED

    add_bullet_item(doc, "Retouch ảnh sản phẩm cao cấp", "Cắt lọc nền, chỉnh sửa vân đá tự nhiên, xử lý độ bóng và đổ bóng thực tế cho hàng trăm mẫu chậu đá granite, đá cuội bằng Photoshop.")
    add_bullet_item(doc, "Thiết kế Banner & Catalog số", "Thiết kế banner trượt homepage, catalogue sản phẩm điện tử và hình ảnh minh họa thông số kỹ thuật chi tiết bằng Illustrator.")
    add_bullet_item(doc, "Thiết kế Giao diện Giỏ hàng & Bộ lọc", "Tinh chỉnh trải nghiệm người dùng trang chi tiết sản phẩm, bộ lọc theo vân đá và luồng thanh toán nhanh gọn.")

    # Role 3
    p_j3 = doc.add_paragraph()
    p_j3.paragraph_format.space_before = Pt(8)
    p_j3.paragraph_format.space_after = Pt(2)
    r_j3 = p_j3.add_run("Industrial Graphic & Spec Catalog Designer | Cụm Doanh Nghiệp Cơ Khí Thới An & Cân Hoàng Thiên")
    r_j3.font.name = "Arial"
    r_j3.font.size = Pt(12)
    r_j3.font.bold = True
    r_j3.font.color.rgb = COLOR_NAVY
    r_t3 = p_j3.add_run("   (2017 – 2022)")
    r_t3.font.name = "Arial"
    r_t3.font.size = Pt(11)
    r_t3.font.italic = True
    r_t3.font.color.rgb = COLOR_MUTED

    add_bullet_item(doc, "Retouch ảnh máy móc & công trình công nghiệp", "Trực tiếp chụp ảnh thực tế tại nhà xưởng, sử dụng Photoshop tách nền, khử tạp âm hình ảnh, xử lý ánh sáng và đổ bóng cho thiết bị cầu trục, pa lăng và trạm cân xe tải sắc nét.")
    add_bullet_item(doc, "Thiết kế Catalogue B2B & Sơ đồ Kỹ thuật", "Sử dụng Illustrator vẽ sơ đồ cấu tạo cơ khí, bản vẽ kích thước dầm cầu trục, bảng thông số kỹ thuật (Spec Sheets) và profile công ty phục vụ nộp hồ sơ tham gia dự thầu.")

    # Minh chứng 7 dự án
    add_styled_heading(doc, "Minh Chứng Hiệu Quả Thiết Kế Qua 7 Dự Án Thực Tế (Featured Projects)")
    add_bullet_item(doc, "Cầu Trục Thới An & Cân Hoàng Thiên (cautructhoian.vn · hoangthienscale.com)", "Xử lý hình ảnh thiết bị xưởng cơ khí, thi công cầu trục & trạm cân xe tải bằng Photoshop; thiết kế trọn bộ catalogue thông số kỹ thuật B2B sắc nét bằng Illustrator (2017-2022).")
    add_bullet_item(doc, "WangSun Luxury (vienthammywangsun.com)", "Thiết kế nhận diện phong cách thẩm mỹ viện hoàng gia, tùy biến giao diện Flatsome Child Theme, phối màu vàng kim & xanh ngọc, retouching ảnh bác sĩ và khách hàng trước sau liệu trình sắc nét.")
    add_bullet_item(doc, "Tài Chính Tài Thành (taichinhtaithanh.com)", "Thiết kế Landing Page tài chính vay tiêu dùng: bố cục trực quan, biểu tượng vector tài chính, công cụ tính khoản vay tương tác, form đăng ký tối ưu chuyển đổi CRO.")
    add_bullet_item(doc, "Stone Sinks Vietnam (stonesinks.vn)", "Xử lý ánh sáng và chất liệu đá tự nhiên cho hàng trăm sản phẩm chậu đá, thiết kế catalogue số và banner quảng bá chương trình ưu đãi.")
    add_bullet_item(doc, "Smartphone E-commerce (smartphone.taichinhtaithanh.com)", "Thiết kế giao diện mua sắm điện thoại công nghệ hiện đại cho website WordPress tự code theme: phân cấp thông tin rõ ràng, thẻ sản phẩm tinh tế, bộ icon tính năng chi tiết chuẩn vector.")
    add_bullet_item(doc, "Sàn Thẩm Mỹ (santhammy.com)", "Thiết kế hệ thống cổng danh bạ thẩm mỹ viện: layout danh sách cơ sở, huy hiệu chứng nhận uy tín, thanh tìm kiếm thông minh và bản đồ định vị.")
    add_bullet_item(doc, "Review Làm Đẹp (review-lamdep.com)", "Thiết kế phong cách tạp chí làm đẹp thanh lịch: typography tinh tế, khung ảnh review chân thực, huy hiệu chấm điểm sao vàng nổi bật.")

    save_document(doc, "CV-Graphic-UIUX-Designer-Le-Tran-Thanh-Uyen.docx")


if __name__ == "__main__":
    print("Generating Word (.docx) documents...")
    build_cv_seo_docx()
    build_ke_hoach_seo_docx()
    build_cv_general_docx()
    build_cv_graphic_docx()
    print("All documents created successfully!")


