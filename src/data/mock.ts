export const HOME_MOCK = {
  user: {
    name: "준비",
    status: "파견 대기 중",
  },
  countdown: {
    destination: "Munich",
    days: 67,
    image: "/munich_banner.png"
  },
  quickMenu: [
    { label: "항공권", icon: "Plane" },
    { label: "숙소", icon: "Home" },
    { label: "유심", icon: "Smartphone" },
    { label: "보험", icon: "Shield" },
    { label: "체크리스트", icon: "CheckSquare" },
  ],
  recommended: [
    {
      id: 1,
      title: "[독일 교환학생] 비자 신청부터 수령까지",
      author: "독일장인",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "루프트한자 학생 할인 항공권 특가 정보",
      author: "여행고수",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=400&auto=format&fit=crop",
    }
  ]
};

export const EXPLORE_MOCK = {
  countries: [
    { name: "독일", flag: "🇩🇪" },
    { name: "미국", flag: "🇺🇸" },
    { name: "프랑스", flag: "🇫🇷" },
    { name: "영국", flag: "🇬🇧" },
    { name: "일본", flag: "🇯🇵" },
  ],
  themes: [
    { title: "기숙사 프리패스", description: "교환학생 주거 정보 총집합" },
    { title: "비자의 정석", description: "까다로운 비자 발급 가이드" }
  ]
};

export const MARKET_MOCK = [
  {
    id: 1,
    title: "브리타 정수기 + 필터 3개",
    price: "15€",
    location: "Munich, Germany",
    image: "https://images.unsplash.com/photo-1585837222045-886915152865?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "이케아 탁상 스탠드",
    price: "8€",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=300&auto=format&fit=crop",
  }
];

export const COMMUNITY_MOCK = {
  popular: [
    { id: 1, title: "마리엔플라츠 근처 가성비 맛집 리스트", board: "정보공유", likes: 42, comments: 12 },
    { id: 2, title: "베를린 리들(Lidl) 장보기 꿀팁", board: "자유게시판", likes: 35, comments: 8 },
  ]
};
