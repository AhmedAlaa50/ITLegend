"use client";

import { cn, getBreadcrumbs } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";

export default function Navbar() {
  // const path = usePathname();
  const path = "/home/courses/course-details";
  const breadcrumbs = getBreadcrumbs(path);

  return (
    <nav>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center">
            <Breadcrumb>
              <BreadcrumbList className="text-xs text-[var(--color-dark-text)]">
                {breadcrumbs.map((breadcrumb, index) => (
                  <div key={breadcrumb.href} className="flex items-center">
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href={breadcrumb.href}
                        className={cn(
                          "text-[var(--color-dark-text)] hover:text-[var(--color-muted-foreground)]",
                          index === breadcrumbs.length - 1 && "font-bold"
                        )}
                      >
                        {breadcrumb.label}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </div>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </nav>
  );
}
