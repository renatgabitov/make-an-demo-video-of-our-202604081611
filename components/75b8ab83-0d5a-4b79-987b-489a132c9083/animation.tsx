import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Icon} from '@iconify/react';

const cellBorder = 'rgba(232, 210, 164, 0.28)';

const GridCell: React.FC<{
	left: number;
	top: number;
	width: number;
	height: number;
	children?: React.ReactNode;
}> = ({left, top, width, height, children}) => {
	return (
		<div
			style={{
				position: 'absolute',
				left,
				top,
				width,
				height,
				borderRight: `1px solid ${cellBorder}`,
				borderBottom: `1px solid ${cellBorder}`,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				boxSizing: 'border-box',
				background:
					'repeating-linear-gradient(120deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 8px, rgba(242, 226, 193, 0.08) 8px, rgba(242, 226, 193, 0.08) 10px)',
			}}
		>
			{children}
		</div>
	);
};

const CircleBadge: React.FC<{size: number; children: React.ReactNode}> = ({
	size,
	children,
}) => (
	<div
		style={{
			width: size,
			height: size,
			borderRadius: size / 2,
			background: '#fff7e5',
			border: '2px solid rgba(35,36,40,0.12)',
			boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}}
	>
		{children}
	</div>
);

const WhiteCardIcon: React.FC<{
	bg: string;
	size?: number;
	icon: string;
	iconColor?: string;
	radius?: number;
}> = ({bg, size = 70, icon, iconColor = '#fff', radius = 12}) => (
	<div
		style={{
			width: size,
			height: size,
			borderRadius: radius,
			background: bg,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}}
	>
		<Icon icon={icon} width={size * 0.52} height={size * 0.52} color={iconColor} />
	</div>
);

const SlackLogo = () => (
	<div
		style={{
			position: 'relative',
			width: 54,
			height: 54,
		}}
	>
		<div style={{position: 'absolute', left: 18, top: 0, width: 10, height: 22, borderRadius: 8, background: '#36C5F0'}} />
		<div style={{position: 'absolute', left: 18, top: 32, width: 10, height: 22, borderRadius: 8, background: '#E01E5A'}} />
		<div style={{position: 'absolute', left: 0, top: 18, width: 22, height: 10, borderRadius: 8, background: '#ECB22E'}} />
		<div style={{position: 'absolute', left: 32, top: 18, width: 22, height: 10, borderRadius: 8, background: '#2EB67D'}} />

		<div style={{position: 'absolute', left: 28, top: 0, width: 10, height: 22, borderRadius: 8, background: '#2EB67D'}} />
		<div style={{position: 'absolute', left: 28, top: 32, width: 10, height: 22, borderRadius: 8, background: '#ECB22E'}} />
		<div style={{position: 'absolute', left: 0, top: 28, width: 22, height: 10, borderRadius: 8, background: '#E01E5A'}} />
		<div style={{position: 'absolute', left: 32, top: 28, width: 22, height: 10, borderRadius: 8, background: '#36C5F0'}} />
	</div>
);

const GoogleG = () => (
	<div style={{fontFamily: 'Arial, sans-serif', fontSize: 78, fontWeight: 700, lineHeight: 1, position: 'relative'}}>
		<span style={{color: '#4285F4'}}>G</span>
		<div style={{position: 'absolute', right: 10, top: 37, width: 28, height: 12, background: '#4285F4'}} />
	</div>
);

const MondayLogo = () => (
	<div style={{display: 'flex', alignItems: 'flex-end', gap: 6}}>
		<div style={{width: 14, height: 34, background: '#ff6f8e', borderRadius: 10, transform: 'rotate(32deg)'}} />
		<div style={{width: 14, height: 34, background: '#ffd56c', borderRadius: 10, transform: 'rotate(32deg)'}} />
		<div style={{width: 12, height: 12, background: '#8ce58f', borderRadius: 999}} />
	</div>
);

const AirtableLogo = () => (
	<div style={{position: 'relative', width: 60, height: 46}}>
		<div
			style={{
				position: 'absolute',
				left: 4,
				top: 10,
				width: 26,
				height: 18,
				background: '#f77da6',
				clipPath: 'polygon(0 50%, 100% 0, 100% 100%)',
			}}
		/>
		<div
			style={{
				position: 'absolute',
				left: 30,
				top: 4,
				width: 28,
				height: 16,
				background: '#f8d181',
				clipPath: 'polygon(0 50%, 50% 0, 100% 50%, 50% 100%)',
			}}
		/>
		<div
			style={{
				position: 'absolute',
				left: 31,
				top: 21,
				width: 24,
				height: 22,
				background: '#8ccff7',
				clipPath: 'polygon(0 10%, 100% 0, 100% 80%, 0 100%)',
			}}
		/>
	</div>
);

const ClickupLogo = () => (
	<div style={{position: 'relative', width: 54, height: 54}}>
		<div
			style={{
				position: 'absolute',
				left: 8,
				top: 8,
				width: 38,
				height: 22,
				borderTopLeftRadius: 6,
				borderTopRightRadius: 6,
				borderBottomLeftRadius: 16,
				borderBottomRightRadius: 16,
				background: 'linear-gradient(90deg, #ff7cc2 0%, #a989ff 100%)',
				clipPath: 'polygon(0 70%, 50% 0, 100% 70%, 82% 88%, 50% 44%, 18% 88%)',
			}}
		/>
		<div
			style={{
				position: 'absolute',
				left: 10,
				top: 28,
				width: 34,
				height: 14,
				borderRadius: 12,
				background: 'linear-gradient(90deg, #c7b4ff 0%, #a1d6ff 100%)',
				clipPath: 'polygon(0 30%, 14% 0, 50% 58%, 86% 0, 100% 30%, 50% 100%)',
			}}
		/>
	</div>
);

const ZohoLogo = () => (
	<div style={{display: 'flex', gap: 2, transform: 'rotate(-6deg)'}}>
		{[
			['Z', '#f28b88'],
			['O', '#e2d98b'],
			['H', '#9fd4f7'],
			['O', '#f7d59a'],
		].map(([t, c], i) => (
			<div
				key={i}
				style={{
					width: 16,
					height: 16,
					background: c,
					boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: 10,
					fontWeight: 700,
					color: '#fff',
					fontFamily: 'Arial, sans-serif',
				}}
			>
				{t}
			</div>
		))}
	</div>
);

const SalesforceLogo = () => (
	<div style={{position: 'relative', width: 56, height: 38}}>
		<div style={{position: 'absolute', left: 6, top: 12, width: 20, height: 16, background: '#9cd4f7', borderRadius: 12}} />
		<div style={{position: 'absolute', left: 18, top: 6, width: 24, height: 20, background: '#9cd4f7', borderRadius: 14}} />
		<div style={{position: 'absolute', left: 28, top: 14, width: 20, height: 16, background: '#9cd4f7', borderRadius: 12}} />
		<div style={{position: 'absolute', left: 15, top: 12, color: 'white', fontSize: 8, fontWeight: 700, fontFamily: 'Arial'}}>salesforce</div>
	</div>
);

const MiroLogo = () => (
	<div style={{position: 'relative', width: 54, height: 54}}>
		<div style={{position: 'absolute', left: 15, top: 4, width: 4, height: 46, background: '#8ad7ea'}} />
		<div style={{position: 'absolute', left: 33, top: 4, width: 4, height: 46, background: '#8ad7ea'}} />
		<div style={{position: 'absolute', left: 6, top: 16, width: 42, height: 4, background: '#8ad7ea'}} />
		<div style={{position: 'absolute', left: 6, top: 28, width: 42, height: 4, background: '#8ad7ea'}} />
		<div style={{position: 'absolute', left: 15, top: 4, width: 4, height: 24, background: '#8ad7ea', transform: 'rotate(45deg)', transformOrigin: 'top left'}} />
		<div style={{position: 'absolute', left: 37, top: 4, width: 4, height: 24, background: '#8ad7ea', transform: 'rotate(-45deg)', transformOrigin: 'top right'}} />
		<div style={{position: 'absolute', left: 17, top: 28, width: 4, height: 24, background: '#8ad7ea', transform: 'rotate(-45deg)', transformOrigin: 'top left'}} />
		<div style={{position: 'absolute', left: 35, top: 28, width: 4, height: 24, background: '#8ad7ea', transform: 'rotate(45deg)', transformOrigin: 'top right'}} />
	</div>
);

const FaceMark = () => (
	<div style={{position: 'relative', width: 90, height: 90}}>
		<div
			style={{
				position: 'absolute',
				left: 12,
				top: 18,
				width: 22,
				height: 10,
				borderTop: '8px solid #0f3852',
				borderLeft: '8px solid #0f3852',
				borderTopLeftRadius: 8,
				transform: 'rotate(-45deg)',
			}}
		/>
		<div
			style={{
				position: 'absolute',
				right: 14,
				top: 18,
				width: 22,
				height: 10,
				borderTop: '8px solid #0f3852',
				borderRight: '8px solid #0f3852',
				borderTopRightRadius: 8,
				transform: 'rotate(45deg)',
			}}
		/>
		<div
			style={{
				position: 'absolute',
				left: 43,
				top: 12,
				width: 10,
				height: 52,
				background: '#0f3852',
				borderRadius: 8,
				transform: 'rotate(18deg)',
			}}
		/>
		<div
			style={{
				position: 'absolute',
				left: 32,
				top: 52,
				width: 32,
				height: 18,
				borderBottom: '8px solid #0f3852',
				borderRadius: '0 0 24px 24px',
				transform: 'rotate(8deg)',
			}}
		/>
	</div>
);

export const ScreenshotRecreation: React.FC = () => {
	const gridLeft = 350;
	const gridTop = 123;
	const colWidths = [140, 140, 140, 352, 140, 140, 140];
	const rowHeights = [99, 141, 141, 129];

	const colStarts = colWidths.map((_, i) => gridLeft + colWidths.slice(0, i).reduce((a, b) => a + b, 0));
	const rowStarts = rowHeights.map((_, i) => gridTop + rowHeights.slice(0, i).reduce((a, b) => a + b, 0));

	return (
		<AbsoluteFill
			style={{
				background: '#fbfaf8',
				fontFamily: 'Arial, Helvetica, sans-serif',
				overflow: 'hidden',
			}}
		>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.24) 58%, rgba(255,255,255,0.92) 95%)',
				}}
			/>
			<div style={{position: 'absolute', left: gridLeft, top: gridTop, width: colWidths.reduce((a, b) => a + b, 0), height: rowHeights.reduce((a, b) => a + b, 0), borderTop: `1px solid ${cellBorder}`, borderLeft: `1px solid ${cellBorder}`}} />

			{rowStarts.map((top, r) =>
				colStarts.map((left, c) => (
					<GridCell key={`${r}-${c}`} left={left} top={top} width={colWidths[c]} height={rowHeights[r]} />
				))
			)}

			<GridCell left={colStarts[2]} top={rowStarts[0]} width={colWidths[2]} height={rowHeights[0]}>
				<Icon icon="logos:google-docs" width={44} height={59} />
			</GridCell>
			<GridCell left={colStarts[3]} top={rowStarts[0]} width={colWidths[3]} height={rowHeights[0]}>
				<div style={{display: 'flex', alignItems: 'center', gap: 250}}>
					<Icon icon="logos:google-sheets" width={44} height={59} />
					<div style={{display: 'flex', alignItems: 'center', gap: 88}}>
						<SlackLogo />
						<GoogleG />
					</div>
				</div>
			</GridCell>

			<GridCell left={colStarts[0]} top={rowStarts[1]} width={colWidths[0]} height={rowHeights[1]}>
				<Icon icon="logos:microsoft-outlook" width={55} height={55} />
			</GridCell>
			<GridCell left={colStarts[1]} top={rowStarts[1]} width={colWidths[1]} height={rowHeights[1]}>
				<Icon icon="logos:linkedin-icon" width={50} height={50} />
			</GridCell>
			<GridCell left={colStarts[2]} top={rowStarts[1]} width={colWidths[2]} height={rowHeights[1]}>
				<Icon icon="logos:telegram" width={68} height={68} />
			</GridCell>
			<GridCell left={colStarts[3]} top={rowStarts[1]} width={colWidths[3]} height={rowHeights[1]}>
				<CircleBadge size={156}>
					<FaceMark />
				</CircleBadge>
			</GridCell>
			<GridCell left={colStarts[4]} top={rowStarts[1]} width={colWidths[4]} height={rowHeights[1]}>
				<MiroLogo />
			</GridCell>
			<GridCell left={colStarts[5]} top={rowStarts[1]} width={colWidths[5]} height={rowHeights[1]}>
				<AirtableLogo />
			</GridCell>
			<GridCell left={colStarts[6]} top={rowStarts[1]} width={colWidths[6]} height={rowHeights[1]}>
				<ClickupLogo />
			</GridCell>

			<GridCell left={colStarts[0]} top={rowStarts[2]} width={colWidths[0]} height={rowHeights[2]}>
				<Icon icon="simple-icons:notion" width={50} height={50} color="#bdbdbd" />
			</GridCell>
			<GridCell left={colStarts[1]} top={rowStarts[2]} width={colWidths[1]} height={rowHeights[2]}>
				<Icon icon="mdi:github" width={54} height={54} color="#b8b8b8" />
			</GridCell>
			<GridCell left={colStarts[2]} top={rowStarts[2]} width={colWidths[2]} height={rowHeights[2]}>
				<Icon icon="logos:discord-icon" width={56} height={56} />
			</GridCell>
			<GridCell left={colStarts[4]} top={rowStarts[2]} width={colWidths[4]} height={rowHeights[2]}>
				<Icon icon="logos:youtube-icon" width={56} height={40} />
			</GridCell>
			<GridCell left={colStarts[5]} top={rowStarts[2]} width={colWidths[5]} height={rowHeights[2]}>
				<Icon icon="logos:trello" width={52} height={52} />
			</GridCell>
			<GridCell left={colStarts[6]} top={rowStarts[2]} width={colWidths[6]} height={rowHeights[2]}>
				<Icon icon="logos:microsoft-excel" width={56} height={56} />
			</GridCell>

			<GridCell left={colStarts[2]} top={rowStarts[3]} width={colWidths[2]} height={rowHeights[3]}>
				<MondayLogo />
			</GridCell>
			<GridCell left={colStarts[3]} top={rowStarts[3]} width={colWidths[3]} height={rowHeights[3]}>
				<div style={{display: 'flex', alignItems: 'center', gap: 230}}>
					<ZohoLogo />
					<SalesforceLogo />
				</div>
			</GridCell>
			<GridCell left={colStarts[4]} top={rowStarts[3]} width={colWidths[4]} height={rowHeights[3]}>
				<WhiteCardIcon bg="#ffb29d" icon="simple-icons:hubspot" size={70} iconColor="#fff" radius={12} />
			</GridCell>
		</AbsoluteFill>
	);
};