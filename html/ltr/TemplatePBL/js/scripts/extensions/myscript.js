const flashData = $('.flash-data').data('flashdata');
if (flashData) {
    Swal({
        title: 'Terimakasih',
        text: 'Data Berhasil ' + flashData,
        type: 'success'
    });
}
const flashDataGagal = $('.flash-data-gagal').data('flashdata');
if (flashDataGagal) {
    Swal({
        title: 'Mohon Maaf ',
        text: 'Data Gagal  ' + flashDataGagal,
        type: 'warning'
    });
}

// tombol-ubah
$('.tombol-ubah').on('click', function (e) {
    e.preventDefault();
	const href = $(this).attr('href');
    Swal({
        title: 'Apakah anda yakin',
        text: "data SKR akan diUBAH ?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ubah Data!'
    }).then((result) => {
        if (result.value) {
		$('#editSkrModel').modal('show');
			var tr = $(this).closest('tr') // Cari tag tr paling terdekat
		var NomorUji = tr.find('.NomorUji-value').val() // Ambil NomorUji dari input type hidden
		var NomorKendaraan = tr.find('.NomorKendaraan-value').val() // Ambil NomorKendaraan dari input type hidden
		var NamaPemilik = tr.find('.NamaPemilik-value').val() // Ambil NamaPemilik dari input type hidden
		
		var TanggalSKR = tr.find('.TanggalSKR-value').val() // Ambil TanggalSKR dari input type hidden
		var TanggalMatiUji = tr.find('.TanggalMatiUji-value').val() 
		var JenisLayananUji = tr.find('.JenisLayananUji-value').val() 
		var TandaLulusUji = tr.find('.TandaLulusUji-value').val() 
		var PilihanUjiTeknis = tr.find('.PilihanUjiTeknis-value').val() 
		var ambilIDSkr = tr.find('.ambilIDSkr-value').val() 
		
		$('#dapatIDSkr').val(ambilIDSkr)
		$('#gantiNomorUji').val(NomorUji) // Set value dari textbox NomorUji yang ada di form
		$('#gantiNomorKendaraan').val(NomorKendaraan)
		$('#gantiNamaPemilik').val(NamaPemilik) 
		
		$('#gantiTanggalSKR').val(TanggalSKR) // Set value dari textbox gantiTanggalSKR yang ada di form
		$('#gantiTanggalMatiUji').val(TanggalMatiUji)
		
		$('#gantiJenisLayananUji').val(JenisLayananUji); 
		$('#gantiTandaLulusUji').val(TandaLulusUji); 
		$('#gantiPilihanUjiTeknis').val(PilihanUjiTeknis); 
		
		
        }
    })
});

// tombol-validasi
$('.tombol-validasi').on('click', function (e) {
    e.preventDefault();
	const href = $(this).attr('href');
    Swal({
        title: 'Apakah anda yakin',
        text: "data SKR akan diVALIDASI ?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Validasi Data!'
    }).then((result) => {
        if (result.value) {
		$('#validasiSkrModel').modal('show');
			var tr = $(this).closest('tr') // Cari tag tr paling terdekat
		var NomorUji = tr.find('.NomorUji-value').val() // Ambil NomorUji dari input type hidden
		var NomorKendaraan = tr.find('.NomorKendaraan-value').val() // Ambil NomorKendaraan dari input type hidden
		var NamaPemilik = tr.find('.NamaPemilik-value').val() // Ambil NamaPemilik dari input type hidden
		
		var TanggalSKR = tr.find('.TanggalSKR-value').val() // Ambil TanggalSKR dari input type hidden
		var TanggalMatiUji = tr.find('.TanggalMatiUji-value').val() 
		var JenisLayananUji = tr.find('.JenisLayananUji-value').val() 
		var TandaLulusUji = tr.find('.TandaLulusUji-value').val() 
		var PilihanUjiTeknis = tr.find('.PilihanUjiTeknis-value').val() 
		var ambilIDSkr = tr.find('.ambilIDSkrnya-value').val() 
		
		$('#dapatIDSkrnya').val(ambilIDSkr)
		
		$('#validasiNomorUji').val(NomorUji) // Set value dari textbox NomorUji yang ada di form
		$('#validasiNomorKendaraan').val(NomorKendaraan)
		$('#validasiNamaPemilik').val(NamaPemilik) 
		$('#validasiTanggalSKR').val(TanggalSKR) // Set value dari textbox gantiTanggalSKR yang ada di form
		
		
		// jenis layanan uji
		if (JenisLayananUji == 1) {
		// uji pertama
			$('#validasiJenisLayananUji').val('Uji Pertama'); 
		}else if(JenisLayananUji == 2){
			// uji uji berkala
			$('#validasiJenisLayananUji').val('Uji Berkala'); 
		}else if(JenisLayananUji == 3){
			// numpang uji masuk
			$('#validasiJenisLayananUji').val('Numpang Uji Masuk'); 
		}else if(JenisLayananUji == 4){
			// numpang uji keluar
			$('#validasiJenisLayananUji').val('Numpang Uji Keluar'); 
		}else if(JenisLayananUji == 5){
			// mutasi kendaraan masuk 
			$('#validasiJenisLayananUji').val('Mutasi Kendaraan Masuk'); 
		}else if(JenisLayananUji == 6){
			// mutasi kendaraan keluar 
			$('#validasiJenisLayananUji').val('Mutasi Kendaraan Keluar'); 
		}else if(JenisLayananUji == 7){
			// uji emisi
			$('#validasiJenisLayananUji').val('Uji Emisi Non KBWU'); 
		}else if(JenisLayananUji == 8){
			// uji emisi
			$('#validasiJenisLayananUji').val('Kartu Uji Hilang'); 
		}else {
			$('#validasiJenisLayananUji').val('Smart Card'); 
		}
		
		//pilihan kartu uji
         if (TandaLulusUji == 1){
             $('#validasiTandaLulusUji').val('Tidak Ganti'); 
         } else if (TandaLulusUji == 2){
             $('#validasiTandaLulusUji').val('Ganti Kartu Uji(baru)'); 
         } else {
             $('#validasiTandaLulusUji').val('Ganti Kartu Hilang'); 
         }
		
		
		
		//pilihan uji teknis
         if (PilihanUjiTeknis == 1){ 
			$('#validasiPilihanUjiTeknis').val('Ya'); 
         } else {
            $('#validasiPilihanUjiTeknis').val('Tidak'); 
         }
		 
		
        }
    })
});


// tombol-hapus
$('.tombol-hapus').on('click', function (e) {
    e.preventDefault();
	const href = $(this).attr('href');
    Swal({
        title: 'Apakah anda yakin',
        text: "Data  akan diHAPUS ?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Hapus Data!'
    }).then((result) => {
        if (result.value) {
		   document.location.href = href;		  
        }
    })
});


// tombol-ubah data kendaraan baru
$('.tombol-dkendaraan').on('click', function (e) {
    e.preventDefault();
	const href = $(this).attr('href');
    Swal({
        title: 'Apakah anda yakin',
        text: "Data Kendaraan akan diUBAH ?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ubah Data!'
    }).then((result) => {
        if (result.value) {
		$('#editBaru').modal('show');
			var tr = $(this).closest('tr') // Cari tag tr paling terdekat
		var NomorUji = tr.find('.NomorUji-value').val() // Ambil NomorUji dari input type hidden
		var NomorKendaraan = tr.find('.NomorKendaraan-value').val() // Ambil NomorKendaraan dari input type hidden
		var NamaPemilik = tr.find('.NamaPemilik-value').val() // Ambil NamaPemilik dari input type hidden
		var Alamat = tr.find('.Alamat-value').val()
		var Desa = tr.find('.Desa-value').val()
		var Kecamatan = tr.find('.Kecamatan-value').val()
		var Kabupaten = tr.find('.Kabupaten-value').val()
		var NomorHP = tr.find('.NomorHP-value').val()
		
		var JenisKendaraan = tr.find('.JenisKendaraan-value').val() 
		var MerkKendaraan = tr.find('.MerkKendaraan-value').val() 
		var ModelKendaraan = tr.find('.ModelKendaraan-value').val() 
		var TypeKendaraan = tr.find('.TypeKendaraan-value').val() 
		var NomorRangka = tr.find('.NomorRangka-value').val() 
		var NomorMesin = tr.find('.NomorMesin-value').val() 
		var TahunPembuatan = tr.find('.TahunPembuatan-value').val() 
		var WarnaTNKB = tr.find('.WarnaTNKB-value').val()
		var BBM = tr.find('.BBM-value').val() 
		var JBB = tr.find('.JBB-value').val()
		var TglUjiPertamaKali = tr.find('.TglUjiPertamaKali-value').val() 
		var NomorSRUT = tr.find('.NomorSRUT-value').val() 
		
		var ambilIDKendaraan = tr.find('.ambilIDKendaraan-value').val() //ambil IDKendaraan
		
			
		$('#dapatIDKendaraan').val(ambilIDKendaraan);
		$('#editNomorUji').val(NomorUji);
		$('#editNomorKendaraan').val(NomorKendaraan) // Set value dari textbox nomor kendaraan yang ada di form
		$('#editJenisKendaraan').val(JenisKendaraan); 
		
			
		$('#editNomorRangka').val(NomorRangka)
		$('#editNomorMesin').val(NomorMesin) 
		$('#editWarnaTNKB').val(WarnaTNKB);
		
		$('#editNamaPemilik').val(NamaPemilik) 
		$('#editAlamatPemilik').val(Alamat)
		$('#editDesa').val(Desa)
		$('#editKecamatan').val(Kecamatan); 
		$('#editKabupaten').val(Kabupaten); 
		$('#editNomorHP').val(NomorHP);
		
		$('#editMerkKendaraan').val(MerkKendaraan); 
		$('#editModelKendaraan').val(ModelKendaraan); 
		$('#editTypeKendaraan').val(TypeKendaraan); 
		$('#editJBB').val(JBB); 
		$('#editTahunPembuatan').val(TahunPembuatan); 
		$('#editBBM').val(BBM); 
		
		$('#editTglUjiPertamaKali').val(TglUjiPertamaKali); 
		$('#editNomorSRUT').val(NomorSRUT);
		
		 
		
        }
    })
});

// tombol- konversi nomor uji
$('.tombol-konversi').on('click', function (e) {
    e.preventDefault();
	const href = $(this).attr('href');
    Swal({
        title: 'Apakah anda yakin',
        text: "Nomor Uji akan diKONVERSI ?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Konversi'
    }).then((result) => {
        if (result.value) {
		$('#editKonversi').modal('show');
			var tr = $(this).closest('tr') // Cari tag tr paling terdekat
		var NomorUjiLama = tr.find('.NomorUji-value').val() // Ambil NomorUji dari input type hidden
		var ambilTglUjiPertamaKali = tr.find('.TglUjiPertamaKali-value').val() 
		var ambilIDKendaraan = tr.find('.ambilIDKendaraan-value').val() //ambil IDKendaraan
		
			
		$('#dapatIDKendaraan').val(ambilIDKendaraan);
		$('#dapatTglUjiPertamaKali').val(ambilTglUjiPertamaKali); 
		$('#editNomorUjiLama').val(NomorUjiLama) // Set value dari textbox nomor uji kendaraan yang ada di form
		
        }
    })
});

// tombol- numpang uji keluar 
$('.tombol-ubahNUK').on('click', function (e) {
    e.preventDefault();
	const href = $(this).attr('href');
    Swal({
        title: 'Apakah anda yakin',
        text: "Menambahkan Tempat Tujuan Numpang Uji ?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Lanjutkan'
    }).then((result) => {
        if (result.value) {
		$('#editNUK').modal('show');
			var tr = $(this).closest('tr') // Cari tag tr paling terdekat
		var NomorUji = tr.find('.NomorUji-value').val() // Ambil NomorUji dari input type hidden
		var NomorKendaraan = tr.find('.NomorKendaraan-value').val() // Ambil NomorKendaraan dari input type hidden
		var NamaPemilik = tr.find('.NamaPemilik-value').val() // Ambil NamaPemilik dari input type hidden
		
		var ambilIDNUK = tr.find('.ambilIDNUK-value').val() //ambil IDKendaraan
		
			
		$('#dapatIDNUK').val(ambilIDNUK);
		$('#NomorUji').val(NomorUji) // Set value dari textbox nomor uji kendaraan yang ada di form
		$('#NomorKendaraan').val(NomorKendaraan);
		$('#NamaPemilik').val(NamaPemilik);
		
        }
    })
});
// tombol-upload blue 
$('.tombol-uploadBLUe').on('click', function (e) {
    e.preventDefault();
	const href = $(this).attr('href');
    Swal({
        title: 'Apakah anda yakin',
        text: "Upload Bukti Lulus Uji ?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Lanjutkan'
    }).then((result) => {
        if (result.value) {
		$('#UpBLUe').modal('show');
			var tr = $(this).closest('tr') // Cari tag tr paling terdekat
		var uNomorUji = tr.find('.vNomorUji-value').val() // Ambil NomorUji dari input type hidden
		var uNomorKendaraan = tr.find('.vNomorKendaraan-value').val() // Ambil NomorKendaraan dari input type hidden
		var uNamaPemilik = tr.find('.vNamaPemilik-value').val() // Ambil NamaPemilik dari input type hidden
		
		var uIDNUK = tr.find('.ambilIDNUK-value').val() //ambil IDKendaraan
		
		alert (uNomorUji); die;
			
		$('#gasanIDNUK').val(uIDNUK);
		$('#gasaNomorUji').val(uNomorUji) // Set value dari textbox nomor uji kendaraan yang ada di form
		$('#gasanNomorKendaraan').val(uNomorKendaraan);
		$('#gasanNamaPemilik').val(uNamaPemilik);
		
        }
    })
});

// tombol- numpang uji masuk 
$('.tombol-ubahNUM').on('click', function (e) {
    e.preventDefault();
	const href = $(this).attr('href');
    Swal({
        title: 'Apakah anda yakin',
        text: "Menambahkan data Numpang Uji Masuk?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Lanjutkan'
    }).then((result) => {
        if (result.value) {
		$('#editNUM').modal('show');
			var tr = $(this).closest('tr') // Cari tag tr paling terdekat
		var NomorUji = tr.find('.NomorUji-value').val() // Ambil NomorUji dari input type hidden
		var NomorKendaraan = tr.find('.NomorKendaraan-value').val() // Ambil NomorKendaraan dari input type hidden
		var NamaPemilik = tr.find('.NamaPemilik-value').val() // Ambil NamaPemilik dari input type hidden
		
		var ambilIDNUM = tr.find('.ambilIDNUM-value').val() //ambil IDKendaraan
		
			
		$('#dapatIDNUM').val(ambilIDNUM);
		$('#NomorUji').val(NomorUji) // Set value dari textbox nomor uji kendaraan yang ada di form
		$('#NomorKendaraan').val(NomorKendaraan);
		$('#NamaPemilik').val(NamaPemilik);
		
        }
    })
});

// tombol- uji teknis 
$('.tombol-ujiTeknis').on('click', function (e) {
    e.preventDefault();
	const href = $(this).attr('href');
    Swal({
        title: 'Apakah anda yakin',
        text: "Kendaraan Tersebut Lulus Uji ?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Lanjutkan'
    }).then((result) => {
        if (result.value) {
		$('#gasanUjiTeknis').modal('show');
			var tr = $(this).closest('tr') // Cari tag tr paling terdekat
			var Nomer = tr.find('.Nomer-value').val() // Ambil Nomer dari input type hidden
			var NomorUji = tr.find('.NomorUji-value').val() // Ambil NomorUji dari input type hidden
			var NomorKendaraan = tr.find('.NomorKendaraan-value').val() // Ambil NomorKendaraan dari input type hidden
			var NamaPemilik = tr.find('.NamaPemilik-value').val() // Ambil NamaPemilik dari input type hidden
			var TanggalValidasi = tr.find('.TanggalValidasi-value').val()
			
			var ambilIDSkr = tr.find('.ambilIDSkr-value').val() //ambil IDKendaraan
		
			
		$('#dapatIDSkr').val(ambilIDSkr);
		$('#Nomer').val(Nomer) // Set value dari textbox nomor uji kendaraan yang ada di form
		$('#NomorUji').val(NomorUji) // Set value dari textbox nomor uji kendaraan yang ada di form
		$('#NomorKendaraan').val(NomorKendaraan);
		$('#NamaPemilik').val(NamaPemilik);
		$('#TanggalValidasi').val(TanggalValidasi);
		
        }
    })
});

// tombol- uji ulang 
$('.tombol-ujiUlang').on('click', function (e) {
    e.preventDefault();
	const href = $(this).attr('href');
    Swal({
        title: 'Apakah anda yakin',
        text: "Kendaraan Tersebut Tidak Lulus Uji Teknis ?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Lanjutkan'
    }).then((result) => {
        if (result.value) {
		$('#gasanUjiUlang').modal('show');
			var tr = $(this).closest('tr') // Cari tag tr paling terdekat
			var Nomer = tr.find('.Nomer-value').val() // Ambil Nomer dari input type hidden
			var NomorUji = tr.find('.NomorUji-value').val() // Ambil NomorUji dari input type hidden
			var NomorKendaraan = tr.find('.NomorKendaraan-value').val() // Ambil NomorKendaraan dari input type hidden
			var NamaPemilik = tr.find('.NamaPemilik-value').val() // Ambil NamaPemilik dari input type hidden
			var TanggalValidasi = tr.find('.TanggalValidasi-value').val()
			var StatusUji = tr.find('.StatusUji-value').val()
			
			var ambilIDSkr = tr.find('.ambilIDSkr-value').val() //ambil IDKendaraan
		
			
		$('#udapatIDSkr').val(ambilIDSkr);
		$('#uNomer').val(Nomer) // Set value dari textbox nomor uji kendaraan yang ada di form
		$('#uNomorUji').val(NomorUji) // Set value dari textbox nomor uji kendaraan yang ada di form
		$('#uNomorKendaraan').val(NomorKendaraan);
		$('#uNamaPemilik').val(NamaPemilik);
		$('#uTanggalValidasi').val(TanggalValidasi);
		$('#uStatusUji').val(StatusUji);
		
        }
    })
});

// tombol-ubah muk
$('.tombol-ubahMUK').on('click', function (e) {
    e.preventDefault();
	const href = $(this).attr('href');
    Swal({
        title: 'Apakah anda yakin',
        text: "data akan diUBAH ?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ubah Data!'
    }).then((result) => {
        if (result.value) {
		$('#editMUKModel').modal('show');
			var tr = $(this).closest('tr') // Cari tag tr paling terdekat
		var mNomorUji = tr.find('.NomorUji-value').val() // Ambil NomorUji dari input type hidden
		var mNomorKendaraan = tr.find('.NomorKendaraan-value').val() // Ambil NomorKendaraan dari input type hidden
		var mNamaPemilik = tr.find('.NamaPemilik-value').val() // Ambil NamaPemilik dari input type hidden
		
		var TanggalMutasi = tr.find('.TanggalMutasi-value').val() // Ambil TanggalSKR dari input type hidden
		var T4Tujuan = tr.find('.T4Tujuan-value').val() 
		
		var ambilIDMutasi = tr.find('.ambilIDMutasi-value').val()
		
		$('#dapatIDMutasi').val(ambilIDMutasi)
		$('#gNomorUji').val(mNomorUji) // Set value dari textbox NomorUji yang ada di form
		$('#gNomorKendaraan').val(mNomorKendaraan)
		$('#gNamaPemilik').val(mNamaPemilik) 
		
		$('#gT4Tujuan').val(T4Tujuan) // Set value dari textbox gantiTanggalSKR yang ada di form
		$('#gTanggalMutasi').val(TanggalMutasi)
		
		
        }
    })
});

// tombol-ubah mutasi keluat
$('.tombol-ubahMM').on('click', function (e) {
    e.preventDefault();
	const href = $(this).attr('href');
    Swal({
        title: 'Apakah anda yakin',
        text: "data akan diUBAH ?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ubah Data!'
    }).then((result) => {
        if (result.value) {
		$('#editMM').modal('show');
			var tr = $(this).closest('tr') // Cari tag tr paling terdekat
			var mmNomorUji = tr.find('.NomorUji-value').val() // Ambil NomorUji dari input type hidden
			var mmNomorKendaraan = tr.find('.NomorKendaraan-value').val() // Ambil NomorKendaraan dari input type hidden
			var mmNamaPemilik = tr.find('.NamaPemilik-value').val() // Ambil NamaPemilik dari input type hidden
			
			var TanggalMM = tr.find('.TanggalMM-value').val() // Ambil TanggalSKR dari input type hidden
			
			
			var ambilIDMutasiMasuk = tr.find('.ambilIDMutasiMasuk-value').val()
		
		$('#dapatIDMutasiMasuk').val(ambilIDMutasiMasuk)
		$('#eNomorUji').val(mmNomorUji) // Set value dari textbox NomorUji yang ada di form
		$('#eNomorKendaraan').val(mmNomorKendaraan)
		$('#eNamaPemilik').val(mmNamaPemilik) 
		
			
		
        }
    })
});

// tombol- view data stiker
$('.tombol-viewData').on('click', function (e) {
    e.preventDefault();
	const href = $(this).attr('href');
    Swal({
        title: 'View Data ?',
        text: "",
        type: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Lanjutkan'
    }).then((result) => {
        if (result.value) {
		$('#gasanViewData').modal('show');
			var tr = $(this).closest('a') // Cari tag tr paling terdekat
			var viewNomer = tr.find('.vNomer-value').val() // Ambil Nomer dari input type hidden
			var viewKodeBilling = tr.find('.vKodeBilling-value').val() //ambil IDKendaraan
			var viewIDSkr = tr.find('.vIDSkr-value').val() //ambil IDKendaraan
			var viewSkrAktif = tr.find('.vSkrAktif-value').val()
			var viewTanggalSKR = tr.find('.vTanggalSKR-value').val()
			var viewStatusUji = tr.find('.vStatusUji-value').val()
			
			var viewNomorUji = tr.find('.vNomorUji-value').val() // Ambil NomorUji dari input type hidden
			var viewNomorKendaraan = tr.find('.vNomorKendaraan-value').val() // Ambil NomorKendaraan dari input type hidden
			var viewNomorRangka = tr.find('.vNomorRangka-value').val() 
			var viewNomorMesin = tr.find('.vNomorMesin-value').val()
			var viewWarnaTNKB = tr.find('.vWarnaTNKB-value').val()
			
			var viewNamaPemilik = tr.find('.vNamaPemilik-value').val() // Ambil NamaPemilik dari input type hidden
			var viewAlamat = tr.find('.vAlamat-value').val()
			var viewDesa = tr.find('.vDesa-value').val()
			var viewKecamatan = tr.find('.vKecamatan-value').val()
			var viewKabupaten = tr.find('.vKabupaten-value').val()
			
			var viewMerkKendaraan = tr.find('.vMerkKendaraan-value').val() 
			var viewModelKendaraan = tr.find('.vModelKendaraan-value').val() 
			var viewTypeKendaraan = tr.find('.vTypeKendaraan-value').val() 
			var viewBBM = tr.find('.vBBM-value').val() 
			var viewJBB = tr.find('.vJBB-value').val()
			var viewStatus = tr.find('.tampilkanViewData-value').val()
			
			
		$('#viewIDSkr').val(viewIDSkr);
		$('#viewKodeBilling').val(viewKodeBilling);
		$('#viewNomer').val(viewNomer)
		$('#viewTanggalSKR').val(viewTanggalSKR);
		$('#viewStatusUji').val(viewStatusUji);
		$('#viewStatusPelayanan').val(viewStatus);
		
		if (viewSkrAktif == '1' )
		{
			$('#StatusRet').val('LUNAS Retribusi');
		}else { $('#StatusRet').val('Dalam Proses Pembayaran');}
				 
		$('#viewNomorUji').val(viewNomorUji) 
		$('#viewNomorKendaraan').val(viewNomorKendaraan);
		$('#viewNomorRangka').val(viewNomorRangka)
		$('#viewNomorMesin').val(viewNomorMesin) 
		
		
		if (viewWarnaTNKB == '1' ){ $('#viewWarnaTNKB').val('Kuning');}
		else if (viewWarnaTNKB == '2' ) { $('#viewWarnaTNKB').val('Hitam');}
		else { $('#viewWarnaTNKB').val('Merah');}
		
		$('#viewNamaPemilik').val(viewNamaPemilik);
		$('#viewAlamat').val(viewAlamat)
		$('#viewDesa').val(viewDesa)
		$('#viewKecamatan').val(viewKecamatan); 
		$('#viewKabupaten').val(viewKabupaten); 
		
		$('#viewMerkKendaraan').val(viewMerkKendaraan); 
		$('#viewModelKendaraan').val(viewModelKendaraan); 
		$('#viewTypeKendaraan').val(viewTypeKendaraan); 
		
		if (viewBBM == '1' ){$('#viewBBM').val('Bensin'); }
		else { $('#viewBBM').val('Solar'); }
		$('#viewJBB').val(viewJBB); 
		
        }
    })
});


