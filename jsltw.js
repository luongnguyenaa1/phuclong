function KiemTra() {
    if (frm.NoiDung.value.length > 200)
    alert("Bạn đã gõ qúa số ký tự cho phép!");
    frm.SoKyTu.value = frm.NoiDung.value.length;
    }