"use client";

import { Card, CardBody, Skeleton } from "@nextui-org/react";
import { Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface OgpData {
  title: string;
  description: string;
  image: string;
  siteName: string;
  url: string;
  favicon: string;
  publishedAt: string;
}

interface LinkCardProps {
  url: string;
  className?: string;
}

export const LinkCard: React.FC<LinkCardProps> = ({ url, className = "" }) => {
  const [ogpData, setOgpData] = useState<OgpData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchOgp = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/ogp?url=${encodeURIComponent(url)}`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setOgpData(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOgp();
  }, [url]);

  const domain = new URL(url).hostname;

  const formatDate = (dateString: string) => {
    if (!dateString) return null;
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return null;
    }
  };

  if (isLoading) {
    return (
      <Card className={`glass ${className}`}>
        <CardBody className="p-0">
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1 p-4">
              <Skeleton className="h-5 w-3/4 mb-2 rounded-lg" />
              <Skeleton className="h-4 w-full mb-1 rounded-lg" />
              <Skeleton className="h-4 w-2/3 mb-3 rounded-lg" />
              <Skeleton className="h-3 w-1/3 rounded-lg" />
            </div>
            <Skeleton className="w-full sm:w-48 h-32 sm:h-auto rounded-none sm:rounded-r-lg" />
          </div>
        </CardBody>
      </Card>
    );
  }

  if (error || !ogpData) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block ${className}`}
      >
        <Card className="glass hover:shadow-lg transition-shadow duration-300">
          <CardBody className="p-4">
            <div className="flex items-center gap-2">
              <ExternalLink size={16} className="text-primary" />
              <span className="text-primary hover:underline truncate">
                {url}
              </span>
            </div>
          </CardBody>
        </Card>
      </a>
    );
  }

  const formattedDate = formatDate(ogpData.publishedAt);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block group ${className}`}
      aria-label={`${ogpData.title}を読む（新しいタブで開きます）`}
    >
      <Card className="glass hover:shadow-xl transition-all duration-300 overflow-hidden">
        <CardBody className="p-0">
          <div className="flex flex-col sm:flex-row">
            {/* Content */}
            <div className="flex-1 p-5 min-w-0">
              {/* Title */}
              <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                {ogpData.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground/70 line-clamp-3 mb-4 leading-relaxed">
                {ogpData.description}
              </p>

              {/* Meta info */}
              <div className="flex items-center gap-4 text-xs text-foreground/50">
                <div className="flex items-center gap-1.5">
                  {ogpData.favicon && (
                    <Image
                      src={
                        ogpData.favicon.startsWith("http")
                          ? ogpData.favicon
                          : `https://${domain}${ogpData.favicon}`
                      }
                      alt=""
                      width={14}
                      height={14}
                      className="rounded"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  )}
                  <span>{ogpData.siteName || domain}</span>
                </div>
                {formattedDate && (
                  <div className="flex items-center gap-1">
                    <Calendar size={12} aria-hidden="true" />
                    <span>{formattedDate}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Image */}
            {ogpData.image && (
              <div className="relative w-full sm:w-48 h-36 sm:h-auto shrink-0 bg-content2">
                <Image
                  src={ogpData.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 192px"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}
          </div>
        </CardBody>
      </Card>
    </a>
  );
};
