import React from 'react'
import Fade from 'react-reveal/Fade';
import Section from 'elements/Section';
import Clients1 from 'assets/images/clients-01.svg'
import Clients2 from 'assets/images/clients-02.svg'
import Clients3 from 'assets/images/clients-03.svg'
import Clients4 from 'assets/images/clients-04.svg'
import Clients5 from 'assets/images/clients-05.svg'
export default function Clients() {
    return (
        <Section className="clients">
           <Fade bottom delay={2000}>
           
            					<div className="container">
						<div className="clients-inner section-inner has-top-divider has-bottom-divider">
                            
							<ul className="list-reset">
								<li>
									<img
										src={Clients1}
										alt="Clients 01"
									/>
								</li>
								<li>
									<img
										src={Clients2}
										alt="Clients 02"
									/>
								</li>
								<li>
									<img
										src={Clients3}
										alt="Clients 03"
									/>
								</li>
								<li>
									<img
										src={Clients4}
										alt="Clients 04"
									/>
								</li>
								<li>
									<img
										src={Clients5}
										alt="Clients 05"
									/>
								</li>
							</ul>
						</div>
					</div>
            </Fade>
        </Section>
    )
}
