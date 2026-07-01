import { NextRequest, NextResponse } from 'next/server';
import axios from "gorth-base-structure/cores/axios"

export async function GET(request) {
  const url = "https://xoso.com.vn/ThongKeAjax/AjaxThongKeGiaiDacBiet?lotteryId=0&dateFrom=22%2F06%2F2026&dateTo=01%2F07%2F2026&num=0"
  
  try {
    const response = axios.get(url,
      {
        headers: {
          "authority": "xoso.com.vn",
          "accept": "*/*",
          // Ép lấy gzip/deflate để Axios tự giải nén mượt mà, bỏ qua zstd/br gây lỗi font/rỗng
          "accept-encoding": "gzip, deflate", 
          "accept-language": "en;q=0.5",
          // Sử dụng chính xác link referer trang thống kê bạn vừa gửi
          "cookie": `g_state={"i_l":0,"i_ll":1782904333459,"i_b":"fyLv6+s6H9w6W+tx7dZIwPO55RQqNmaaVmKl8SS7MC8","i_e":{"enable_itp_optimization":24},"i_et":1782904333459}`,
          "referer": "https://xoso.com.vn/thong-ke-giai-dac-biet.html",
          "sec-ch-ua": '"Brave";v="149", "Chromium";v="149", "Not)A;Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "sec-gpc": "1",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36",
          "x-requested-with": "XMLHttpRequest"
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity
      }
    );

    return NextResponse.json({ data: response.data });
  } catch (error) {
    console.error("Lỗi gọi API:", error.message);
    return NextResponse.json(
      { error: "Không thể lấy dữ liệu từ server" },
      { status: error.response?.status || 500 }
    );
  }
}