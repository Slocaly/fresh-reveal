import '@sass/content/atoms/atoms.scss';

import React from 'react';

export default function RoundedPicture({ url, name, size = '200' }) {
	return (
		<img
			className="rounded-picture"
			width={size}
			height={size}
			src={url}
			alt={name}
		/>
	);
}
