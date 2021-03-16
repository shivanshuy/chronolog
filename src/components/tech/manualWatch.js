import React from "react";
export default function () {
	return (
		<div className="home-tech-grid">
			<div className="home-tech-grid-row-1">
				<div className="home-tech-grid-row-column-1">
					<div className="home-tech-grid-topic-desc">
						Brief description of how Manual Winding Watch works
      </div>
				</div>
				<div><div /></div>
				<div className="home-tech-grid-row-column-3">
					<div className="home-tech-grid-topic-title">
						Manual Winding Watch
      </div>
				</div>
			</div>
			<div className="home-tech-grid-row-n">
				<img className="img-watch-responsive" src="/images/manual-watch.jpg" />
				<div className="home-tech-grid-content-text">
					<div>1. Turning the crown winds the mainspring, causing it to store energy.</div>
					<div>2. The gear train transfers the energy to the escapement.</div>
					<div>3. The escapement meters out the energy into regulated parts.</div>
					<div>4. The balance wheel uses this regulated energy to beat back and forth at a constant rate.</div>
					<div>5. Every certain number of beats, the dial train transfers the energy to the hands of the watch.</div>
					<div>6. The hands advance.</div>
				</div>
			</div>
		</div>

	)
}