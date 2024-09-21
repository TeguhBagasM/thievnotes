const getInitialData = () => [];

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
