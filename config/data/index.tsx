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
  startResepsi: moment('2023-10-30 11:00'),
  location: 'https://maps.app.goo.gl/GuNWQCL9GyHxyzKb6',
};

export const storyData = {
  firstMeet: {
    title: 'First Meet ~ 2015',
    desc: '',
  },
  expressFeelings: {
    title: '~ 2016 - 2022',
    desc: 'LDR',
  },
  engagement: {
    title: 'Engagement ~ 2022',
    desc: '',
  },
  goesToMarried: {
    title: 'Goes to Married ~ 2023',
    desc: '',
  },
};

export const imgGallery = [...Array(14)].map((_, i: number) => {
  return {
    original: `/img/gallery/img-${i + 1}.jpg`,
    thumbnail: `/img/gallery/img-thumbs-${i + 1}.jpg`,
  };
}).reverse();

export const snowfallConfig: any = {
  color: '#DEE4FD',
  snowflakeCount: 70,
  speed: [0, 2],
  wind: [0, 2],
  radius: [0.5, 1],
  style: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: 9999,
  },
};
