import { useState } from 'react'

const techMeta = {
  'SAP HANA': { accent: '#0FA6D8', mark: 'H', slug: 'sap' },
  SQL: { accent: '#14B8A6', mark: 'SQL', slug: 'postgresql' },
  'Microsoft Fabric': { accent: '#8B5CF6', mark: 'MF', slug: 'microsoft' },
  'Data Warehousing': { accent: '#F59E0B', mark: 'DW' },
  Python: { accent: '#3776AB', mark: 'Py', slug: 'python' },
  'Machine Learning': { accent: '#A855F7', mark: 'ML' },
  'scikit-learn': { accent: '#F7931E', mark: 'SK', slug: 'scikitlearn' },
  PyTorch: { accent: '#EE4C2C', mark: 'PT', slug: 'pytorch' },
  LangChain: { accent: '#1C3C3C', mark: 'LC', slug: 'langchain' },
  LangGraph: { accent: '#34D399', mark: 'LG' },
  'AI Automation': { accent: '#22C55E', mark: 'AI' },
  'ETL / ELT': { accent: '#8B5CF6', mark: 'ETL' },
  DLT: { accent: '#60A5FA', mark: 'DLT' },
  dbt: { accent: '#FF694A', mark: 'dbt', slug: 'dbt' },
  Snowflake: { accent: '#29B5E8', mark: 'SF', slug: 'snowflake' },
  PostgreSQL: { accent: '#4169E1', mark: 'PG', slug: 'postgresql' },
  MySQL: { accent: '#4479A1', mark: 'MY', slug: 'mysql' },
  'Oracle SQL': { accent: '#F80000', mark: 'OR', slug: 'oracle' },
  MongoDB: { accent: '#47A248', mark: 'MG', slug: 'mongodb' },
  'Power BI': { accent: '#F2C811', mark: 'BI', slug: 'microsoftpowerbi' },
  'Data Analysis': { accent: '#10B981', mark: 'DA' },
  'Data Visualization': { accent: '#06B6D4', mark: 'DV' },
  'Business Intelligence': { accent: '#F59E0B', mark: 'BI' },
  'Dashboard Design': { accent: '#EC4899', mark: 'UI' },
  ReactJS: { accent: '#61DAFB', mark: 'R', slug: 'react' },
  'Material UI': { accent: '#007FFF', mark: 'M', slug: 'mui' },
  'Node.js': { accent: '#5FA04E', mark: 'N', slug: 'nodedotjs' },
  ExpressJS: { accent: '#9CA3AF', mark: 'Ex', slug: 'express' },
  NestJS: { accent: '#E0234E', mark: 'Ne', slug: 'nestjs' },
  Java: { accent: '#F59E0B', mark: 'J', slug: 'openjdk' },
  'Spring Boot': { accent: '#6DB33F', mark: 'SB', slug: 'springboot' },
  JUnit: { accent: '#25A162', mark: 'JU', slug: 'junit5' },
  JWT: { accent: '#000000', mark: 'JWT', slug: 'jsonwebtokens' },
  Docker: { accent: '#2496ED', mark: 'DK', slug: 'docker' },
  Jenkins: { accent: '#D24939', mark: 'JK', slug: 'jenkins' },
  Kubernetes: { accent: '#326CE5', mark: 'K8s', slug: 'kubernetes' },
  'Oracle Cloud Infrastructure': { accent: '#F80000', mark: 'OCI', slug: 'oracle' },
  AWS: { accent: '#FF9900', mark: 'AWS', slug: 'amazonaws' },
  'AWS S3': { accent: '#569A31', mark: 'S3', slug: 'amazons3' },
  'AWS RDS': { accent: '#527FFF', mark: 'RDS', slug: 'amazonrds' },
  DigitalOcean: { accent: '#0080FF', mark: 'DO', slug: 'digitalocean' },
  'HashiCorp Vault': { accent: '#FFEC6E', mark: 'HV', slug: 'vault' },
  Calypso: { accent: '#A78BFA', mark: 'C' },
  Rancher: { accent: '#0075A8', mark: 'R', slug: 'rancher' },
  'CI/CD': { accent: '#EC4899', mark: 'CI' },
  OpenAI: { accent: '#10A37F', mark: 'AI', slug: 'openai' },
  SendGrid: { accent: '#06B6D4', mark: 'SG', slug: 'sendgrid' },
  Twilio: { accent: '#F22F46', mark: 'Tw', slug: 'twilio' },
}

export default function TechBadge({ label, accent: accentOverride }) {
  const [logoFailed, setLogoFailed] = useState(false)
  const meta = techMeta[label] || { accent: accentOverride || '#6B7280', mark: label.slice(0, 2).toUpperCase() }
  const accent = accentOverride || meta.accent
  const iconUrl = meta.slug
    ? `https://cdn.simpleicons.org/${meta.slug}/${accent.replace('#', '')}?viewbox=auto&size=20`
    : null
  const showLogo = iconUrl && !logoFailed

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.65rem',
        padding: '0.42rem 0.9rem 0.42rem 0.45rem',
        borderRadius: '999px',
        background: `${accent}10`,
        border: `1px solid ${accent}30`,
        color: '#dbe3ec',
        fontSize: '0.79rem',
        lineHeight: 1,
      }}
    >
      <span
        style={{
          minWidth: '1.65rem',
          height: '1.65rem',
          borderRadius: '999px',
          display: 'grid',
          placeItems: 'center',
          background: `${accent}22`,
          color: accent,
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {showLogo ? (
          <img
            src={iconUrl}
            alt=""
            aria-hidden="true"
            onError={() => setLogoFailed(true)}
            style={{ width: '1rem', height: '1rem', objectFit: 'contain', opacity: 0.95 }}
          />
        ) : (
          <span
            className="font-display"
            style={{
              fontSize: meta.mark.length > 2 ? '0.56rem' : '0.68rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            {meta.mark}
          </span>
        )}
      </span>
      <span>{label}</span>
    </span>
  )
}
