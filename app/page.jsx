"use client";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "🚀 AI Prompt Mega Pack",
    subtitle: "500+ ChatGPT & Midjourney Prompts",
    price: "$12.99",
    originalPrice: "$29.99",
    badge: "BEST SELLER",
    description: "İş, pazarlama, sosyal medya, e-ticaret, blog yazarlığı için hazır prompt şablonları. Kopyala-yapıştır ile hemen kullan.",
    features: ["500+ hazır prompt", "10 kategori", "Türkçe & İngilizce", "Ömür boyu güncelleme"],
    color: "#FF6B35",
  },
  {
    id: 2,
    name: "📋 Freelancer Notion Kit",
    subtitle: "Komple İş Yönetim Sistemi",
    price: "$9.99",
    originalPrice: "$24.99",
    badge: "YENİ",
    description: "Proje takibi, müşteri yönetimi, fatura şablonu, zaman takibi — freelancerlar için tek paket çözüm.",
    features: ["15+ şablon", "CRM sistemi", "Fatura oluşturucu", "Haftalık planlayıcı"],
    color: "#7B2FF7",
  },
  {
    id: 3,
    name: "📊 Social Media Content Calendar",
    subtitle: "90 Günlük İçerik Planı + Şablonlar",
    price: "$7.99",
    originalPrice: "$19.99",
    badge: "POPÜLER",
    description: "Instagram, TikTok, LinkedIn için 90 günlük içerik takvimi. Hazır post fikirleri ve Canva şablonları ile.",
    features: ["90 günlük plan", "270+ post fikri", "Canva şablonları", "Hashtag rehberi"],
    color: "#00C9A7",
  },
  {
    id: 4,
    name: "💼 Startup Launch Bundle",
    subtitle: "İş Planı + Pitch Deck + Finansal Model",
    price: "$14.99",
    originalPrice: "$39.99",
    badge: "PREMİUM",
    description: "Girişimciler için komple başlangıç paketi. İş planı, yatırımcı sunumu ve finansal projeksiyon şablonları.",
    features: ["İş planı şablonu", "Pitch deck (20 slayt)", "Finansal model (Excel)", "Yatırımcı e-posta şablonları"],
    color: "#FF2D6F",
  },
];

const testimonials = [
  { name: "Ayşe K.", role: "Freelance Tasarımcı", text: "Notion Kit sayesinde müşterilerimi çok daha iyi yönetiyorum. Fatura şablonu tek başına parasını hak ediyor!", stars: 5 },
  { name: "Mehmet T.", role: "E-ticaret Girişimcisi", text: "AI Prompt Pack ile ürün açıklamalarımı 10 kat hızlı yazıyorum. Satışlarım %40 arttı.", stars: 5 },
  { name: "Zeynep A.", role: "Sosyal Medya Uzmanı", text: "Content Calendar olmadan nasıl çalışıyormuşum anlamıyorum. Her gün ne paylaşacağımı biliyorum artık.", stars: 5 },
];

const stats = [
  { number: "2,500+", label: "Mutlu Müşteri" },
  { number: "4.9/5", label: "Ortalama Puan" },
  { number: "50+", label: "Ülkede Satış" },
  { number: "%100", label: "Para İade Garantisi" },
];

const faqs = [
  { q: "Ürünleri satın aldıktan sonra nasıl kullanabilirim?", a: "Satın alma sonrası anında indirme linki alırsınız. Notion şablonları için 'Duplicate' butonuna tıklamanız yeterli. Prompt paketleri PDF ve Excel formatında gelir." },
  { q: "İade politikanız nedir?", a: "30 gün koşulsuz para iade garantimiz var. Memnun kalmazsanız, soru sormadan paranızı iade ediyoruz." },
  { q: "Güncellemeler dahil mi?", a: "Evet! Tüm ürünler ömür boyu ücretsiz güncelleme içerir. Yeni promptlar ve şablonlar eklendikçe otomatik erişim sağlarsınız." },
  { q: "Türkçe mi İngilizce mi?", a: "Tüm ürünlerimiz hem Türkçe hem İngilizce içerik barındırır. Global pazarda da kullanabilirsiniz." },
];

function StarRating({ count }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} style={{ color: "#FFB800", fontSize: "16px" }}>★</span>
      ))}
    </div>
  );
}

function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1a1a2e" : "#12121f",
        border: `1px solid ${hovered ? product.color : "#2a2a3e"}`,
        borderRadius: "20px",
        padding: "32px",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 60px ${product.color}22` : "0 4px 20px rgba(0,0,0,0.3)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Badge */}
      <div style={{
        position: "absolute",
        top: "16px",
        right: "16px",
        background: product.color,
        color: "white",
        padding: "4px 12px",
        borderRadius: "20px",
        fontSize: "11px",
        fontWeight: "700",
        letterSpacing: "0.5px",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {product.badge}
      </div>

      {/* Glow effect */}
      <div style={{
        position: "absolute",
        top: "-50%",
        left: "-50%",
        width: "200%",
        height: "200%",
        background: `radial-gradient(circle at 50% 50%, ${product.color}08 0%, transparent 50%)`,
        pointerEvents: "none",
      }} />

      <div style={{ fontSize: "32px", marginBottom: "12px" }}>{product.name.split(" ")[0]}</div>
      <h3 style={{
        fontFamily: "'Space Grotesk', 'DM Sans', sans-serif",
        fontSize: "22px",
        fontWeight: "700",
        color: "#ffffff",
        margin: "0 0 4px 0",
      }}>
        {product.name.substring(product.name.indexOf(" ") + 1)}
      </h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "14px",
        color: "#8888aa",
        margin: "0 0 20px 0",
      }}>
        {product.subtitle}
      </p>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "14px",
        color: "#aaaacc",
        lineHeight: "1.6",
        margin: "0 0 20px 0",
      }}>
        {product.description}
      </p>

      {/* Features */}
      <div style={{ marginBottom: "24px" }}>
        {product.features.map((f, i) => (
          <div key={i} style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            color: "#ccccee",
          }}>
            <span style={{ color: product.color, fontSize: "14px" }}>✓</span>
            {f}
          </div>
        ))}
      </div>

      {/* Price */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "20px" }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "32px",
          fontWeight: "800",
          color: "#ffffff",
        }}>
          {product.price}
        </span>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "16px",
          color: "#666688",
          textDecoration: "line-through",
        }}>
          {product.originalPrice}
        </span>
      </div>

      {/* CTA Button */}
      <button style={{
        width: "100%",
        padding: "14px",
        background: `linear-gradient(135deg, ${product.color}, ${product.color}cc)`,
        color: "white",
        border: "none",
        borderRadius: "12px",
        fontSize: "15px",
        fontWeight: "700",
        fontFamily: "'DM Sans', sans-serif",
        cursor: "pointer",
        transition: "all 0.3s ease",
        letterSpacing: "0.3px",
      }}>
        Hemen Satın Al →
      </button>
    </div>
  );
}

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        background: "#12121f",
        border: "1px solid #2a2a3e",
        borderRadius: "16px",
        padding: "20px 24px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        marginBottom: "12px",
      }}
    >
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "15px",
          fontWeight: "600",
          color: "#ffffff",
        }}>
          {faq.q}
        </span>
        <span style={{
          color: "#7B2FF7",
          fontSize: "20px",
          transition: "transform 0.3s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}>
          +
        </span>
      </div>
      {open && (
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          color: "#8888aa",
          lineHeight: "1.7",
          marginTop: "12px",
          marginBottom: "0",
        }}>
          {faq.a}
        </p>
      )}
    </div>
  );
}

export default function DigitalProductStore() {
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a14",
      color: "#ffffff",
      overflowX: "hidden",
    }}>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* ===== HERO ===== */}
      <section style={{
        position: "relative",
        padding: "100px 24px 80px",
        textAlign: "center",
        overflow: "hidden",
      }}>
        {/* Animated gradient orbs */}
        <div style={{
          position: "absolute",
          top: "-20%",
          left: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, #7B2FF720 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 8s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, #FF6B3518 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 10s ease-in-out infinite reverse",
        }} />

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
        `}</style>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
          {/* Trust badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#1a1a2e",
            border: "1px solid #2a2a3e",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "32px",
            animation: "fadeUp 0.6s ease-out",
          }}>
            <span style={{ fontSize: "14px" }}>⚡</span>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              color: "#aaaacc",
            }}>
              2,500+ dijital girişimci bu araçları kullanıyor
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: "800",
            lineHeight: "1.1",
            margin: "0 0 24px 0",
            animation: "fadeUp 0.8s ease-out",
          }}>
            Dijital Ürünlerle{" "}
            <span style={{
              background: "linear-gradient(135deg, #7B2FF7, #FF6B35, #00C9A7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Pasif Gelir
            </span>{" "}
            Kazanmaya Başla
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "18px",
            color: "#8888aa",
            lineHeight: "1.7",
            maxWidth: "600px",
            margin: "0 auto 40px",
            animation: "fadeUp 1s ease-out",
          }}>
            AI prompt paketleri, Notion şablonları ve içerik planları ile işini büyüt.
            Bir kere al, sonsuza kadar kullan.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "fadeUp 1.2s ease-out",
          }}>
            <a href="#products" style={{
              padding: "16px 36px",
              background: "linear-gradient(135deg, #7B2FF7, #5B1FD7)",
              color: "white",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: "700",
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: "none",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0 8px 30px #7B2FF744",
            }}>
              Ürünleri Keşfet ↓
            </a>
            <a href="#bundle" style={{
              padding: "16px 36px",
              background: "transparent",
              color: "#ffffff",
              border: "1px solid #3a3a4e",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}>
              %60 İndirimli Paket →
            </a>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "24px",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 24px 80px",
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            textAlign: "center",
            padding: "24px",
            background: "#12121f",
            borderRadius: "16px",
            border: "1px solid #1e1e30",
          }}>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "28px",
              fontWeight: "800",
              background: "linear-gradient(135deg, #7B2FF7, #FF6B35)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              {s.number}
            </div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              color: "#8888aa",
              marginTop: "4px",
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="products" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "36px",
            fontWeight: "800",
            margin: "0 0 12px 0",
          }}>
            Ürünlerimiz
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "16px",
            color: "#8888aa",
          }}>
            Her biri profesyonel ekipler tarafından hazırlandı
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "24px",
        }}>
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* ===== MEGA BUNDLE ===== */}
      <section id="bundle" style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "0 24px 80px",
      }}>
        <div style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #12121f 100%)",
          border: "2px solid #7B2FF7",
          borderRadius: "24px",
          padding: "48px 40px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #7B2FF7, #FF6B35, #00C9A7, #FF2D6F)",
          }} />

          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #FF6B35, #FF2D6F)",
            color: "white",
            padding: "6px 20px",
            borderRadius: "100px",
            fontSize: "13px",
            fontWeight: "700",
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: "24px",
          }}>
            🔥 SINIRLI SÜRELİ TEKLİF
          </div>

          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "32px",
            fontWeight: "800",
            margin: "0 0 12px 0",
          }}>
            Mega Bundle — 4 Ürün Bir Arada
          </h2>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "16px",
            color: "#8888aa",
            lineHeight: "1.6",
            marginBottom: "32px",
          }}>
            Tüm ürünlerimizi tek seferde al, %60 tasarruf et.
            Ayrı ayrı $45.96 yerine sadece $19.99!
          </p>

          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            gap: "16px",
            marginBottom: "32px",
          }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "48px",
              fontWeight: "800",
              color: "#ffffff",
            }}>
              $19.99
            </span>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "20px",
              color: "#666688",
              textDecoration: "line-through",
            }}>
              $45.96
            </span>
            <span style={{
              background: "#00C9A7",
              color: "#0a0a14",
              padding: "4px 12px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "700",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              -%60
            </span>
          </div>

          <button style={{
            padding: "18px 48px",
            background: "linear-gradient(135deg, #7B2FF7, #5B1FD7)",
            color: "white",
            border: "none",
            borderRadius: "14px",
            fontSize: "17px",
            fontWeight: "700",
            fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer",
            boxShadow: "0 8px 30px #7B2FF744",
            transition: "transform 0.3s ease",
          }}>
            Mega Bundle'ı Al — $19.99 →
          </button>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            color: "#666688",
            marginTop: "16px",
          }}>
            30 gün koşulsuz para iade garantisi
          </p>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "32px",
          fontWeight: "800",
          textAlign: "center",
          marginBottom: "40px",
        }}>
          Müşterilerimiz Ne Diyor?
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: "#12121f",
              border: "1px solid #1e1e30",
              borderRadius: "20px",
              padding: "28px",
            }}>
              <StarRating count={t.stars} />
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "#ccccee",
                lineHeight: "1.7",
                margin: "16px 0",
                fontStyle: "italic",
              }}>
                "{t.text}"
              </p>
              <div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#ffffff",
                }}>
                  {t.name}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  color: "#666688",
                }}>
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "32px",
          fontWeight: "800",
          textAlign: "center",
          marginBottom: "48px",
        }}>
          Nasıl Çalışır?
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            { step: "01", title: "Ürünü Seç", desc: "İhtiyacına uygun paketi veya bundle'ı seç.", icon: "🛒" },
            { step: "02", title: "Anında İndir", desc: "Ödeme sonrası dosyalara anında eriş.", icon: "⚡" },
            { step: "03", title: "Kullanmaya Başla", desc: "Kopyala-yapıştır ile hemen işine uygula.", icon: "🚀" },
          ].map((s, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              background: "#12121f",
              border: "1px solid #1e1e30",
              borderRadius: "16px",
              padding: "24px 28px",
            }}>
              <div style={{
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #7B2FF711, #FF6B3511)",
                borderRadius: "14px",
                fontSize: "28px",
                flexShrink: 0,
              }}>
                {s.icon}
              </div>
              <div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "11px",
                  fontWeight: "600",
                  color: "#7B2FF7",
                  letterSpacing: "2px",
                  marginBottom: "4px",
                }}>
                  ADIM {s.step}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#ffffff",
                  marginBottom: "2px",
                }}>
                  {s.title}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "#8888aa",
                }}>
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section style={{ maxWidth: "700px", margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "32px",
          fontWeight: "800",
          textAlign: "center",
          marginBottom: "40px",
        }}>
          Sıkça Sorulan Sorular
        </h2>
        {faqs.map((f, i) => <FAQItem key={i} faq={f} />)}
      </section>

      {/* ===== EMAIL SIGNUP ===== */}
      <section style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "0 24px 80px",
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "28px",
          fontWeight: "800",
          marginBottom: "12px",
        }}>
          Ücretsiz Prompt Paketi Al
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "15px",
          color: "#8888aa",
          marginBottom: "24px",
        }}>
          E-posta bültenimize katıl, 50 ücretsiz AI prompt'u anında indir!
        </p>

        <div style={{
          display: "flex",
          gap: "12px",
          maxWidth: "450px",
          margin: "0 auto",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          <input
            type="email"
            placeholder="ornek@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: 1,
              minWidth: "200px",
              padding: "14px 20px",
              background: "#12121f",
              border: "1px solid #2a2a3e",
              borderRadius: "12px",
              color: "#ffffff",
              fontSize: "15px",
              fontFamily: "'DM Sans', sans-serif",
              outline: "none",
            }}
          />
          <button style={{
            padding: "14px 28px",
            background: "linear-gradient(135deg, #7B2FF7, #5B1FD7)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "15px",
            fontWeight: "700",
            fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}>
            Ücretsiz İndir
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{
        borderTop: "1px solid #1e1e30",
        padding: "40px 24px",
        textAlign: "center",
      }}>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "20px",
          fontWeight: "700",
          marginBottom: "12px",
          background: "linear-gradient(135deg, #7B2FF7, #FF6B35)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
        }}>
          DigiToolkit
        </div>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "13px",
          color: "#666688",
          margin: "0 0 8px 0",
        }}>
          Dijital girişimciler için profesyonel araç setleri
        </p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "12px",
          color: "#44445a",
        }}>
          © 2026 DigiToolkit. Tüm hakları saklıdır.
        </p>
      </footer>
    </div>
  );
}
