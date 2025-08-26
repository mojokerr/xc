"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  LayoutDashboard,
  MessageSquare,
  Palette,
  BarChart3,
  Settings,
  Globe,
  Plus,
  Sparkles,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react"

export default function Dashboard() {
  const [language, setLanguage] = useState<"ar" | "en">("ar")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"))
    document.documentElement.lang = language === "ar" ? "en" : "ar"
    document.documentElement.dir = language === "ar" ? "ltr" : "rtl"
  }

  const content = {
    ar: {
      title: "مرحباً بك في Chat2Site",
      subtitle: "منصة إنشاء المواقع بالذكاء الاصطناعي",
      description: "أنشئ موقعك الإلكتروني بسهولة من خلال محادثة تفاعلية مع مساعدنا الذكي",
      quickActions: "إجراءات سريعة",
      createSite: "إنشاء موقع جديد",
      manageSites: "إدارة المواقع",
      campaigns: "الحملات التسويقية",
      analytics: "التحليلات",
      aiAssistant: "المساعد الذكي",
      aiDescription: "احصل على اقتراحات ذكية لتحسين موقعك",
      recentActivity: "النشاط الأخير",
      stats: {
        sites: "المواقع",
        visitors: "الزوار",
        campaigns: "الحملات",
        conversion: "معدل التحويل",
      },
      features: {
        dragDrop: "محرر السحب والإفلات",
        dragDropDesc: "صمم صفحاتك بسهولة",
        seo: "تحسين محركات البحث",
        seoDesc: "تحسين تلقائي لمحركات البحث",
        multilang: "دعم متعدد اللغات",
        multilangDesc: "عربي وإنجليزي",
        security: "أمان متقدم",
        securityDesc: "حماية كاملة لبياناتك",
      },
    },
    en: {
      title: "Welcome to Chat2Site",
      subtitle: "AI-Powered Website Creation Platform",
      description: "Create your website easily through interactive conversation with our smart assistant",
      quickActions: "Quick Actions",
      createSite: "Create New Site",
      manageSites: "Manage Sites",
      campaigns: "Marketing Campaigns",
      analytics: "Analytics",
      aiAssistant: "AI Assistant",
      aiDescription: "Get smart suggestions to improve your website",
      recentActivity: "Recent Activity",
      stats: {
        sites: "Sites",
        visitors: "Visitors",
        campaigns: "Campaigns",
        conversion: "Conversion Rate",
      },
      features: {
        dragDrop: "Drag & Drop Editor",
        dragDropDesc: "Design your pages easily",
        seo: "SEO Optimization",
        seoDesc: "Automatic search engine optimization",
        multilang: "Multi-language Support",
        multilangDesc: "Arabic and English",
        security: "Advanced Security",
        securityDesc: "Complete protection for your data",
      },
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Chat2Site</h1>
                <p className="text-sm text-muted-foreground">{t.subtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={toggleLanguage}>
                <Globe className="w-4 h-4 mr-2" />
                {language === "ar" ? "English" : "العربية"}
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>المستخدم</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">{t.title}</h2>
          <p className="text-muted-foreground text-lg">{t.description}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t.stats.sites}</p>
                  <p className="text-2xl font-bold text-primary">12</p>
                </div>
                <LayoutDashboard className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t.stats.visitors}</p>
                  <p className="text-2xl font-bold text-accent">2,847</p>
                </div>
                <Users className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t.stats.campaigns}</p>
                  <p className="text-2xl font-bold text-secondary">8</p>
                </div>
                <BarChart3 className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t.stats.conversion}</p>
                  <p className="text-2xl font-bold text-green-600">24.5%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  {t.quickActions}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="h-20 flex-col gap-2 bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                    <Plus className="w-6 h-6" />
                    {t.createSite}
                  </Button>

                  <Button
                    variant="outline"
                    className="h-20 flex-col gap-2 border-primary/20 hover:bg-primary/5 bg-transparent"
                  >
                    <LayoutDashboard className="w-6 h-6 text-primary" />
                    {t.manageSites}
                  </Button>

                  <Button
                    variant="outline"
                    className="h-20 flex-col gap-2 border-accent/20 hover:bg-accent/5 bg-transparent"
                  >
                    <BarChart3 className="w-6 h-6 text-accent" />
                    {t.campaigns}
                  </Button>

                  <Button
                    variant="outline"
                    className="h-20 flex-col gap-2 border-secondary/20 hover:bg-secondary/5 bg-transparent"
                  >
                    <TrendingUp className="w-6 h-6 text-secondary" />
                    {t.analytics}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>المميزات الرئيسية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                    <Palette className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{t.features.dragDrop}</h3>
                    <p className="text-sm text-muted-foreground">{t.features.dragDropDesc}</p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
                    <TrendingUp className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{t.features.seo}</h3>
                    <p className="text-sm text-muted-foreground">{t.features.seoDesc}</p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20">
                    <Globe className="w-8 h-8 text-secondary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{t.features.multilang}</h3>
                    <p className="text-sm text-muted-foreground">{t.features.multilangDesc}</p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/5 to-green-500/10 border border-green-500/20">
                    <Settings className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{t.features.security}</h3>
                    <p className="text-sm text-muted-foreground">{t.features.securityDesc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Assistant */}
          <div>
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  {t.aiAssistant}
                </CardTitle>
                <CardDescription>{t.aiDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-background/50 border border-border">
                    <p className="text-sm text-muted-foreground">مرحباً! كيف يمكنني مساعدتك في تحسين موقعك اليوم؟</p>
                  </div>

                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">
                      تحسين SEO
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      إضافة محتوى
                    </Badge>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    بدء محادثة
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">{t.recentActivity}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">تم إنشاء صفحة جديدة</p>
                      <p className="text-xs text-muted-foreground">منذ ساعتين</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">تحديث حملة تسويقية</p>
                      <p className="text-xs text-muted-foreground">منذ 4 ساعات</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">تحسين SEO تلقائي</p>
                      <p className="text-xs text-muted-foreground">أمس</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
