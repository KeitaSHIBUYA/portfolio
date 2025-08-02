"use client";

import type { NextUIColor } from "@/types/ui";
import {
  Button,
  Card,
  CardBody,
  Chip,
  Input,
  Textarea,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import {
  Clock,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  // Phone,
  Send,
} from "lucide-react";
import React from "react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email（準備中）",
      value: "shibuya.keita@lec-infra.com",
      href: "mailto:shibuya.keita@lec-infra.com",
      color: "primary",
    },
    // {
    //   icon: Phone,
    //   label: "電話",
    //   value: "+81-90-1234-5678",
    //   href: "tel:+81901234567",
    //   color: "secondary",
    // },
    {
      icon: MapPin,
      label: "所在地",
      value: "東京, 日本",
      href: "#",
      color: "success",
    },
    {
      icon: Clock,
      label: "対応時間",
      value: "平日 9:00-18:00 JST",
      href: "#",
      color: "warning",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/KeitaSHIBUYA",
      color: "default",
    },
    // {
    //   icon: Linkedin,
    //   label: "LinkedIn",
    //   href: "https://linkedin.com",
    //   color: "primary",
    // },
    // {
    //   icon: Globe,
    //   label: "Blog",
    //   href: "https://blog.example.com",
    //   color: "secondary",
    // },
  ];

  const handleInputChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理をここに実装
    console.log("Form submitted:", formData);
    // 実際の実装では、APIエンドポイントにデータを送信
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Chip variant="flat" color="danger" className="mb-4">
            Contact
          </Chip>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">お問い合わせ</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            SRE プロジェクトのご相談、技術コンサルティング、講演依頼など、
            <br />
            お気軽にお問い合わせください。迅速に対応いたします。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Status Block */}
            <motion.div variants={itemVariants} className="mb-8">
              <Card className="glass">
                <CardBody className="p-6">
                  <h4 className="text-lg font-bold mb-3 text-foreground">
                    現在のステータス
                  </h4>
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-success rounded-full mr-3 animate-pulse"></div>
                    <span className="text-success font-semibold">
                      副業停止中
                    </span>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    現在、Cloud Ace で SRE エンジニアとして働いています。
                    <br />
                    副業可能ではありますが、今は本業に集中しています。
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mb-8">
              <Card className="glass">
                <CardBody className="p-6">
                  <h4 className="text-lg font-bold mb-4 text-foreground">
                    ソーシャルメディア
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <Button
                          key={index}
                          isIconOnly
                          variant="flat"
                          color={social.color as NextUIColor}
                          size="lg"
                          as="a"
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:scale-105 transition-transform"
                          aria-label={`${social.label}を開く`}
                        >
                          <IconComponent size={20} aria-hidden="true" />
                        </Button>
                      );
                    })}
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            <h3 className="text-2xl font-bold mb-8 text-foreground">
              連絡先情報
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="glass hover:shadow-md transition-shadow duration-300">
                      <CardBody className="p-6">
                        <div className="flex items-center">
                          <div
                            className={`p-3 rounded-full bg-${info.color}/10 mr-4`}
                            role="img"
                            aria-label={`${info.label}のアイコン`}
                          >
                            <IconComponent
                              size={20}
                              className={`text-${info.color}`}
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p className="text-sm text-foreground/60 mb-1">
                              {info.label}
                            </p>
                            {info.href !== "#" ? (
                              <a
                                href={info.href}
                                className="font-semibold text-foreground hover:text-primary transition-colors"
                                aria-label={`${info.label}: ${info.value}`}
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="font-semibold text-foreground">
                                {info.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  メッセージを送信
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="お名前"
                      placeholder="山田太郎"
                      value={formData.name}
                      onChange={handleInputChange("name")}
                      variant="bordered"
                      isRequired
                    />
                    <Input
                      label="会社名"
                      placeholder="株式会社サンプル"
                      value={formData.company}
                      onChange={handleInputChange("company")}
                      variant="bordered"
                    />
                  </div>

                  <Input
                    label="メールアドレス"
                    placeholder="yamada.taro@example.com"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    variant="bordered"
                    isRequired
                  />

                  <Textarea
                    label="メッセージ"
                    placeholder="プロジェクトの詳細、ご質問、ご相談内容をお書きください..."
                    value={formData.message}
                    onChange={handleInputChange("message")}
                    variant="bordered"
                    minRows={4}
                    maxRows={8}
                    isRequired
                  />

                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    startContent={<Send size={18} aria-hidden="true" />}
                    className="w-full font-semibold"
                    aria-label="メッセージを送信する"
                  >
                    メッセージを送信
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-content2 rounded-lg">
                  <p className="text-sm text-foreground/70 text-center">
                    <strong>お返事について：</strong>
                    <br />
                    いただいたお問い合わせには、原則 24
                    時間以内にご返信いたします。
                  </p>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          {/* <Card className="glass max-w-4xl mx-auto">
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                一緒により良いシステムを作りませんか？
              </h3>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                信頼性、スケーラビリティ、そしてユーザー体験の向上を実現する
                Google Cloud SRE
                ソリューションについて、まずはお気軽にご相談ください。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  color="primary"
                  size="lg"
                  startContent={<Mail size={18} aria-hidden="true" />}
                  as="a"
                  href="mailto:shibuya.keita@lec-infra.com"
                  className="font-semibold"
                  aria-label="メールで相談する"
                >
                  今すぐ相談する
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  startContent={<Phone size={18} aria-hidden="true" />}
                  as="a"
                  href="tel:+81901234567"
                  className="font-semibold"
                  aria-label="電話で相談する"
                >
                  電話で相談
                </Button>
              </div>
            </CardBody>
          </Card> */}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-divider text-center"
      >
        <p className="text-foreground/60">
          © 2024 Keita SHIBUYA&apos;s Portfolio.
        </p>
      </motion.div>
    </section>
  );
};
