import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

const marks = [
  {x: -620, y: -250, size: 88, color: '#74A8FF', accent: '#DDEAFF', shape: 'doc', depth: 0.86, phase: 0.1, delay: 4, scale: 0.92},
  {x: -470, y: -250, size: 80, color: '#CBE8C8', accent: '#F2FFF0', shape: 'grid', depth: 0.82, phase: 0.7, delay: 6, scale: 0.9},
  {x: 220, y: -250, size: 88, color: '#F3B8C5', accent: '#FFF2D5', shape: 'spark', depth: 0.88, phase: 1.2, delay: 8, scale: 0.96},
  {x: 400, y: -250, size: 96, color: '#F3C56A', accent: '#86A8FF', shape: 'ring', depth: 0.9, phase: 1.7, delay: 10, scale: 0.98},
  {x: -720, y: -40, size: 78, color: '#B5D3F5', accent: '#E7F2FF', shape: 'kite', depth: 0.8, phase: 0.3, delay: 10, scale: 0.86},
  {x: -560, y: -20, size: 84, color: '#A7B6E7', accent: '#EEF2FF', shape: 'chat', depth: 0.84, phase: 0.8, delay: 12, scale: 0.92},
  {x: -390, y: 10, size: 92, color: '#8FD0F7', accent: '#F4FBFF', shape: 'beam', depth: 0.92, phase: 1.1, delay: 14, scale: 1},
  {x: 380, y: -20, size: 86, color: '#9FDFEA', accent: '#EFFFFF', shape: 'nodes', depth: 0.84, phase: 1.4, delay: 12, scale: 0.9},
  {x: 520, y: 0, size: 90, color: '#FFD58B', accent: '#F4B5C8', shape: 'diamond', depth: 0.88, phase: 2, delay: 14, scale: 0.94},
  {x: 660, y: -10, size: 84, color: '#E4D2FF', accent: '#FFC7D3', shape: 'orbit', depth: 0.82, phase: 2.2, delay: 16, scale: 0.88},
  {x: -720, y: 160, size: 82, color: '#C4C4C4', accent: '#F8F8F8', shape: 'sheet', depth: 0.78, phase: 0.2, delay: 18, scale: 0.86},
  {x: -540, y: 180, size: 86, color: '#BBBBBB', accent: '#FFFFFF', shape: 'node-ring', depth: 0.8, phase: 0.9, delay: 20, scale: 0.88},
  {x: -390, y: 180, size: 84, color: '#A6A8FF', accent: '#F5F6FF', shape: 'orbital', depth: 0.84, phase: 1.6, delay: 20, scale: 0.9},
  {x: 390, y: 180, size: 84, color: '#FF8E7A', accent: '#FFF3E9', shape: 'play', depth: 0.84, phase: 2.2, delay: 18, scale: 0.88},
  {x: 520, y: 190, size: 82, color: '#A8D8F8', accent: '#F2FBFF', shape: 'bars', depth: 0.8, phase: 2.5, delay: 20, scale: 0.86},
  {x: 660, y: 170, size: 78, color: '#B7D9B1', accent: '#F0FFF0', shape: 'cross', depth: 0.78, phase: 2.8, delay: 22, scale: 0.84},
  {x: -380, y: 360, size: 88, color: '#F5B365', accent: '#8EE28B', shape: 'stripes', depth: 0.72, phase: 0.4, delay: 24, scale: 0.84},
  {x: -230, y: 370, size: 72, color: '#F3C77F', accent: '#B6D1FF', shape: 'confetti', depth: 0.68, phase: 1.3, delay: 24, scale: 0.76},
  {x: 210, y: 360, size: 82, color: '#A4D0FF', accent: '#F3FBFF', shape: 'cloud', depth: 0.7, phase: 1.9, delay: 24, scale: 0.8},
  {x: 390, y: 370, size: 94, color: '#FFAA90', accent: '#FFF5EE', shape: 'hub', depth: 0.74, phase: 2.4, delay: 26, scale: 0.88}
];

const renderShape = (shape, color, accent) => {
  switch (shape) {
    case 'doc':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <path d='M26 16h32l16 16v52H26z' fill={color} opacity={0.98} />
          <path d='M58 16v16h16' fill='none' stroke={accent} strokeWidth={6} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M38 54h24M38 66h20' fill='none' stroke={accent} strokeWidth={6} strokeLinecap='round' />
        </svg>
      );
    case 'grid':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <rect x='20' y='20' width='60' height='60' rx='10' fill={color} opacity={0.96} />
          <path d='M50 26v48M26 50h48' stroke={accent} strokeWidth={6} strokeLinecap='round' />
        </svg>
      );
    case 'spark':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <g strokeWidth={8} strokeLinecap='round'>
            <path d='M50 14v22' stroke={accent} />
            <path d='M50 64v22' stroke={accent} />
            <path d='M14 50h22' stroke={color} />
            <path d='M64 50h22' stroke={color} />
            <path d='M26 26l15 15' stroke={accent} />
            <path d='M59 59l15 15' stroke={accent} />
            <path d='M74 26L59 41' stroke={color} />
            <path d='M41 59L26 74' stroke={color} />
          </g>
        </svg>
      );
    case 'ring':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <circle cx='50' cy='50' r='28' fill='none' stroke={color} strokeWidth={12} />
          <path d='M50 22a28 28 0 0 1 25 16' fill='none' stroke={accent} strokeWidth={12} strokeLinecap='round' />
        </svg>
      );
    case 'kite':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <path d='M24 50l20-20h20l12 12v20H44z' fill={color} opacity={0.95} />
          <path d='M24 50h32V30' fill='none' stroke={accent} strokeWidth={6} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      );
    case 'chat':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <path d='M22 24h56v38H48l-12 12v-12H22z' fill={color} opacity={0.94} />
          <path d='M36 40h28M36 52h18' fill='none' stroke={accent} strokeWidth={6} strokeLinecap='round' />
        </svg>
      );
    case 'beam':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <circle cx='50' cy='50' r='34' fill={color} opacity={0.96} />
          <path d='M34 50l16-10 16 10-16 10z' fill={accent} />
        </svg>
      );
    case 'nodes':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <path d='M50 20v60M20 50h60M30 30l40 40M70 30L30 70' fill='none' stroke={color} strokeWidth={5} strokeLinecap='round' opacity={0.95} />
          <circle cx='50' cy='20' r='6' fill={accent} />
          <circle cx='50' cy='80' r='6' fill={accent} />
          <circle cx='20' cy='50' r='6' fill={accent} />
          <circle cx='80' cy='50' r='6' fill={accent} />
        </svg>
      );
    case 'diamond':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <path d='M50 18l24 12v28L50 70 26 58V30z' fill={color} opacity={0.96} />
          <path d='M50 18l24 12-24 12-24-12z' fill={accent} opacity={0.85} />
        </svg>
      );
    case 'orbit':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <circle cx='50' cy='50' r='22' fill='none' stroke={color} strokeWidth={8} opacity={0.45} />
          <circle cx='50' cy='22' r='8' fill={accent} />
          <circle cx='78' cy='50' r='8' fill={color} />
          <circle cx='50' cy='78' r='8' fill={accent} />
          <circle cx='22' cy='50' r='8' fill={color} />
        </svg>
      );
    case 'sheet':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <rect x='24' y='18' width='52' height='64' rx='8' fill='none' stroke={color} strokeWidth={5} />
          <path d='M36 36h28M36 50h28M36 64h20' fill='none' stroke={color} strokeWidth={6} strokeLinecap='round' />
        </svg>
      );
    case 'node-ring':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <circle cx='50' cy='50' r='22' fill={color} opacity={0.18} />
          <circle cx='50' cy='50' r='24' fill='none' stroke={color} strokeWidth={6} opacity={0.9} />
          <circle cx='50' cy='22' r='7' fill={accent} />
          <circle cx='74' cy='50' r='7' fill={accent} />
          <circle cx='50' cy='78' r='7' fill={accent} />
          <circle cx='26' cy='50' r='7' fill={accent} />
        </svg>
      );
    case 'orbital':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <circle cx='50' cy='50' r='24' fill={color} opacity={0.95} />
          <circle cx='42' cy='46' r='4.5' fill={accent} />
          <circle cx='58' cy='46' r='4.5' fill={accent} />
          <path d='M38 60c5 7 19 7 24 0' fill='none' stroke={accent} strokeWidth={5} strokeLinecap='round' />
        </svg>
      );
    case 'play':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <rect x='18' y='24' width='64' height='46' rx='12' fill={color} opacity={0.97} />
          <path d='M44 37l18 10-18 10z' fill={accent} />
        </svg>
      );
    case 'bars':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <rect x='24' y='20' width='52' height='60' rx='10' fill={color} opacity={0.95} />
          <rect x='36' y='30' width='10' height='26' rx='3' fill={accent} />
          <rect x='54' y='30' width='10' height='26' rx='3' fill={accent} />
        </svg>
      );
    case 'cross':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <path d='M50 22v56M22 50h56' stroke={color} strokeWidth={12} strokeLinecap='round' />
          <circle cx='50' cy='50' r='8' fill={accent} />
        </svg>
      );
    case 'stripes':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <path d='M20 60l16-24' stroke='#F58CA2' strokeWidth={12} strokeLinecap='round' />
          <path d='M42 60l16-24' stroke={color} strokeWidth={12} strokeLinecap='round' />
          <circle cx='72' cy='60' r='8' fill={accent} />
        </svg>
      );
    case 'confetti':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <path d='M28 54l14-16' stroke={color} strokeWidth={8} strokeLinecap='round' />
          <path d='M46 58l12-12' stroke='#A6D6FF' strokeWidth={8} strokeLinecap='round' />
          <path d='M36 36l10 10' stroke='#CBE8C8' strokeWidth={8} strokeLinecap='round' />
          <path d='M58 38l14 6' stroke='#F5B365' strokeWidth={8} strokeLinecap='round' />
        </svg>
      );
    case 'cloud':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <path d='M32 64h34c10 0 18-7 18-16s-8-16-18-16c-2-10-11-17-22-17-13 0-24 10-24 23-9 2-16 10-16 19 0 4 1 5 2 7z' fill={color} opacity={0.94} />
        </svg>
      );
    case 'hub':
      return (
        <svg viewBox='0 0 100 100' style={{width: '100%', height: '100%'}}>
          <rect x='18' y='18' width='64' height='64' rx='14' fill={color} opacity={0.95} />
          <circle cx='50' cy='50' r='8' fill={accent} />
          <path d='M50 26v16M50 58v16M26 50h16M58 50h16M34 34l10 10M66 34L56 44M34 66l10-10M66 66L56 56' fill='none' stroke={accent} strokeWidth={5} strokeLinecap='round' />
        </svg>
      );
    default:
      return null;
  }
};

const IntegrationMark = ({frame, fps, data}) => {
  const reveal = spring({
    fps,
    frame: frame - data.delay,
    config: {damping: 18, stiffness: 120, mass: 0.8}
  });

  const driftX = Math.sin((frame + data.phase * 14) / 18) * 12 * data.depth;
  const driftY = Math.cos((frame + data.phase * 11) / 24) * 10 * data.depth;
  const rotate = Math.sin((frame + data.phase * 9) / 28) * 7;
  const blurIn = interpolate(reveal, [0, 1], [10, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const alpha = interpolate(reveal, [0, 1], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: data.size,
        height: data.size,
        opacity: alpha,
        zIndex: Math.round(2 + data.depth * 2),
        transform: `translate(-50%, -50%) translate(${data.x + driftX}px, ${data.y + driftY}px) scale(${data.scale * (0.76 + 0.24 * reveal)}) rotate(${rotate}deg)`,
        filter: `blur(${blurIn}px)`
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '14%',
          borderRadius: 999,
          background: `radial-gradient(circle, ${data.color}44 0%, ${data.color}12 55%, transparent 72%)`,
          transform: 'scale(1.4)'
        }}
      />
      {renderShape(data.shape, data.color, data.accent)}
    </div>
  );
};

const AIEmblem = ({frame, fps}) => {
  const intro = spring({fps, frame: frame - 6, config: {damping: 16, stiffness: 130, mass: 0.9}});
  const pulse = interpolate(frame, [28, 52, 78], [1, 1.035, 1.01], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const rotate = Math.sin(frame / 32) * 2.8;
  const blurIn = interpolate(intro, [0, 1], [18, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: 238,
        height: 238,
        zIndex: 5,
        transform: `translate(-50%, -50%) scale(${intro * pulse}) rotate(${rotate}deg)`,
        filter: `blur(${blurIn}px)`
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: -70,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,220,145,0.34) 0%, rgba(255,220,145,0.14) 42%, rgba(255,220,145,0.04) 62%, transparent 74%)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'linear-gradient(180deg, #FFF4D7 0%, #F9E8C5 100%)',
          boxShadow: '0 18px 50px rgba(153,113,42,0.18), inset 0 3px 0 rgba(255,255,255,0.65), inset 0 -10px 24px rgba(219,176,98,0.12)',
          border: '2px solid rgba(189,153,95,0.22)'
        }}
      />
      <svg viewBox='0 0 240 240' style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}}>
        <path d='M86 108l18-18 9 10' fill='none' stroke='#16334A' strokeWidth={10} strokeLinecap='round' strokeLinejoin='round' />
        <path d='M154 108l-18-18-9 10' fill='none' stroke='#16334A' strokeWidth={10} strokeLinecap='round' strokeLinejoin='round' />
        <path d='M122 66l-20 76c-4 14 4 22 18 22h12' fill='none' stroke='#16334A' strokeWidth={12} strokeLinecap='round' strokeLinejoin='round' />
        <path d='M95 172c11 15 39 17 53 1' fill='none' stroke='#16334A' strokeWidth={10} strokeLinecap='round' />
      </svg>
    </div>
  );
};

export default function Scene() {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const sceneIn = interpolate(frame, [0, 6], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const sceneBlur = interpolate(frame, [0, 8], [16, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const sceneZoom = interpolate(frame, [0, 78], [1.03, 1.1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const handoffOpacity = interpolate(frame, [72, 78], [1, 0.94], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const handoffBlur = interpolate(frame, [72, 78], [0, 3], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  const introLine = spring({fps, frame: frame - 2, config: {damping: 18, stiffness: 110, mass: 0.9}});
  const aiLine = spring({fps, frame: frame - 8, config: {damping: 15, stiffness: 120, mass: 0.84}});
  const workflowLine = spring({fps, frame: frame - 12, config: {damping: 15, stiffness: 120, mass: 0.84}});
  const builderLine = spring({fps, frame: frame - 16, config: {damping: 15, stiffness: 120, mass: 0.84}});

  const horizontalYs = [220, 380, 540, 700, 860];
  const verticalXs = [360, 620, 880, 1040, 1300, 1560];
  const gridDrift = Math.sin(frame / 42) * 8;

  return (
    <AbsoluteFill
      style={{
        background: '#F4EFE7',
        overflow: 'hidden',
        color: '#10263B',
        fontFamily: 'Inter, Helvetica, Arial, sans-serif'
      }}
    >
      <AbsoluteFill
        style={{
          opacity: sceneIn * handoffOpacity,
          transform: `scale(${sceneZoom})`,
          filter: `blur(${sceneBlur + handoffBlur}px)`
        }}
      >
        <AbsoluteFill
          style={{
            background: 'radial-gradient(circle at 50% 42%, rgba(255,247,225,1) 0%, rgba(250,240,221,0.98) 24%, rgba(245,238,228,0.96) 52%, rgba(242,238,232,1) 100%)'
          }}
        />

        <AbsoluteFill
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(248,210,130,0.22) 0%, rgba(248,210,130,0.12) 18%, rgba(248,210,130,0.04) 34%, transparent 58%)'
          }}
        />

        <AbsoluteFill
          style={{
            background: 'radial-gradient(circle at 18% 40%, rgba(255,221,165,0.14) 0%, transparent 24%), radial-gradient(circle at 82% 40%, rgba(255,221,165,0.14) 0%, transparent 24%), radial-gradient(circle at 50% 82%, rgba(255,209,138,0.08) 0%, transparent 26%)'
          }}
        />

        <AbsoluteFill
          style={{
            opacity: 0.22,
            backgroundImage: 'repeating-linear-gradient(120deg, rgba(212,176,111,0.18) 0px, rgba(212,176,111,0.18) 2px, transparent 2px, transparent 14px)',
            transform: 'translateY(-20px)'
          }}
        />

        <svg viewBox='0 0 1920 1080' preserveAspectRatio='none' style={{position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.6}}>
          {horizontalYs.map((y, i) => (
            <line
              key={`h-${i}`}
              x1='120'
              y1={y + gridDrift}
              x2='1800'
              y2={y + 28 + gridDrift}
              stroke='rgba(205,173,114,0.22)'
              strokeWidth='2.2'
            />
          ))}
          {verticalXs.map((x, i) => (
            <line
              key={`v-${i}`}
              x1={x}
              y1='120'
              x2={960 + (x - 960) * 1.22}
              y2='940'
              stroke='rgba(205,173,114,0.18)'
              strokeWidth='2.2'
            />
          ))}
        </svg>

        <AbsoluteFill>
          {marks.map((mark, i) => (
            <IntegrationMark key={`mark-${i}`} frame={frame} fps={fps} data={mark} />
          ))}
        </AbsoluteFill>

        <AIEmblem frame={frame} fps={fps} />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 8,
            padding: '0 120px'
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: -2.8,
              lineHeight: 0.95,
              marginBottom: 14,
              opacity: introLine,
              transform: `translateY(${interpolate(introLine, [0, 1], [26, 0])}px)`,
              filter: `blur(${interpolate(introLine, [0, 1], [10, 0])}px)`,
              textShadow: '0 10px 30px rgba(255,246,226,0.75)'
            }}
          >
            Introducing The
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 26,
              flexWrap: 'wrap',
              maxWidth: 1700,
              fontSize: 148,
              fontWeight: 900,
              letterSpacing: -7.5,
              lineHeight: 0.92,
              textShadow: '0 16px 40px rgba(255,244,218,0.85)'
            }}
          >
            <span
              style={{
                opacity: aiLine,
                transform: `translateY(${interpolate(aiLine, [0, 1], [34, 0])}px) scale(${interpolate(aiLine, [0, 1], [0.92, 1] )})`,
                filter: `blur(${interpolate(aiLine, [0, 1], [12, 0])}px)`
              }}
            >
              AI
            </span>
            <span
              style={{
                opacity: workflowLine,
                transform: `translateY(${interpolate(workflowLine, [0, 1], [34, 0])}px) scale(${interpolate(workflowLine, [0, 1], [0.92, 1])})`,
                filter: `blur(${interpolate(workflowLine, [0, 1], [12, 0])}px)`
              }}
            >
              Workflow
            </span>
            <span
              style={{
                opacity: builderLine,
                transform: `translateY(${interpolate(builderLine, [0, 1], [34, 0])}px) scale(${interpolate(builderLine, [0, 1], [0.9, 1.03])})`,
                filter: `blur(${interpolate(builderLine, [0, 1], [12, 0])}px)`
              }}
            >
              Builder
            </span>
          </div>
        </div>

        <AbsoluteFill
          style={{
            background: 'radial-gradient(circle at center, transparent 52%, rgba(89,63,22,0.05) 100%)'
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
}