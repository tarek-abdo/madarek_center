import Image from "next/image";

const articles = [
  {
    id: 1,
    category: "القضية الفلسطينية",
    title: "تاثير الصراع الفلسطيني الإسرائيلي على الهوية الثقافية",
    author: "مايكل ماهر",
    date: "21/12/2025",
    image: "/image/article1.jpeg",
    authorImage: "/image/writer1.jpeg",
  },
  {
    id: 2,
    category: "فن وأدب",
    title: "الادب الاسلامي في العصر الحديث: من التراث إلى التجديد",
    author: "حسام الدين السيد",
    date: "10/10/2025",
    image: "/image/article2.jpeg",
    authorImage: "/image/writer2.jpeg",
  },
  {
    id: 3,
    category: "تدوينات",
    title:"هل غادر الشعراء من متردم؟",
    author: "أروى عاصم",
    date: "01/04/2025",
    image: "/image/article3.jpeg",
    authorImage: "/image/writer3.jpeg",
  },
  {
    id: 4,
    category: "عناصر دينية",
    title: "الاسلام في العصر الرقمي: تحديات وفرص",
    author: "أروى عاصم",
    date: "01/04/2025",
    image: "/image/article4.jpeg",
    authorImage: "/image/writer4.jpeg",
  },
  {
    id: 5,
    category: "مواجهات",
    title: "اقلام عربية: كيف يغير الكتاب العرب المشهد الأدبي العالمي",
    author: "أروى عاصم",
    date: "01/04/2025",
    image: "/image/article5.jpeg",
    authorImage: "/image/writer5.jpeg",
  },
  {
    id: 6,
    category: "اسلاميات",
    title: "الاسلام بين التقليد والتجديد: قراءة في الفكر الإسلامي المعاصر",
    author: "أروى عاصم",
    date: "01/04/2025",
    image: "/image/article6.jpeg",
    authorImage: "/image/writer6.jpeg",
  },
];

export default function AzharArticles() {
  return (
    <section className="py-0">
      <div
        className=" w-full flex flex-col items-center py-0 px-4"
        dir="rtl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Article image */}
              <div className="relative h-52 w-full overflow-hidden group">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 right-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-gray-900 dark:text-white text-lg font-bold mb-4 line-clamp-2 hover:text-orange-500 transition-colors">
                  {article.title}
                </h3>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={article.authorImage}
                      alt={article.author}
                      width={36}
                      height={36}
                      className="rounded-full object-cover border-2 border-orange-500"
                    />
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      <p className="font-medium">{article.author}</p>
                      <p className="text-xs opacity-75">{article.date}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-orange-500 transition-colors text-xl font-bold">
                    ⋮
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
