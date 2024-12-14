import { CertificateCard } from "./Certificate-Card";

interface Certificate {
  name: string;
  issuingOrganization: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  logo?: string;
}

interface CertificatesProps {
  certificates: Certificate[];
}

export function Certificates({ certificates }: CertificatesProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
      {certificates.map((cert, index) => (
        <CertificateCard key={index} {...cert} />
      ))}
    </div>
  );
}
