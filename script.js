// ==============================================================
// 1. CẤU HÌNH DỮ LIỆU & LINK GOOGLE SHEET
// ==============================================================

// 👇 LINK GOOGLE SCRIPT CỦA BẠN (Đã dán sẵn) 👇
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwy8a6W-U7e4VB62khY96TDAnlBZ0naAg8Ni74HnYdoaM3qqbt1Sz6oGRC0rE53s_ql/exec';

// DỮ LIỆU VIỆC LÀM (Đã làm sạch text)
const jobs = [
    {
        id: 1,
        title: "Nhân viên CSKH TPBank (Inbound)",
        bank: "TPBank",
        themeText: "text-purple-700",
        themeBg: "bg-purple-50",
        themeBtn: "bg-purple-600 hover:bg-purple-700",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
        type: "Full-time",
        salary: "7.000.000đ - 9.000.000đ", 
        location: "Hà Nội", 
        desc: [
            "Tiếp nhận và xử lý cuộc gọi đến, giải đáp thắc mắc khách hàng chuyên nghiệp.",
            "Tư vấn dịch vụ: mở thẻ, tài khoản, E-banking, các sản phẩm khác.",
            "LƯU Ý: Không bán hàng – Không áp chỉ tiêu doanh số."
        ],
        req: [
            "Nam/Nữ 18–35 tuổi, Tốt nghiệp Trung cấp trở lên (chấp nhận SV năm cuối).",
            "Giao tiếp tốt, giọng nói dễ nghe, không ngọng.",
            "Không yêu cầu kinh nghiệm – được đào tạo bài bản."
        ],
        ben: [
            "Thu nhập 7-9 triệu/tháng + Thưởng nóng.",
            "Hỗ trợ tài chính trong suốt quá trình đào tạo.",
            "Đóng BHXH, BHYT, BHTN đầy đủ; Du lịch hàng năm."
        ]
    },
    {
        id: 2,
        title: "Nhân viên CSKH MB Bank",
        bank: "MBBank",
        themeText: "text-blue-700",
        themeBg: "bg-blue-50",
        themeBtn: "bg-blue-700 hover:bg-blue-800",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Full-time",
        salary: "7.000.000đ - 9.000.000đ", 
        location: "Đống Đa, HN", 
        desc: [
            "Tiếp nhận cuộc gọi giải đáp thông tin dịch vụ thẻ MB Bank.",
            "Gọi ra cho khách hàng gọi nhỡ lên tổng đài (khi có yêu cầu).",
            "Không bán hàng, không sale."
        ],
        req: [
            "Tốt nghiệp Trung cấp trở lên (Chấp nhận chờ bằng).",
            "Nhanh nhẹn, hòa đồng, giọng nói chuẩn không ngọng."
        ],
        ben: [
            "Hỗ trợ 1.000.000đ khóa đào tạo (10 ngày).",
            "Làm việc tại Tòa nhà MBBank chuyên nghiệp, trẻ trung.",
            "Hưởng đầy đủ BHXH + BHYT, thưởng lễ tết."
        ]
    },
    {
        id: 3,
        title: "Chuyên viên Tư vấn Thẻ UOB",
        bank: "UOB",
        themeText: "text-rose-600",
        themeBg: "bg-rose-50",
        themeBtn: "bg-rose-600 hover:bg-rose-700",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Full-time",
        salary: "15 - 20 Triệu ++", 
        location: "Cầu Giấy, HN", 
        desc: [
            "Thực hiện cuộc gọi tư vấn thẻ ATM, thẻ tín dụng, khoản vay UOB theo Data công ty cấp.",
            "Trao đổi về Quyền lợi, CTKM đặc biệt dành cho khách hàng."
        ],
        req: [
            "18-35 tuổi, Không nợ xấu ngân hàng.",
            "Có kinh nghiệm từ 1 năm telesale/sale là lợi thế.",
            "Cầu thị, ham học hỏi, giao tiếp nhanh nhẹn."
        ],
        ben: [
            "Thu nhập 15-20tr++ (Lương cứng + Hoa hồng không giới hạn).",
            "Lộ trình thăng tiến lên Trưởng nhóm/Giám sát/Quản lý.",
            "Thưởng nóng, thưởng du lịch, giải thưởng từ đối tác."
        ]
    },
    {
        id: 4,
        title: "Nhân viên Tư vấn BIDV",
        bank: "BIDV",
        themeText: "text-emerald-600",
        themeBg: "bg-emerald-50",
        themeBtn: "bg-emerald-600 hover:bg-emerald-700",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Full-time",
        salary: "7.000.000đ - 8.000.000đ", 
        location: "Long Biên, HN", 
        desc: [
            "Gọi điện cho khách hàng theo Data từ BIDV cung cấp.",
            "Tư vấn giới thiệu CTKM, hướng dẫn mở thẻ, hoàn thiện hồ sơ.",
            "Cập nhật kết quả cuộc gọi lên hệ thống."
        ],
        req: [
            "Giọng nói chuẩn, không ngọng, kỹ năng giao tiếp tốt.",
            "Có trách nhiệm trong công việc."
        ],
        ben: [
            "Nhận 100% lương khi thử việc.",
            "Hỗ trợ chi phí đào tạo 700k/khóa/7 ngày.",
            "Đóng BHXH theo quy định, cơ hội thăng tiến."
        ]
    },
    {
        id: 5,
        title: "CSKH Ngân hàng LPBank",
        bank: "LPBank",
        themeText: "text-orange-600",
        themeBg: "bg-orange-50",
        themeBtn: "bg-orange-500 hover:bg-orange-600",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Full-time",
        salary: "7.000.000đ - 9.000.000đ", 
        location: "Đống Đa, HN", 
        desc: [
            "Tiếp nhận cuộc gọi, giải đáp thắc mắc khách hàng LPBank nhanh chóng.",
            "Tư vấn dịch vụ thẻ, TK, ngân hàng điện tử.",
            "Không bán hàng, không áp doanh số."
        ],
        req: [
            "Tốt nghiệp trung cấp trở lên, thành thạo tin học văn phòng.",
            "Giọng chuẩn miền Bắc, giao tiếp nhanh nhẹn."
        ],
        ben: [
            "Hỗ trợ 100k/ngày đào tạo (8 ngày).",
            "Thưởng lễ tết, sinh nhật, du lịch, teambuilding hàng năm.",
            "Đóng BHXH sau 2 tháng."
        ]
    },
    {
        id: 6,
        title: "Thực tập sinh Telesales UOB",
        bank: "UOB TTS",
        themeText: "text-indigo-600",
        themeBg: "bg-indigo-50",
        themeBtn: "bg-indigo-600 hover:bg-indigo-700",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Thực tập",
        salary: "Phụ cấp + Incentive", 
        location: "Cầu Giấy, HN", 
        desc: [
            "Gọi điện tư vấn theo data công ty cung cấp (100-200 data/ngày).",
            "Giới thiệu sản phẩm UOB theo kịch bản có sẵn."
        ],
        req: [
            "Sinh viên năm cuối hoặc chờ bằng, thực tập tối thiểu 3 tháng.",
            "Định hướng theo ngành Telesales hoặc Ngân hàng."
        ],
        ben: [
            "Phụ cấp 2.000.000 VNĐ/tháng + Incentive (250k - 1.250k).",
            "Hỗ trợ dấu mộc thực tập, đào tạo bài bản.",
            "Cơ hội trở thành Nhân viên chính thức."
        ]
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
        salary: "3.000.000đ - 5.000.000đ", 
        location: "Hà Nội", 
        desc: [
            "Tiếp nhận cuộc gọi đến, tư vấn dịch vụ TPBank chuyên nghiệp.",
            "Không yêu cầu bán hàng – Không áp doanh số."
        ],
        req: [
            "Nam/Nữ 18-35 tuổi (Chấp nhận SV năm 3, 4).",
            "Không yêu cầu kinh nghiệm, giọng dễ nghe."
        ],
        ben: [
            "Hỗ trợ 120.000đ/ngày đào tạo (7 ngày hành chính).",
            "Cơ hội trở thành nhân viên chính thức."
        ]
    }
];

// ==============================================================
// 2. RENDER GIAO DIỆN (VIEW)
// ==============================================================
function renderJobs(data) {
    const container = document.getElementById('jobList');
    const noJob = document.getElementById('noJobFound');
    
    container.innerHTML = '';
    
    if(data.length === 0) {
        noJob.classList.remove('hidden');
        return;
    } else {
        noJob.classList.add('hidden');
    }

    data.forEach((job, index) => {
        const cardHTML = `
            <div class="bg-white rounded-2xl shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden group border border-slate-100 flex flex-col h-full transform hover:-translate-y-2"
                 data-aos="fade-up" data-aos-delay="${index * 100}">
                
                <div class="h-48 overflow-hidden relative cursor-pointer" onclick="openModal(${job.id})">
                    <img src="${job.image}" alt="${job.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 z-10">
                        <span class="bg-white/95 backdrop-blur-md ${job.themeText} px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-widest shadow-lg">
                            ${job.bank}
                        </span>
                    </div>
                </div>

                <div class="p-6 flex flex-col flex-grow relative bg-white">
                    <h3 class="text-xl font-bold text-slate-800 mb-4 group-hover:${job.themeText} transition-colors cursor-pointer leading-snug line-clamp-2" 
                        onclick="openModal(${job.id})">
                        ${job.title}
                    </h3>

                    <div class="space-y-3 mb-8">
                        <div class="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:border-slate-200 transition">
                            <div class="w-8 shrink-0 flex justify-center"><i class="fas fa-money-bill-wave ${job.themeText}"></i></div>
                            <span class="font-bold text-slate-800 ml-1">${job.salary}</span>
                        </div>
                        <div class="flex items-center text-sm text-slate-500 px-2">
                            <div class="w-6 shrink-0 flex justify-center"><i class="fas fa-map-marker-alt text-slate-400"></i></div>
                            <span class="ml-2 truncate">${job.location}</span>
                        </div>
                        <div class="flex items-center text-sm text-slate-500 px-2">
                            <div class="w-6 shrink-0 flex justify-center"><i class="fas fa-clock text-slate-400"></i></div>
                            <span class="ml-2">${job.type}</span>
                        </div>
                    </div>

                    <div class="mt-auto pt-5 border-t border-slate-100">
                        <button onclick="openModal(${job.id})" 
                                class="w-full py-3.5 rounded-xl text-white font-bold shadow-md transform transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group-active:scale-95 ${job.themeBtn}">
                            Xem chi tiết <i class="fas fa-arrow-right text-xs opacity-80 group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// ==============================================================
// 3. LOGIC XỬ LÝ SỰ KIỆN (CONTROLLER)
// ==============================================================

function filterJobs() {
    const bankVal = document.getElementById('filterBank').value;
    const typeVal = document.getElementById('filterType').value;

    const filtered = jobs.filter(job => {
        const matchBank = bankVal === 'all' || job.bank.includes(bankVal);
        const matchType = typeVal === 'all' || job.type === typeVal;
        return matchBank && matchType;
    });

    renderJobs(filtered);
}

// Modal Variables
const modal = document.getElementById('jobModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');

function openModal(id) {
    const job = jobs.find(j => j.id === id);
    if (!job) return;

    // A. Điền thông tin
    document.getElementById('modalTitle').innerText = job.title;
    document.getElementById('modalLoc').innerText = job.location;
    
    const bankLabel = document.getElementById('modalBank');
    bankLabel.innerText = job.bank;
    bankLabel.className = `inline-block px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest mb-4 shadow-sm ${job.themeBg} ${job.themeText}`;

    const salaryText = document.getElementById('modalSalary');
    salaryText.innerText = job.salary;
    salaryText.className = `font-bold text-lg ${job.themeText}`;

    const renderList = (arr, elementId) => {
        const el = document.getElementById(elementId);
        if(el) {
            el.innerHTML = arr.map(item => `<li class="mb-3 leading-relaxed">${item}</li>`).join('');
        }
    };
    
    renderList(job.desc, 'modalDesc');
    renderList(job.req, 'modalReq');
    renderList(job.ben, 'modalBen');

    // B. Hiển thị Modal
    modal.classList.remove('hidden');
    setTimeout(() => {
        modalOverlay.classList.remove('opacity-0');
        modalContent.classList.remove('opacity-0', 'scale-95');
        modalContent.classList.add('scale-100');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('opacity-0', 'scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; 
    }, 300);
}

modalOverlay.addEventListener('click', closeModal);

// ==============================================================
// 4. SUBMIT FORM - GỬI VỀ GOOGLE SHEETS (MODE: NO-CORS)
// ==============================================================
function submitForm(e) {
    e.preventDefault();
    
    const btn = e.target.querySelector('button');
    const originalContent = btn.innerHTML;
    const form = e.target;
    
    // 1. CHUẨN BỊ DỮ LIỆU
    // Sử dụng FormData để tự động lấy các trường có name="hoten", name="sdt",...
    const formData = new FormData(form);

    // 2. HIỆU ỨNG LOADING
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Đang gửi...';
    btn.disabled = true;
    btn.classList.add('opacity-80', 'cursor-not-allowed');

    // 3. GỬI DỮ LIỆU BẰNG FETCH (QUAN TRỌNG: mode: 'no-cors')
    // 'no-cors' giúp vượt qua lỗi chặn của trình duyệt khi gửi tới Google Script
    fetch(GOOGLE_SCRIPT_URL, { 
        method: 'POST', 
        body: formData,
        mode: 'no-cors' 
    })
    .then(() => {
        // Vì no-cors trả về phản hồi "đen" (opaque), ta mặc định là thành công nếu không có lỗi mạng
        alert('🎉 CHÚC MỪNG!\nHồ sơ của bạn đã được gửi thành công đến hệ thống BELLSYSTEM24.');
        
        // Reset form và đóng modal
        btn.innerHTML = originalContent;
        btn.disabled = false;
        btn.classList.remove('opacity-80', 'cursor-not-allowed');
        form.reset();
        closeModal();
    })
    .catch(error => {
        console.error('Lỗi:', error);
        alert('⚠️ Có lỗi kết nối. Vui lòng kiểm tra mạng và thử lại.');
        
        btn.innerHTML = originalContent;
        btn.disabled = false;
        btn.classList.remove('opacity-80', 'cursor-not-allowed');
    });
}

// KHỞI CHẠY
document.addEventListener('DOMContentLoaded', () => {
    renderJobs(jobs);
});