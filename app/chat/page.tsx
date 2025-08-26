"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Message {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
  suggestions?: string[]
  websitePreview?: {
    title: string
    description: string
    features: string[]
  }
}

const quickSuggestions = [
  "أريد إنشاء موقع لمطعمي",
  "أحتاج موقع لعيادتي الطبية",
  "موقع لشركتي الناشئة",
  "متجر إلكتروني للملابس",
  "موقع شخصي للتصوير",
  "صفحة هبوط لتطبيقي",
]

const assistantResponses = {
  greeting:
    "مرحباً! أنا مساعدك الذكي في Chat2Site. سأساعدك في إنشاء موقع ويب مثالي لاحتياجاتك. ما نوع الموقع الذي تريد إنشاءه؟",
  restaurant: {
    content:
      "ممتاز! سأساعدك في إنشاء موقع رائع لمطعمك. سيتضمن الموقع قائمة الطعام، معلومات الاتصال، نظام حجز الطاولات، ومعرض صور للأطباق.",
    websitePreview: {
      title: "موقع مطعم احترافي",
      description: "موقع ويب متكامل لمطعمك مع تصميم جذاب وميزات متقدمة",
      features: [
        "قائمة طعام تفاعلية",
        "نظام حجز الطاولات",
        "معرض صور الأطباق",
        "معلومات الاتصال والموقع",
        "تقييمات العملاء",
        "تكامل مع وسائل التواصل",
      ],
    },
    suggestions: ["إضافة نظام طلبات أونلاين", "تخصيص الألوان والشعار", "إضافة خريطة الموقع", "بدء إنشاء الموقع الآن"],
  },
  clinic: {
    content:
      "رائع! سأقوم بتصميم موقع طبي احترافي لعيادتك. سيشمل معلومات الخدمات الطبية، نظام حجز المواعيد، ومعلومات الأطباء.",
    websitePreview: {
      title: "موقع عيادة طبية",
      description: "موقع طبي احترافي يبني الثقة مع المرضى ويسهل التواصل",
      features: [
        "نظام حجز المواعيد",
        "معلومات الخدمات الطبية",
        "ملفات الأطباء",
        "معلومات الاتصال",
        "ساعات العمل",
        "نصائح طبية",
      ],
    },
    suggestions: ["إضافة استمارة استشارة أولية", "تخصيص التصميم الطبي", "إضافة شهادات الاعتماد", "بدء إنشاء الموقع"],
  },
  startup: {
    content: "ممتاز! سأساعدك في إنشاء موقع مؤسسي قوي لشركتك الناشئة. سيعرض رؤيتك، خدماتك، وفريق العمل بطريقة احترافية.",
    websitePreview: {
      title: "موقع شركة ناشئة",
      description: "موقع مؤسسي حديث يعكس رؤية شركتك ويجذب المستثمرين والعملاء",
      features: ["صفحة رئيسية جذابة", "عرض الخدمات", "معلومات الفريق", "قسم المستثمرين", "مدونة الشركة", "نموذج اتصال"],
    },
    suggestions: ["إضافة قسم للمستثمرين", "عرض إحصائيات الشركة", "إضافة دراسات حالة", "بدء التصميم الآن"],
  },
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: assistantResponses.greeting,
      sender: "assistant",
      timestamp: new Date(),
      suggestions: quickSuggestions,
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      let response = assistantResponses.greeting
      let websitePreview
      let suggestions

      if (content.includes("مطعم") || content.includes("restaurant")) {
        response = assistantResponses.restaurant.content
        websitePreview = assistantResponses.restaurant.websitePreview
        suggestions = assistantResponses.restaurant.suggestions
      } else if (content.includes("عيادة") || content.includes("طبي") || content.includes("clinic")) {
        response = assistantResponses.clinic.content
        websitePreview = assistantResponses.clinic.websitePreview
        suggestions = assistantResponses.clinic.suggestions
      } else if (content.includes("شركة") || content.includes("startup") || content.includes("ناشئة")) {
        response = assistantResponses.startup.content
        websitePreview = assistantResponses.startup.websitePreview
        suggestions = assistantResponses.startup.suggestions
      } else {
        response =
          "شكراً لك! يمكنني مساعدتك في إنشاء أي نوع من المواقع. هل يمكنك إخباري بالمزيد عن نوع العمل أو الموقع الذي تريده؟"
        suggestions = quickSuggestions
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: "assistant",
        timestamp: new Date(),
        suggestions,
        websitePreview,
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Link href="/dashboard" className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C2S</span>
                </div>
                <h1 className="text-xl font-bold text-gray-900">Chat2Site</h1>
              </Link>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                المساعد الذكي
              </Badge>
            </div>
            <Button asChild variant="outline">
              <Link href="/dashboard">العودة للوحة التحكم</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-lg border h-[calc(100vh-200px)] flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-3xl ${message.sender === "user" ? "order-2" : "order-1"}`}>
                  {/* Message Bubble */}
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white ml-4"
                        : "bg-gray-100 text-gray-900 mr-4"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>

                  {/* Website Preview */}
                  {message.websitePreview && (
                    <Card className="mt-4 mr-4">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-blue-700">{message.websitePreview.title}</CardTitle>
                        <p className="text-sm text-gray-600">{message.websitePreview.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <h4 className="font-medium text-gray-900">الميزات المتضمنة:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {message.websitePreview.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <Button asChild className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700">
                            <Link href="/editor">
                              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                              </svg>
                              إنشاء هذا الموقع
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Suggestions */}
                  {message.suggestions && (
                    <div className="mt-4 mr-4">
                      <p className="text-xs text-gray-500 mb-2">اقتراحات سريعة:</p>
                      <div className="flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="text-xs hover:bg-blue-50 hover:border-blue-300"
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mt-2 ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white order-1"
                        : "bg-gradient-to-r from-purple-500 to-purple-600 text-white order-2"
                    }`}
                  >
                    {message.sender === "user" ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl px-4 py-3 mr-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t bg-gray-50 p-4">
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="اكتب رسالتك هنا..."
                className="flex-1 h-12"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage(inputValue)
                  }
                }}
              />
              <Button
                onClick={() => handleSendMessage(inputValue)}
                className="h-12 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                disabled={!inputValue.trim() || isTyping}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
