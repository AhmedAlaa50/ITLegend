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
    <nav className="mx-auto px-4 sm:px-6 lg:px-8 pb-4 flex items-center h-20">
      {/* Breadcrumb Navigation */}
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={breadcrumb.href} className="flex items-center">
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={breadcrumb.href}
                  className={cn(
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
    </nav>
  );
}
