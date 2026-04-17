<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <title>Form Nilai Ujian</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body style="background:#f5f7fa;">

<div class="container mt-5">
    <div class="card shadow-lg border-0 rounded-4">
        <div class="card-header text-center bg-white text-dark rounded-top-4">
            <h4 class="mb-0">Form Nilai Ujian</h4>
        </div>

        <div class="card-body p-4">
            <form method="POST">

                <div class="mb-3">
                    <label class="form-label">Nama</label>
                    <input type="text" name="nama" class="form-control" required>
                </div>

                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" name="email" class="form-control" required>
                </div>

                <div class="mb-3">
                    <label class="form-label">Nilai Ujian</label>
                    <input type="number" name="nilai" class="form-control" required>
                </div>

                <button type="submit" name="proses" class="btn btn-primary w-100">
                    Kirim
                </button>

            </form>

            <?php
            if (isset($_POST['proses'])) {

                $nama = $_POST['nama'];
                $email = $_POST['email'];
                $nilai = $_POST['nilai'];

                // Struktur kendali
                if ($nilai > 70) {
                    $status = "Lulus";
                    $warna = "success";
                } else {
                    $status = "Remedial";
                    $warna = "danger";
                }
            ?>

            <div class="mt-4">
                <div class="alert alert-<?php echo $warna; ?> rounded-3">
                    <h5 class="mb-3">Hasil Ujian</h5>
                    <p><strong>Nama:</strong> <?php echo $nama; ?></p>
                    <p><strong>Email:</strong> <?php echo $email; ?></p>
                    <p><strong>Nilai:</strong> <?php echo $nilai; ?></p>
                    <p><strong>Status:</strong> <?php echo $status; ?></p>
                </div>
            </div>

            <?php } ?>

        </div>
    </div>
</div>

</body>
</html>