import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import classnames from 'classnames'

import Icon from './Icon';
import FaqContent from './helpers/content';

export const Faq = ({ children, ...props }) => {
	const Title = React.Children.map(children, child => child.type.displayName === 'Title' ? child : null);
	const Body = React.Children.map(children, child => child.type.displayName === 'Body' ? child : null);

	return (
		<li className={classnames("faq clearfix border-gray-300 border-b", { open: props.open })}>
			<div className="__title flex items-center py-4">
				<h6 className="flex-1">{Title}</h6>
				<button className="inline-flex"><Icon glyph={props.open ? 'angleUp' : 'angleDown'} className="text-4xl text-gray-400" /></button>
			</div>
			<div className={classnames("__body", { '--collapsed': !props.open })}>
				<p className="text-gray-400 text-sm m-0">{Body}</p>
			</div>
		</li>
	)
}

const Title = ({ children }) => children;
Title.displayName = 'Title';
Faq.Title = Title;

const Body = ({ children }) => children;
Body.displayName = 'Body';
Faq.Body = Body;



function Faqs() {
	const [open, setOpen] = useState(-1);

	return (
		<ul className="faqs">
			{
				FaqContent().map((item, i) => {
					let isOpen = false;
					if (open === i) isOpen = true;

					return (
						<li className={classnames("faq clearfix border-gray-300 border-b")} key={i}>
							<div className="__title flex items-center py-4 cursor-pointer" onClick={() => setOpen(isOpen ? -1 : i)} aria-controls={"faq-" + i} aria-expanded={open} >
								<h6 className="flex-1">{item.q}</h6>
								<button className="inline-flex transition-all" style={{ transform: isOpen ? 'rotate(180deg)' : null }}><Icon glyph={'angleDown'} className="text-4xl text-gray-400 transition-all" /></button>
							</div>
							<Collapse in={isOpen}>
								<div id={"faq-" + i}>
									<div className={classnames("__body", 'pb-4', 'pr-8')}>
										<p className="text-gray-400 text-sm m-0">{item.a}</p>
									</div>
								</div>
							</Collapse>
						</li>
					)
				})
			}

		</ul>
	)
}

export default Faqs;