// $(document).ready(function() {
//     var envelope = $("#envelope");
//     var btn_open = $("#open");
//     var btn_reset = $("#reset");

//     envelope.click(function() {
//         open();
//     });
//     btn_open.click(function() {
//         open();
//     });
//     btn_reset.click(function() {
//         close();
//     });

//     function open() {
//         envelope.addClass("open")
//             .removeClass("close");
//     }

//     function close() {
//         envelope.addClass("close")
//             .removeClass("open");
//     }

// })




$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    //  envelope ให้เปิด (แสดง)
    envelope.click(function() {
        open();
    });

    // ปุ่ม open ให้เปิด envelope
    btn_open.click(function() {
        open();
    });

    // ปุ่ม reset ให้ทำการรีโหลดหน้าเว็บใหม่ทั้งหมด
    btn_reset.click(function() {
        location.reload(); // รีโหลดหน้าเว็บทั้งหมด
    });

    // ฟังก์ชันเปิด envelope
    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    // ฟังก์ชันปิด envelope
    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }
});



