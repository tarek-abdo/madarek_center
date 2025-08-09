import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Download, Users, ArrowLeft } from 'lucide-react'

const currentIssue = {
  title: "مجلة بوست-دلوج",
  subtitle: "الاصدار #15 - شتاء 2024",
  theme: "الفكر الإسلامي في العصر الرقمي",
  cover: "/image/magazine4.jpeg",
  description: "استكشاف تقاطع الفكر الإسلامي والتكنولوجيا الرقمية، وفحص كيفية تكيف الحكمة التقليدية مع المشهد الرقمي الحديث.",
  price: "$25.00"
}


export default function Magazine() {
  return (
    <div className="py-16 " dir="rtl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <BookOpen className="h-8 w-8 text-magazine-primary dark:text-primary" />
          <h2 className="text-4xl font-bold text-magazine-primary dark:text-white">مجلة ما بعد الطوفان</h2>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-100 max-w-3xl mx-auto ">
          مجلة فصلية مخصصة لوجهات النظر النقدية حول الحضارة الإسلامية،
          الفكر المعاصر، والبحث العلمي في مجال الدراسات الإسلامية.
        </p>
      </div>

      {/* Current Issue */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="relative">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
           
                <Image
                  src={currentIssue.cover}
                  alt={currentIssue.title}
                  fill
                  className="object-cover"
                />


            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">{currentIssue.title}</h3>
                <p className="text-white/90 mb-4">{currentIssue.theme}</p>
                <div className="flex gap-3">
                  <Link href='/publications' className="btn-primary">
                    المحتويات
                  </Link>
                  <Link href="/magazine/current/buy" className="btn-outline border-white text-white hover:bg-white hover:text-magazine-primary">
                    شراء العدد - {currentIssue.price}
                  </Link>
                </div>
              </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-magazine-primary mb-4 dark:text-primary">الاصدار الحالي</h3>
          <p className="text-gray-600 dark:text-gray-100 mb-6 leading-relaxed">
            {currentIssue.description}
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-magazine-secondary rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-100">تحليل نقدي للتحول الرقمي في المجتمعات الإسلامية</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-magazine-secondary rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">مقابلات مع كبار العلماء والمفكرين الإسلاميين</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-magazine-secondary rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">مراجعات كتب وأبرز الأبحاث</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 