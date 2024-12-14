import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface CertificateCardProps {
  name: string;
  issuingOrganization: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  logo?: string;
}

export function CertificateCard({
  name,
  issuingOrganization,
  issueDate,
  expirationDate,
  credentialId,
  credentialUrl,
  logo,
}: CertificateCardProps) {
  return (
    <Card className="flex flex-col justify-between overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      <Link
        href={credentialUrl || "#"}
        className="block cursor-pointer"
        target="_blank"
      >
        {logo && (
          <Image
            src={logo}
            alt={`${issuingOrganization} logo`}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-center"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{name}</CardTitle>
          <time className="font-sans text-xs">{issueDate}</time>
          <p className="font-sans text-xs text-muted-foreground">
            {issuingOrganization}
          </p>
        </div>
      </CardHeader>
      <CardContent className="mt-2 flex flex-col px-2">
        <div className="mt-2 flex flex-wrap gap-1">
          <Badge className="px-1 py-0 text-[10px]" variant="secondary">
            {issuingOrganization}
          </Badge>
          {expirationDate && (
            <Badge className="px-1 py-0 text-[10px]" variant="secondary">
              Expires: {expirationDate}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {credentialUrl && (
          <Link href={credentialUrl} target="_blank" rel="noopener noreferrer">
            <Badge className="flex gap-2 px-2 py-1 text-[10px]">
              Show credential
            </Badge>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
