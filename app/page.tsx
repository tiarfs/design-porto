"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Mail,
  MapPin,
  Linkedin,
  Download,
  Monitor,
  Database,
  AlertTriangle,
  CheckCircle,
  Clock,
  ExternalLink,
  User,
  Briefcase,
  Code,
  MessageSquare,
  Star,
  Globe,
  Terminal,
  Settings,
  Activity,
  Network,
  Zap,
  FileText,
  Users,
  Target,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const technicalSkills = [
    { name: "Sistem Monitoring", tools: ["Zabbix", "NMS Hariff", "NMS Sinergi", "Monitoring Scada"], level: 95 },
    { name: "Sistem Ticketing", tools: ["ICRM+"], level: 98 },
    { name: "Perangkat Jaringan", tools: ["BDCOM", "Fiberhome", "Zyxel", "Cisco ASR920"], level: 90 },
    { name: "Konsep Jaringan", tools: ["OSI Layer", "TCP/IP", "Routing", "Switching"], level: 85 },
    { name: "Troubleshooting", tools: ["Level 1 Support", "Incident Analysis", "Escalation"], level: 92 },
    { name: "CLI Administration", tools: ["CMD", "Network CLI"], level: 80 },
  ]

  const softSkills = [
    { name: "Komunikasi Efektif", description: "Lisan dan tulisan, kerjasama tim", level: 95 },
    { name: "Pemecahan Masalah", description: "Analisis mandiri dan eskalasi", level: 90 },
    { name: "Kerja Mandiri & Tim", description: "Fleksibilitas dalam berbagai situasi", level: 88 },
    { name: "Koordinasi", description: "Tim internal NOC dan lapangan", level: 92 },
    { name: "Manajemen Tugas", description: "Shift kerja operasional 24/7", level: 94 },
    { name: "Orientasi Layanan", description: "Fokus kepuasan pelanggan", level: 96 },
  ]

  const jobResponsibilities = [
    {
      category: "Penerimaan & Pencatatan Insiden",
      icon: FileText,
      tasks: [
        "Menerima laporan gangguan dari pelanggan/pengguna internal",
        "Merekam detail insiden ke sistem ticketing ICRM+",
        "Memberikan nomor tiket untuk pelacakan",
      ],
    },
    {
      category: "Pemantauan & Analisis Jaringan",
      icon: Monitor,
      tasks: [
        "Pemantauan real-time menggunakan Zabbix, NMS Hariff, NMS Sinergi",
        "Identifikasi anomali dan alert dari sistem monitoring",
        "Analisa dan troubleshooting awal secara mandiri",
      ],
    },
    {
      category: "Troubleshooting Level 1",
      icon: Settings,
      tasks: [
        "Investigasi dan troubleshooting awal insiden",
        "Identifikasi, validasi sesuai SOP Troubleshooting",
        "Konfigurasi perangkat jaringan sederhana (BDCOM, Fiberhome)",
      ],
    },
    {
      category: "Eskalasi & Koordinasi",
      icon: Users,
      tasks: [
        "Evaluasi tingkat urgensi dan dampak insiden",
        "Eskalasi ke tim teknis NOC sesuai SOP",
        "Koordinasi dengan tim NOC dalam penyelesaian masalah",
      ],
    },
    {
      category: "Komunikasi & Dokumentasi",
      icon: MessageSquare,
      tasks: [
        "Komunikasi efektif dengan tim internal NOC",
        "Update status berkala kepada pelapor",
        "Dokumentasi laporan/log sistem tiket ICRM+",
        "Membuat laporan penyelesaian dan laporan harian",
      ],
    },
  ]

  const workProjects = [
    {
      title: "Sistem Ticketing ICRM+",
      description: "Pengelolaan siklus lengkap tiket gangguan dari penerimaan hingga penyelesaian",
      features: [
        "Dashboard Overview untuk monitoring tiket",
        "Proses analisa gangguan sistematis",
        "Eskalasi tiket ke tim lapangan",
        "Verifikasi dan penutupan tiket",
      ],
      impact: "Menangani rata-rata 50+ tiket per hari dengan tingkat resolusi 95%",
    },
    {
      title: "Laporan Bulanan Tiket Gangguan",
      description: "Pembuatan laporan komprehensif tiket gangguan yang direkap per hari",
      features: ["Rekap harian tiket gangguan", "Analisis trend dan pola gangguan", "Laporan statistik penyelesaian"],
      impact: "Meningkatkan visibilitas operasional dan decision making management",
    },
    {
      title: "Sistem Monitoring Jaringan Multi-Platform",
      description: "Pemantauan real-time menggunakan berbagai tools monitoring",
      features: [
        "Monitoring Surveillance NMS Hariff Jabar",
        "Monitoring Surveillance NMS Sinergi Jabar",
        "Monitoring Scada Premium dan GSM Scada",
      ],
      impact: "Deteksi dini gangguan dengan response time < 5 menit",
    },
    {
      title: "Pengelolaan Perangkat Jaringan",
      description: "Pengecekan dan konfigurasi berbagai perangkat jaringan",
      features: [
        "Pengecekan Uplink/Downlink Zyxel dan ASR920",
        "Konfigurasi perangkat BDCOM dan Fiberhome",
        "Troubleshooting perangkat jaringan",
      ],
      impact: "Mengurangi downtime jaringan hingga 40% melalui maintenance proaktif",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-slate-800">Tiar Firman Syah</span>
                <p className="text-xs text-slate-500">Helpdesk NOC Specialist</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: "home", label: "Beranda", icon: User },
                { id: "about", label: "Tentang", icon: User },
                { id: "experience", label: "Pengalaman", icon: Briefcase },
                { id: "projects", label: "Proyek", icon: Code },
                { id: "contact", label: "Kontak", icon: MessageSquare },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "bg-blue-100 text-blue-700"
                      : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === "home" && (
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-8 ${isVisible ? "animate-in slide-in-from-left duration-1000" : "opacity-0"}`}>
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                    Halo, Saya{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Tiar Firman Syah
                    </span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl text-slate-600 font-medium">Helpdesk NOC Specialist</h2>
                  <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
                    Profesional berdedikasi dalam menjaga ketersediaan dan kinerja layanan jaringan telekomunikasi di{" "}
                    <span className="font-semibold text-blue-600">PT PLN ICON+ SBU Jabar</span>. Berfokus pada respons
                    cepat, troubleshooting efektif, dan komunikasi transparan untuk operasional 24/7.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => setActiveSection("contact")}>
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Hubungi Saya
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-slate-500">Operasional NOC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-slate-500">Tingkat Resolusi</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">50+</div>
                    <div className="text-sm text-slate-500">Tiket/Hari</div>
                  </div>
                </div>
              </div>

              <div className={`${isVisible ? "animate-in slide-in-from-right duration-1000" : "opacity-0"}`}>
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 rounded-full p-1">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <div className="w-64 h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
                        <Monitor className="w-32 h-32 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-1/2 -left-8 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Tentang Saya</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Profesional IT dengan dedikasi tinggi dalam operasional jaringan telekomunikasi dan dukungan teknis.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Briefcase className="w-6 h-6 mr-3 text-blue-600" />
                    Pekerjaan Saya
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-semibold text-slate-800 mb-2">Helpdesk NOC Specialist</h3>
                    <p className="text-blue-600 font-medium">PT PLN ICON+ SBU Jabar</p>
                    <p className="text-slate-600 mt-2">
                      Sebagai titik kontak pertama untuk masalah jaringan dan layanan, bertanggung jawab dalam
                      pemantauan proaktif, troubleshooting Level 1, dan eskalasi insiden untuk memastikan layanan
                      telekomunikasi optimal dalam lingkungan operasional 24/7.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>
                      <strong className="text-slate-800">Lokasi:</strong>
                      <p className="text-slate-600">Jawa Barat, Indonesia</p>
                    </div>
                    <div>
                      <strong className="text-slate-800">Spesialisasi:</strong>
                      <p className="text-slate-600">NOC & Helpdesk</p>
                    </div>
                    <div>
                      <strong className="text-slate-800">Operasional:</strong>
                      <p className="text-slate-600">24/7 Monitoring</p>
                    </div>
                    <div>
                      <strong className="text-slate-800">Status:</strong>
                      <p className="text-slate-600">Aktif Bekerja</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Target className="w-6 h-6 mr-3 text-blue-600" />
                    Fokus Keahlian
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Monitor className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Pemantauan Jaringan Real-time</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                      <span className="font-medium">Respons Cepat Insiden</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Settings className="w-5 h-5 text-green-600" />
                      <span className="font-medium">Troubleshooting Level 1</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-purple-600" />
                      <span className="font-medium">Koordinasi Tim Efektif</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-indigo-600" />
                      <span className="font-medium">Dokumentasi Sistematis</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Technical Skills */}
            <Card className="p-8 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl mb-6">
                  <Terminal className="w-6 h-6 mr-3 text-blue-600" />
                  Keterampilan Teknis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-medium text-slate-800">{skill.name}</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {skill.tools.map((tool, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <span className="text-sm font-medium text-slate-600">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl mb-6">
                  <Users className="w-6 h-6 mr-3 text-blue-600" />
                  Keterampilan Non-Teknis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-slate-800">{skill.name}</h3>
                        <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{skill.description}</p>
                      <Progress value={skill.level} className="h-1" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {activeSection === "experience" && (
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Tanggung Jawab Pekerjaan</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Detail tanggung jawab dan aktivitas harian sebagai Helpdesk NOC Specialist di PT PLN ICON+ SBU Jabar.
              </p>
            </div>

            <div className="space-y-8">
              {jobResponsibilities.map((responsibility, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl text-slate-800">
                      <responsibility.icon className="w-6 h-6 mr-3 text-blue-600" />
                      {responsibility.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {responsibility.tasks.map((task, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Company Info */}
            <Card className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Globe className="w-6 h-6 mr-3 text-blue-600" />
                  PT PLN ICON+ SBU Jabar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-3">Tentang Perusahaan</h3>
                    <p className="text-slate-600 leading-relaxed">
                      PT PLN ICON+ adalah anak perusahaan PT PLN (Persero) yang bergerak di bidang teknologi informasi
                      dan komunikasi, khususnya dalam penyediaan layanan jaringan telekomunikasi dan infrastruktur IT.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-3">Lingkup Kerja</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-slate-600">Operasional 24/7 NOC</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-slate-600">Monitoring Jaringan Telekomunikasi</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-slate-600">Support Infrastruktur IT</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === "projects" && (
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Proyek & Bukti Pekerjaan</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Visualisasi dari tools dan proses yang saya tangani sehari-hari sebagai Helpdesk NOC Specialist.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {workProjects.map((project, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Fitur Utama:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-800 mb-2">Dampak:</h4>
                      <p className="text-green-700 text-sm">{project.impact}</p>
                    </div>

                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Lihat Detail
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tools Overview */}
            <Card className="mt-12 p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Database className="w-6 h-6 mr-3 text-blue-600" />
                  Tools & Sistem yang Digunakan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-800 mb-2">Monitoring Systems</h3>
                    <div className="space-y-1 text-sm text-slate-600">
                      <p>Zabbix</p>
                      <p>NMS Hariff</p>
                      <p>NMS Sinergi</p>
                      <p>Monitoring Scada</p>
                    </div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <FileText className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-800 mb-2">Ticketing System</h3>
                    <div className="space-y-1 text-sm text-slate-600">
                      <p>ICRM+</p>
                      <p>WhatsApp Integration</p>
                      <p>Reporting Tools</p>
                    </div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <Network className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-800 mb-2">Network Devices</h3>
                    <div className="space-y-1 text-sm text-slate-600">
                      <p>BDCOM</p>
                      <p>Fiberhome</p>
                      <p>Zyxel</p>
                      <p>Cisco ASR920</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === "contact" && (
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Hubungi Saya</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Terima kasih telah mengunjungi portofolio saya! Jangan ragu untuk menghubungi saya untuk diskusi lebih
                lanjut.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Informasi Kontak</CardTitle>
                  <CardDescription>Silakan hubungi saya melalui channel berikut</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Email</p>
                      <p className="text-slate-600">tiarfirmansss@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">LinkedIn</p>
                      <p className="text-slate-600">Tiar Firman Syah</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Lokasi</p>
                      <p className="text-slate-600">Jawa Barat, Indonesia</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h3 className="font-semibold text-slate-800 mb-4">Terhubung dengan saya</h3>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href="https://www.linkedin.com/in/tiar-firman-syah-4b2706297/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="mailto:tiarfirmansss@gmail.com">
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Statistik Profesional</CardTitle>
                  <CardDescription>Ringkasan pencapaian dan performa kerja</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                      <div className="text-sm text-slate-600">Operasional NOC</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                      <div className="text-sm text-slate-600">Tingkat Resolusi</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                      <div className="text-sm text-slate-600">Tiket per Hari</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                      <div className="text-3xl font-bold text-orange-600 mb-2">{"<5"}</div>
                      <div className="text-sm text-slate-600">Menit Response</div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                    <h3 className="font-semibold text-slate-800 mb-3">Status Saat Ini</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-slate-600">Aktif bekerja di PT PLN ICON+ SBU Jabar</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-500">Biasanya merespon dalam 24 jam</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Tiar Firman Syah</span>
                <p className="text-xs text-slate-400">Helpdesk NOC Specialist</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6">
              PT PLN ICON+ SBU Jabar • Menjaga ketersediaan layanan jaringan telekomunikasi 24/7
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white" asChild>
                <a
                  href="https://www.linkedin.com/in/tiar-firman-syah-4b2706297/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white" asChild>
                <a href="mailto:tiarfirmansss@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
            <div className="border-t border-slate-800 pt-8">
              <p className="text-slate-500 text-sm">
                © 2024 Tiar Firman Syah. Dibangun dengan dedikasi untuk teknologi dan keunggulan operasional.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
