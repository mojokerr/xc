"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  MessageSquare,
  Palette,
  BarChart3,
  Globe,
  Sparkles,
  Users,
  TrendingUp,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Shield,
  Clock,
  Smartphone,
  Monitor,
  Tablet,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [language, setLanguage] = useState<"ar" | "en">("ar")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"))
    document.documentElement.lang = language === "ar" ? "en" : "ar"
    document.documentElement.dir = language === "ar" ? "ltr" : "rtl"
  }

  const content = {
    ar: {
      // Hero Section
      heroTitle: "أنشئ موقعك الإلكتروني في دقائق",
      heroSubtitle: "بدون برمجة، بدون تعقيد",
      heroDescription: "منصة Chat2Site تستخدم الذكاء الاصطناعي لتحويل أفكارك إلى مواقع ويب احترافية من خلال محادثة بسيطة",
      startFree: "ابدأ مجاناً",
      watchDemo: "شاهد العرض التوضيحي",
      
      // Stats
      stats: {
        websites: "موقع تم إنشاؤه",
        users: "مستخدم نشط",
        satisfaction: "رضا العملاء",
        countries: "دولة",
      },
      
      // Features
      featuresTitle: "لماذا Chat2Site؟",
      featuresSubtitle: "كل ما تحتاجه لإنشاء موقع ويب ناجح",
      features: {
        ai: {
          title: "ذكاء اصطناعي متقدم",
          description: "مساعد ذكي يفهم احتياجاتك ويحولها إلى موقع احترافي"
        },
        noCode: {
          title: "بدون برمجة",
          description: "لا تحتاج لأي خبرة تقنية، فقط أخبرنا ما تريد"
        },
        responsive: {
          title: "متجاوب مع جميع الأجهزة",
          description: "مواقع تعمل بشكل مثالي على الهاتف والكمبيوتر واللوحي"
        },
        fast: {
          title: "سريع وآمن",
          description: "مواقع سريعة التحميل مع أعلى معايير الأمان"
        },
        seo: {
          title: "محسّن لمحركات البحث",
          description: "مواقع محسّنة تلقائياً لتظهر في نتائج البحث الأولى"
        },
        multilang: {
          title: "دعم متعدد اللغات",
          description: "إنشاء مواقع بالعربية والإنجليزية وأكثر من 20 لغة"
        }
      },
      
      // How it works
      howItWorksTitle: "كيف يعمل Chat2Site؟",
      howItWorksSubtitle: "ثلاث خطوات بسيطة لموقعك الجديد",
      steps: {
        chat: {
          title: "تحدث مع المساعد الذكي",
          description: "أخبر مساعدنا الذكي عن نوع الموقع الذي تريده وما هي احتياجاتك"
        },
        generate: {
          title: "الذكاء الاصطناعي ينشئ موقعك",
          description: "خلال دقائق، سيقوم الذكاء الاصطناعي بإنشاء موقع احترافي مخصص لك"
        },
        customize: {
          title: "خصص وانشر",
          description: "عدّل على موقعك بسهولة وانشره على الإنترنت بنقرة واحدة"
        }
      },
      
      // Testimonials
      testimonialsTitle: "ماذا يقول عملاؤنا؟",
      testimonials: [
        {
          name: "أحمد محمد",
          role: "صاحب مطعم",
          content: "أنشأت موقع مطعمي في أقل من 10 دقائق! النتيجة كانت أفضل من توقعاتي",
          rating: 5
        },
        {
          name: "فاطمة العلي",
          role: "طبيبة أسنان",
          content: "موقع عيادتي أصبح احترافياً جداً وزاد عدد المرضى بشكل ملحوظ",
          rating: 5
        },
        {
          name: "محمد السعيد",
          role: "مصمم جرافيك",
          content: "كمصمم، أقدر جودة التصميم والسهولة في التخصيص. منصة رائعة!",
          rating: 5
        }
      ],
      
      // Pricing
      pricingTitle: "خطط تناسب جميع الاحتياجات",
      pricingSubtitle: "ابدأ مجاناً وارتقِ حسب نموك",
      plans: {
        free: {
          name: "مجاني",
          price: "0",
          description: "مثالي للمبتدئين",
          features: ["موقع واحد", "5 صفحات", "استضافة مجانية", "دعم أساسي"]
        },
        pro: {
          name: "احترافي",
          price: "29",
          description: "للأعمال الصغيرة",
          features: ["5 مواقع", "صفحات غير محدودة", "نطاق مخصص", "دعم متقدم", "تحليلات مفصلة"]
        },
        business: {
          name: "الأعمال",
          price: "99",
          description: "للشركات الكبيرة",
          features: ["مواقع غير محدودة", "فريق متعدد", "API متقدم", "دعم أولوية", "تخصيص كامل"]
        }
      },
      
      // CTA
      ctaTitle: "جاهز لإنشاء موقعك؟",
      ctaDescription: "انضم إلى آلاف المستخدمين الذين يثقون في Chat2Site",
      ctaButton: "ابدأ الآن مجاناً",
      
      // Footer
      footerDescription: "منصة Chat2Site - إنشاء المواقع بالذكاء الاصطناعي",
      footerLinks: {
        product: "المنتج",
        features: "المميزات",
        pricing: "الأسعار",
        support: "الدعم",
        about: "من نحن",
        contact: "اتصل بنا",
        privacy: "سياسة الخصوصية",
        terms: "شروط الاستخدام"
      }
    },
    en: {
      // Hero Section
      heroTitle: "Create Your Website in Minutes",
      heroSubtitle: "No Coding, No Complexity",
      heroDescription: "Chat2Site uses AI to transform your ideas into professional websites through simple conversation",
      startFree: "Start Free",
      watchDemo: "Watch Demo",
      
      // Stats
      stats: {
        websites: "Websites Created",
        users: "Active Users",
        satisfaction: "Customer Satisfaction",
        countries: "Countries",
      },
      
      // Features
      featuresTitle: "Why Chat2Site?",
      featuresSubtitle: "Everything you need for a successful website",
      features: {
        ai: {
          title: "Advanced AI",
          description: "Smart assistant that understands your needs and creates professional websites"
        },
        noCode: {
          title: "No Code Required",
          description: "No technical expertise needed, just tell us what you want"
        },
        responsive: {
          title: "Responsive Design",
          description: "Websites that work perfectly on mobile, desktop, and tablet"
        },
        fast: {
          title: "Fast & Secure",
          description: "Lightning-fast websites with top-tier security standards"
        },
        seo: {
          title: "SEO Optimized",
          description: "Automatically optimized to rank high in search results"
        },
        multilang: {
          title: "Multi-language Support",
          description: "Create websites in Arabic, English, and 20+ languages"
        }
      },
      
      // How it works
      howItWorksTitle: "How Chat2Site Works?",
      howItWorksSubtitle: "Three simple steps to your new website",
      steps: {
        chat: {
          title: "Chat with AI Assistant",
          description: "Tell our smart assistant about the website you want and your requirements"
        },
        generate: {
          title: "AI Creates Your Website",
          description: "Within minutes, AI will create a professional website customized for you"
        },
        customize: {
          title: "Customize & Publish",
          description: "Easily modify your website and publish it online with one click"
        }
      },
      
      // Testimonials
      testimonialsTitle: "What Our Customers Say?",
      testimonials: [
        {
          name: "Ahmed Mohammed",
          role: "Restaurant Owner",
          content: "Created my restaurant website in less than 10 minutes! The result exceeded my expectations",
          rating: 5
        },
        {
          name: "Fatima Al-Ali",
          role: "Dentist",
          content: "My clinic website became very professional and patient numbers increased significantly",
          rating: 5
        },
        {
          name: "Mohammed Al-Saeed",
          role: "Graphic Designer",
          content: "As a designer, I appreciate the design quality and ease of customization. Amazing platform!",
          rating: 5
        }
      ],
      
      // Pricing
      pricingTitle: "Plans for Every Need",
      pricingSubtitle: "Start free and scale as you grow",
      plans: {
        free: {
          name: "Free",
          price: "0",
          description: "Perfect for beginners",
          features: ["1 Website", "5 Pages", "Free Hosting", "Basic Support"]
        },
        pro: {
          name: "Professional",
          price: "29",
          description: "For small businesses",
          features: ["5 Websites", "Unlimited Pages", "Custom Domain", "Advanced Support", "Detailed Analytics"]
        },
        business: {
          name: "Business",
          price: "99",
          description: "For large companies",
          features: ["Unlimited Websites", "Multi-team", "Advanced API", "Priority Support", "Full Customization"]
        }
      },
      
      // CTA
      ctaTitle: "Ready to Create Your Website?",
      ctaDescription: "Join thousands of users who trust Chat2Site",
      ctaButton: "Start Now for Free",
      
      // Footer
      footerDescription: "Chat2Site Platform - AI-Powered Website Creation",
      footerLinks: {
        product: "Product",
        features: "Features",
        pricing: "Pricing",
        support: "Support",
        about: "About Us",
        contact: "Contact",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    }
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Chat2Site</h1>
                <p className="text-sm text-muted-foreground hidden sm:block">AI Website Builder</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.footerLinks.features}
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.footerLinks.pricing}
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                العملاء
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={toggleLanguage}>
                <Globe className="w-4 h-4 mr-2" />
                {language === "ar" ? "English" : "العربية"}
              </Button>
              <Button asChild className="bg-gradient-to-r from-primary to-accent">
                <Link href="/auth/login">دخول</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              الذكاء الاصطناعي الجديد
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t.heroTitle}
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t.heroSubtitle}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg px-8 py-6">
                <Link href="/auth/signup">
                  {t.startFree}
                  <ArrowRight className="w-5 h-5 mr-2" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                <Play className="w-5 h-5 mr-2" />
                {t.watchDemo}
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">{t.stats.websites}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">5,000+</div>
                <div className="text-muted-foreground">{t.stats.users}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                <div className="text-muted-foreground">{t.stats.satisfaction}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-muted-foreground">{t.stats.countries}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.featuresTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.featuresSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <MessageSquare className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t.features.ai.title}</h3>
                <p className="text-muted-foreground">{t.features.ai.description}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t.features.noCode.title}</h3>
                <p className="text-muted-foreground">{t.features.noCode.description}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex gap-2 mb-4">
                  <Smartphone className="w-6 h-6 text-secondary" />
                  <Tablet className="w-6 h-6 text-secondary" />
                  <Monitor className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.features.responsive.title}</h3>
                <p className="text-muted-foreground">{t.features.responsive.description}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-500/5 to-green-500/10 border-green-500/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex gap-2 mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.features.fast.title}</h3>
                <p className="text-muted-foreground">{t.features.fast.description}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-purple-500/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t.features.seo.title}</h3>
                <p className="text-muted-foreground">{t.features.seo.description}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-500/5 to-orange-500/10 border-orange-500/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t.features.multilang.title}</h3>
                <p className="text-muted-foreground">{t.features.multilang.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.howItWorksTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.howItWorksSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.steps.chat.title}</h3>
              <p className="text-muted-foreground">{t.steps.chat.description}</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <div className="bg-accent/10 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.steps.generate.title}</h3>
              <p className="text-muted-foreground">{t.steps.generate.description}</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <div className="bg-secondary/10 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.steps.customize.title}</h3>
              <p className="text-muted-foreground">{t.steps.customize.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.testimonialsTitle}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.pricingTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.pricingSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(t.plans).map(([key, plan]) => (
              <Card key={key} className={`relative ${key === 'pro' ? 'border-primary shadow-lg scale-105' : ''} hover:shadow-lg transition-all duration-300`}>
                {key === 'pro' && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent">
                    الأكثر شعبية
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">
                    ${plan.price}
                    <span className="text-lg text-muted-foreground">/شهر</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${key === 'pro' ? 'bg-gradient-to-r from-primary to-accent' : ''}`} variant={key === 'pro' ? 'default' : 'outline'}>
                    <Link href="/auth/signup">
                      {key === 'free' ? 'ابدأ مجاناً' : 'اختر هذه الخطة'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t.ctaDescription}
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
            <Link href="/auth/signup">
              {t.ctaButton}
              <ArrowRight className="w-5 h-5 mr-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Chat2Site</span>
              </div>
              <p className="text-muted-foreground mb-4">
                {t.footerDescription}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{t.footerLinks.product}</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">{t.footerLinks.features}</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">{t.footerLinks.pricing}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{t.footerLinks.support}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t.footerLinks.about}</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t.footerLinks.contact}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">قانوني</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t.footerLinks.privacy}</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t.footerLinks.terms}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Chat2Site. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}