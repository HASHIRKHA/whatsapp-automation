import React from 'react';

type BadgeVariant =
  | 'online'
  | 'offline'
  | 'connecting'
  | 'banned'
  | 'sent'
  | 'delivered'
  | 'read'
  | 'replied'
  | 'failed'
  | 'queued'
  | 'draft'
  | 'running'
  | 'paused'
  | 'done'
  | 'hot'
  | 'warm'
  | 'cold'
  | 'negative'
  | 'cloud'
  | 'ws'
  | 'marketing'
  | 'utility'
  | 'auth'
  | 'service';

const STYLES: Record<BadgeVariant, { bg: string; color: string }> = {
  online:     { bg: 'rgba(212,175,55,0.1)',  color: '#D4AF37' },
  offline:    { bg: 'rgba(255,255,255,0.04)', color: '#555555' },
  connecting: { bg: 'rgba(245,158,11,0.1)',  color: '#f59e0b' },
  banned:     { bg: 'rgba(239,68,68,0.1)',   color: '#ef4444' },
  sent:       { bg: 'rgba(212,175,55,0.07)', color: '#C9A84C' },
  delivered:  { bg: 'rgba(212,175,55,0.1)',  color: '#D4AF37' },
  read:       { bg: 'rgba(245,208,138,0.1)', color: '#F5D08A' },
  replied:    { bg: 'rgba(212,175,55,0.14)', color: '#F5D08A' },
  failed:     { bg: 'rgba(239,68,68,0.1)',   color: '#ef4444' },
  queued:     { bg: 'rgba(255,255,255,0.04)', color: '#666' },
  draft:      { bg: 'rgba(255,255,255,0.04)', color: '#666' },
  running:    { bg: 'rgba(212,175,55,0.1)',  color: '#D4AF37' },
  paused:     { bg: 'rgba(245,158,11,0.1)',  color: '#f59e0b' },
  done:       { bg: 'rgba(212,175,55,0.07)', color: '#8B6B14' },
  hot:        { bg: 'rgba(212,175,55,0.12)', color: '#F5D08A' },
  warm:       { bg: 'rgba(245,158,11,0.1)',  color: '#f59e0b' },
  cold:       { bg: 'rgba(255,255,255,0.04)', color: '#555' },
  negative:   { bg: 'rgba(239,68,68,0.1)',   color: '#ef4444' },
  cloud:      { bg: 'rgba(212,175,55,0.07)', color: '#C9A84C' },
  ws:         { bg: 'rgba(245,208,138,0.08)', color: '#F5D08A' },
  marketing:  { bg: 'rgba(212,175,55,0.1)',  color: '#D4AF37' },
  utility:    { bg: 'rgba(212,175,55,0.07)', color: '#C9A84C' },
  auth:       { bg: 'rgba(245,158,11,0.1)',  color: '#f59e0b' },
  service:    { bg: 'rgba(255,255,255,0.04)', color: '#555' },
};

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  dot?: boolean;
  size?: 'sm' | 'md';
}

export function Badge({ variant, children, dot, size = 'md' }: BadgeProps) {
  const { bg, color } = STYLES[variant] ?? STYLES.offline;
  const px = size === 'sm' ? '6px' : '8px';
  const py = size === 'sm' ? '2px' : '3px';
  const fs = size === 'sm' ? '10px' : '11px';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        background: bg,
        color,
        borderRadius: 20,
        padding: `${py} ${px}`,
        fontSize: fs,
        fontWeight: 500,
        whiteSpace: 'nowrap',
        letterSpacing: '0.2px',
      }}
    >
      {dot && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: color,
            display: 'inline-block',
            flexShrink: 0,
            ...(variant === 'online' ? { animation: 'pulse-gold 1.5s ease-in-out infinite' } : {}),
          }}
        />
      )}
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const s = status.toLowerCase() as BadgeVariant;
  const labels: Record<string, string> = {
    online: 'ONLINE',
    offline: 'OFFLINE',
    connecting: 'CONNECTING',
    banned: 'BANNED',
    sent: 'SENT',
    delivered: 'DELIVERED',
    read: 'READ',
    replied: 'REPLIED',
    failed: 'FAILED',
    queued: 'QUEUED',
    draft: 'DRAFT',
    running: 'RUNNING',
    paused: 'PAUSED',
    done: 'DONE',
  };
  return (
    <Badge variant={s} dot={['online', 'connecting'].includes(s)}>
      {labels[s] ?? status.toUpperCase()}
    </Badge>
  );
}
