import moment from 'moment';

export const dtCouple = [
  {
    _id: 'couple_0',
    name: 'Septi Handayani',
    img: '/img/septi.jpg',
    father: 'Dasuki',
    mother: 'Suratmi',
    ig_url: 'https://instagram.com/',
  },
  {
    _id: 'couple_1',
    name: 'Zakky Nur Ali',
    img: '/img/zakky.jpg',
    father: 'Ali Pakikhudin',
    mother: 'Lilis Munawaroh',
    ig_url: 'https://instagram.com/',
  },
];

export const eventTime = {
  akad: moment('2023-10-30 08:00'),
  startResepsi: moment('2023-10-30 12:00'),
  location: 'https://maps.app.goo.gl/U8GynrSHAM3djLXa7',
};

export const storyData = {
  firstMeet: {
    title: 'First Meet ~ 2015',
    desc: 'Masa sekolah di SMK Negeri 1 Pemalang',
  },
  expressFeelings: {
    title: 'Long Distance Relationship ~ 2016 - 2022',
    desc: 'LDR antara Bekasi - Pemalang, Jakarta - Semarang, Yogyakarta - Semarang',
  },
  engagement: {
    title: 'Engagement ~ 2022',
    desc: 'Pada tanggal 14 Agustus 2022 di Pemalang',
  },
  goesToMarried: {
    title: 'Goes to Married ~ 2023',
    desc: '',
  },
};

export const imgGallery = [...Array(13)].map((_, i: number) => {
  return {
    original: `/img/gallery/img-${i + 1}.jpg`,
    thumbnail: `/img/gallery/img-thumbs-${i + 1}.jpg`,
  };
}).reverse();

