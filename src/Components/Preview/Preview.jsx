import React from "react";
import "./Preview.css";

const Preview = (props) => {
  return (
	<section id="preview">
					<div className="heading">
									<h3 className="title">Get a Preview Copy</h3>
			<p className="separator" />
		</div>
    <div class="preview">
				<ul class="align">
					<li>
						<figure class='book'>
							<ul class='hardcover_front'>
								<li>
									<div class="coverDesign blue">
									</div>
								</li>
								<li></li>
							</ul>
							<ul class='page'>
								<li></li>
								<li>
									<a class="btn" href="#">Download</a>
								</li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
							<ul class='hardcover_back'>
								<li></li>
								<li></li>
							</ul>
							<ul class='book_spine'>
								<li></li>
								<li></li>
							</ul>
							<figcaption>		

								<h1>Stop Struggling with Your Teen</h1>
								<span>By Evonne Weinhaus</span>
								<a href="#" className="p">Get it now on Amazon</a>
							</figcaption>
						</figure>
					</li>
				</ul>
			</div>
</section>
  );
};

export default Preview;
