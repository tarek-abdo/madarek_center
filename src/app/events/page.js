export default function EventsPage() {
  const events = [
    {
      title: "ندوة الفكر الإسلامي المعاصر",
      date: "2025-09-10",
      location: "القاهرة، مصر",
      description: "مناقشة أحدث الاتجاهات في الفكر الإسلامي المعاصر بمشاركة نخبة من الباحثين.",
      link: "#"
    },
    {
      title: "ورشة عمل: الدراسات الحضارية",
      date: "2025-10-05",
      location: "الرياض، السعودية",
      description: "ورشة عمل تفاعلية حول منهجيات الدراسات الحضارية وتطبيقاتها في العالم الإسلامي.",
      link: "#"
    },
    {
      title: "مؤتمر الجغرافيا السياسية",
      date: "2025-11-20",
      location: "دبي، الإمارات",
      description: "مؤتمر دولي حول الجغرافيا السياسية وتأثيرها على المجتمعات الإسلامية.",
      link: "#"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">الفعاليات القادمة</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-primary">{event.title}</h2>
              <p className="text-gray-600 mb-4">{event.description}</p>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <span className="text-sm text-gray-500"><strong>التاريخ:</strong> {event.date}</span>
              <span className="text-sm text-gray-500"><strong>الموقع:</strong> {event.location}</span>
            </div>
            <a href={event.link} className="mt-6 inline-block bg-primary text-white rounded-full px-6 py-2 text-center font-medium hover:bg-primary/90 transition-colors">تفاصيل الفعالية</a>
          </div>
        ))}
      </div>
    </div>
  );
}
