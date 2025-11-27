// ==========================================
// 1. DỮ LIỆU CÔNG VIỆC (DATA SOURCE)
// ==========================================
const jobs = [
    {
        id: 1,
        title: "Nhân viên CSKH TPBank (Inbound)",
        bank: "TPBank",
        // Cấu hình màu sắc thương hiệu (Tím)
        themeText: "text-purple-700",
        themeBg: "bg-purple-50",
        themeBtn: "bg-purple-600 hover:bg-purple-700",
        // Ảnh đại diện văn phòng hiện đại
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
        type: "Full-time",
        salary: "7.000.000đ - 9.000.000đ", // [cite: 7]
        location: "Hà Nội", // [cite: 26-28]
        desc: [
            "Tiếp nhận và xử lý cuộc gọi đến, giải đáp thắc mắc khách hàng chuyên nghiệp[cite: 3].",
            "Tư vấn dịch vụ: mở thẻ, tài khoản, E-banking, các sản phẩm khác[cite: 4].",
            "Không yêu cầu bán hàng – Không áp chỉ tiêu doanh số[cite: 5]."
        ],
        req: [
            "Nam/Nữ 18–35 tuổi, Tốt nghiệp Trung cấp trở lên (chấp nhận SV năm cuối)[cite: 16].",
            "Giao tiếp tốt, giọng nói dễ nghe, không ngọng[cite: 17].",
            "Không yêu cầu kinh nghiệm – được đào tạo bài bản[cite: 18]."
        ],
        ben: [
            "Thu nhập 7-9 triệu/tháng + Thưởng nóng[cite: 7, 13].",
            "Hỗ trợ tài chính trong suốt quá trình đào tạo[cite: 9].",
            "Đóng BHXH, BHYT, BHTN đầy đủ; Du lịch, Teambuilding hàng năm[cite: 12, 14]."
        ],
        timeLoc: "Xoay ca 07h00 – 22h00 (6 ngày/tuần) tại 44 Lê Ngọc Hân / 155 Đội Cấn / Ngoại Giao Đoàn [cite: 20, 26-28]."
    },
    {
        id: 2,
        title: "Nhân viên CSKH MB Bank",
        bank: "MBBank",
        // Cấu hình màu sắc (Xanh dương đậm)
        themeText: "text-blue-700",
        themeBg: "bg-blue-50",
        themeBtn: "bg-blue-700 hover:bg-blue-800",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Full-time",
        salary: "7.000.000đ - 9.000.000đ", // [cite: 144]
        location: "Đống Đa, HN", // [cite: 136]
        desc: [
            "Tiếp nhận cuộc gọi giải đáp thông tin dịch vụ thẻ MB Bank[cite: 133].",
            "Gọi ra cho khách hàng gọi nhỡ lên tổng đài (khi có yêu cầu)[cite: 134].",
            "Không bán hàng, không sale[cite: 135]."
        ],
        req: [
            "Tốt nghiệp Trung cấp trở lên (Chấp nhận chờ bằng)[cite: 150].",
            "Nhanh nhẹn, hòa đồng, giọng nói chuẩn không ngọng[cite: 151, 152]."
        ],
        ben: [
            "Hỗ trợ 1.000.000đ khóa đào tạo (10 ngày)[cite: 145].",
            "Làm việc tại Tòa nhà MBBank chuyên nghiệp, trẻ trung[cite: 146].",
            "Hưởng đầy đủ BHXH + BHYT, thưởng lễ tết[cite: 148]."
        ],
        timeLoc: "Xoay ca luân phiên (có ca đêm) tại 21 Cát Linh, Đống Đa, HN[cite: 136, 137]."
    },
    {
        id: 3,
        title: "Chuyên viên Tư vấn Thẻ UOB",
        bank: "UOB",
        // Cấu hình màu sắc (Đỏ hồng - Brand UOB)
        themeText: "text-rose-600",
        themeBg: "bg-rose-50",
        themeBtn: "bg-rose-600 hover:bg-rose-700",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Full-time",
        salary: "15 - 20 Triệu ++", // [cite: 108]
        location: "Cầu Giấy, HN", // [cite: 128]
        desc: [
            "Thực hiện cuộc gọi tư vấn thẻ ATM, thẻ tín dụng, khoản vay UOB theo Data công ty cấp[cite: 103, 104].",
            "Trao đổi về Quyền lợi, CTKM đặc biệt dành cho khách hàng[cite: 105]."
        ],
        req: [
            "18-35 tuổi, Không nợ xấu ngân hàng[cite: 117, 118].",
            "Có kinh nghiệm từ 1 năm telesale/sale là lợi thế[cite: 121].",
            "Cầu thị, ham học hỏi, giao tiếp nhanh nhẹn[cite: 119, 120]."
        ],
        ben: [
            "Thu nhập 15-20tr++ (Lương cứng + Hoa hồng không giới hạn)[cite: 108].",
            "Lộ trình thăng tiến lên Trưởng nhóm/Giám sát/Quản lý[cite: 109].",
            "Thưởng nóng, thưởng du lịch, giải thưởng từ đối tác[cite: 114]."
        ],
        timeLoc: "Giờ hành chính T2-T6 (08:00-17:00), 2 ngày T7/tháng tại 1A Vũ Phạm Hàm[cite: 125, 126, 128]."
    },
    {
        id: 4,
        title: "Nhân viên Tư vấn BIDV",
        bank: "BIDV",
        // Cấu hình màu sắc (Xanh ngọc lục bảo - Brand BIDV)
        themeText: "text-emerald-600",
        themeBg: "bg-emerald-50",
        themeBtn: "bg-emerald-600 hover:bg-emerald-700",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Full-time",
        salary: "7.000.000đ - 8.000.000đ", // [cite: 38]
        location: "Long Biên, HN", // [cite: 51]
        desc: [
            "Gọi điện cho khách hàng theo Data từ BIDV cung cấp[cite: 32].",
            "Tư vấn giới thiệu CTKM, hướng dẫn mở thẻ, hoàn thiện hồ sơ[cite: 33, 34].",
            "Cập nhật kết quả cuộc gọi lên hệ thống[cite: 35]."
        ],
        req: [
            "Giọng nói chuẩn, không ngọng, kỹ năng giao tiếp tốt[cite: 44, 45].",
            "Có trách nhiệm trong công việc[cite: 45]."
        ],
        ben: [
            "Nhận 100% lương khi thử việc[cite: 39].",
            "Hỗ trợ chi phí đào tạo 700k/khóa/7 ngày[cite: 40].",
            "Đóng BHXH theo quy định, cơ hội thăng tiến[cite: 41, 42]."
        ],
        timeLoc: "Giờ hành chính 08h00 - 17h30 (T2-T7), nghỉ CN tại BIDV Tower 545 Nguyễn Văn Cừ[cite: 47, 49, 51]."
    },
    {
        id: 5,
        title: "CSKH Ngân hàng LPBank",
        bank: "LPBank",
        // Cấu hình màu sắc (Cam vàng - Brand LPBank)
        themeText: "text-orange-600",
        themeBg: "bg-orange-50",
        themeBtn: "bg-orange-500 hover:bg-orange-600",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Full-time",
        salary: "7.000.000đ - 9.000.000đ", // [cite: 160]
        location: "Đống Đa, HN", // [cite: 184]
        desc: [
            "Tiếp nhận cuộc gọi, giải đáp thắc mắc khách hàng LPBank nhanh chóng[cite: 156].",
            "Tư vấn dịch vụ thẻ, TK, ngân hàng điện tử[cite: 157].",
            "Không bán hàng, không áp doanh số[cite: 158]."
        ],
        req: [
            "Tốt nghiệp trung cấp trở lên, thành thạo tin học văn phòng[cite: 169, 170].",
            "Giọng chuẩn miền Bắc, giao tiếp nhanh nhẹn, tư duy dịch vụ tốt[cite: 171]."
        ],
        ben: [
            "Hỗ trợ 100k/ngày đào tạo (8 ngày)[cite: 162].",
            "Thưởng lễ tết, sinh nhật, du lịch, teambuilding hàng năm[cite: 166, 167].",
            "Đóng BHXH sau 2 tháng[cite: 165]."
        ],
        timeLoc: "Xoay ca (6 ca/tuần) tại 135 Xã Đàn, Hà Nội[cite: 174, 184]."
    },
    {
        id: 6,
        title: "Thực tập sinh Telesales UOB",
        bank: "UOB TTS",
        // Cấu hình màu sắc (Xám Indigo cho TTS)
        themeText: "text-indigo-600",
        themeBg: "bg-indigo-50",
        themeBtn: "bg-indigo-600 hover:bg-indigo-700",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Thực tập",
        salary: "Phụ cấp + Incentive", // [cite: 92, 93]
        location: "Cầu Giấy, HN", // [cite: 78]
        desc: [
            "Gọi điện tư vấn theo data công ty cung cấp (100-200 data/ngày)[cite: 80].",
            "Giới thiệu sản phẩm UOB theo kịch bản có sẵn[cite: 83]."
        ],
        req: [
            "Sinh viên năm cuối hoặc chờ bằng, thực tập tối thiểu 3 tháng[cite: 87].",
            "Định hướng theo ngành Telesales hoặc Ngân hàng[cite: 90]."
        ],
        ben: [
            "Phụ cấp 2.000.000 VNĐ/tháng + Incentive (250k - 1.250k)[cite: 92, 93].",
            "Hỗ trợ dấu mộc thực tập, đào tạo bài bản[cite: 94, 97].",
            "Cơ hội trở thành Nhân viên chính thức[cite: 96]."
        ],
        timeLoc: "Full-time T2-T6 (8h30-17h30), làm 2 thứ 7/tháng tại 2A Vũ Phạm Hàm[cite: 78]."
    },
    {
        id: 7,
        title: "Nhân viên CSKH TPBank (Part-time)",
        bank: "TPBank",
        themeText: "text-purple-600",
        themeBg: "bg-purple-50",
        themeBtn: "bg-purple-600 hover:bg-purple-700",
        image: "https://images.unsplash.com/photo-1521791136064-7985c2717883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Part-time",
        salary: "3.000.000đ - 5.000.000đ", // [cite: 59]
        location: "Hà Nội", // [cite: 72]
        desc: [
            "Tiếp nhận cuộc gọi đến, tư vấn dịch vụ TPBank chuyên nghiệp[cite: 55, 56].",
            "Không yêu cầu bán hàng – Không áp doanh số[cite: 57]."
        ],
        req: [
            "Nam/Nữ 18-35 tuổi (Chấp nhận SV năm 3, 4)[cite: 65].",
            "Không yêu cầu kinh nghiệm, giọng dễ nghe[cite: 66, 67]."
        ],
        ben: [
            "Hỗ trợ 120.000đ/ngày đào tạo (7 ngày hành chính)[cite: 61].",
            "Cơ hội trở thành nhân viên chính thức[cite: 63]."
        ],
        timeLoc: "Ca tối: 17h-21h hoặc 18h-22h. Địa điểm linh hoạt (HBT/Ba Đình/Bắc Từ Liêm)[cite: 69, 71]."
    }
];

// ==========================================
// 2. RENDER JOBS (HIỂN THỊ RA MÀN HÌNH)
// ==========================================
function renderJobs(data) {
    const container = document.getElementById('jobList');
    const noJob = document.getElementById('noJobFound');
    
    // Xóa nội dung cũ
    container.innerHTML = '';
    
    // Kiểm tra nếu không có job nào
    if(data.length === 0) {
        noJob.classList.remove('hidden');
        return;
    } else {
        noJob.classList.add('hidden');
    }

    // Duyệt qua từng job và tạo HTML
    data.forEach((job, index) => {
        const cardHTML = `
            <div class="bg-white rounded-2xl shadow-card hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-slate-100 flex flex-col h-full"
                 data-aos="fade-up" data-aos-delay="${index * 100}">
                
                <div class="h-44 overflow-hidden relative">
                    <img src="${job.image}" alt="${job.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                    
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                    <div class="absolute bottom-4 left-4">
                        <span class="bg-white/95 backdrop-blur-sm ${job.themeText} px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md">
                            ${job.bank}
                        </span>
                    </div>
                </div>

                <div class="p-6 flex flex-col flex-grow relative">
                    <h3 class="text-xl font-bold text-slate-800 mb-4 group-hover:${job.themeText} transition-colors cursor-pointer leading-snug" 
                        onclick="openModal(${job.id})">
                        ${job.title}
                    </h3>

                    <div class="space-y-3 mb-8">
                        <div class="flex items-center text-sm text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                            <div class="w-8 flex justify-center"><i class="fas fa-money-bill-wave ${job.themeText}"></i></div>
                            <span class="font-bold text-slate-800 ml-2">${job.salary}</span>
                        </div>
                        <div class="flex items-center text-sm text-slate-600 px-2">
                            <div class="w-6 flex justify-center"><i class="fas fa-map-marker-alt text-slate-400"></i></div>
                            <span class="ml-2 truncate">${job.location}</span>
                        </div>
                        <div class="flex items-center text-sm text-slate-600 px-2">
                            <div class="w-6 flex justify-center"><i class="fas fa-clock text-slate-400"></i></div>
                            <span class="ml-2">${job.type}</span>
                        </div>
                    </div>

                    <div class="mt-auto pt-4 border-t border-slate-100">
                        <button onclick="openModal(${job.id})" 
                                class="w-full py-3 rounded-xl text-white font-bold shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2 ${job.themeBtn}">
                            Xem chi tiết <i class="fas fa-arrow-right text-xs opacity-80"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// ==========================================
// 3. FILTER LOGIC (BỘ LỌC)
// ==========================================
function filterJobs() {
    const bankVal = document.getElementById('filterBank').value;
    const typeVal = document.getElementById('filterType').value;

    const filtered = jobs.filter(job => {
        // Logic lọc:
        // bank.includes vì job UOB có tên là "UOB" và "UOB TTS", 
        // nên chọn UOB sẽ ra cả 2.
        const matchBank = bankVal === 'all' || job.bank.includes(bankVal);
        const matchType = typeVal === 'all' || job.type === typeVal;
        return matchBank && matchType;
    });

    renderJobs(filtered);
}

// ==========================================
// 4. MODAL LOGIC (POPUP CHI TIẾT)
// ==========================================
const modal = document.getElementById('jobModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');

function openModal(id) {
    const job = jobs.find(j => j.id === id);
    if (!job) return;

    // A. ĐIỀN DỮ LIỆU CƠ BẢN
    document.getElementById('modalTitle').innerText = job.title;
    document.getElementById('modalLoc').innerText = job.location;
    
    // B. XỬ LÝ STYLE ĐỘNG CHO MODAL (Reset class cũ & thêm class mới)
    
    // 1. Badge Ngân hàng
    const bankLabel = document.getElementById('modalBank');
    bankLabel.innerText = job.bank;
    // Reset toàn bộ class và gán class mới
    bankLabel.className = `inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-3 ${job.themeBg} ${job.themeText}`;

    // 2. Mức lương (Tô màu theo brand)
    const salaryText = document.getElementById('modalSalary');
    salaryText.innerText = job.salary;
    salaryText.className = `font-bold text-lg ${job.themeText}`;

    // C. RENDER LIST (Mô tả, Yêu cầu, Quyền lợi)
    const renderList = (arr, elementId) => {
        const el = document.getElementById(elementId);
        if(el) {
            el.innerHTML = arr.map(item => `<li class="mb-2 leading-relaxed">${item}</li>`).join('');
        }
    };
    
    renderList(job.desc, 'modalDesc');
    renderList(job.req, 'modalReq');
    renderList(job.ben, 'modalBen');

    // D. HIỂN THỊ MODAL VỚI ANIMATION
    modal.classList.remove('hidden');
    
    // Timeout nhỏ để trình duyệt kịp render trước khi đổi opacity (tạo hiệu ứng fade)
    setTimeout(() => {
        modalOverlay.classList.remove('opacity-0');
        modalContent.classList.remove('opacity-0', 'scale-95');
        modalContent.classList.add('scale-100');
    }, 10);
    
    // Khóa cuộn trang chính khi mở popup
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    // Hiệu ứng đóng
    modalOverlay.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('opacity-0', 'scale-95');

    // Đợi 300ms cho hiệu ứng chạy xong mới ẩn div
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Mở lại cuộn trang
    }, 300);
}

// Đóng khi click ra vùng đen mờ
modalOverlay.addEventListener('click', closeModal);

// ==========================================
// 5. SUBMIT FORM (MOCKUP)
// ==========================================
function submitForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerHTML;
    
    // Hiệu ứng Loading
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Đang gửi...';
    btn.disabled = true;
    btn.classList.add('opacity-75', 'cursor-not-allowed');

    // Giả lập gửi dữ liệu mất 1.5s
    setTimeout(() => {
        alert('✅ Nộp hồ sơ thành công!\nBộ phận tuyển dụng Bellsystem24 sẽ liên hệ bạn trong 24h làm việc.');
        
        // Reset trạng thái nút
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.classList.remove('opacity-75', 'cursor-not-allowed');
        
        // Reset form
        e.target.reset();
        
        // Đóng modal
        closeModal();
    }, 1500);
}

// ==========================================
// 6. KHỞI CHẠY KHI TẢI TRANG
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderJobs(jobs);
});