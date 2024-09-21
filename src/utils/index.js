const getInitialData = () => [
  {
    id: 1,
    title: "Selamat Datang",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: "2024-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

const getFilter = () => [
  {
    text: "All Notes",
    value: "all",
  },
  {
    text: "Active Notes",
    value: "active",
  },
  {
    text: "Archived Notes",
    value: "archived",
  },
];

const generateQuotes = () => [
  {
    text: "Kesuksesan seringkali ditemukan melalui banyak percobaan dan kegagalan.",
    author: "Inspirator",
  },
  {
    text: "Apa pun tantangannya, selalu ada cara untuk mengatasi dan berhasil. Yang penting adalah tidak menyerah.",
    author: "Pemikir Hebat",
  },
  {
    text: "Lebih baik menjadi seseorang yang memiliki nilai daripada hanya mengejar kesuksesan.",
    author: "Pencerah",
  },
  {
    text: "Untuk mencapai hasil yang luar biasa, cintai apa yang Anda kerjakan.",
    author: "Pelopor Inovasi",
  },
  {
    text: "Ide-ide baru tidak selalu langsung menunjukkan hasil yang baik.",
    author: "Pencipta Ide",
  },
  {
    text: "Dimanapun Anda berada, jadilah yang terbaik dan berikan yang terbaik dari diri Anda.",
    author: "Motivator",
  },
];

export { getInitialData, getFilter, generateQuotes, showFormattedDate };
