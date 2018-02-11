<!DOCTYPE html>
<html lang="ru">
<head>
	<title>Project X</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="Keywords" content="">
	<meta name="Description" content="">
	<meta name="author" content="">
	<link rel="icon" href="" type="image/x-icon">
	<link rel="stylesheet" href="css/style.min.css">
	<link rel="stylesheet" href="css/test.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
	<script src="js/libs/jquery.mousewheel.min.js"></script>
	<script src="js/libs/jquery.sparkline.min.js"></script>
	<script src="js/jquery.formstyler.min.js"></script>
	<script src="js/jquery.scrollbar.min.js"></script>
	<script src="js/morris.min.js"></script>
 	<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
<body>
<div class="wrapper">
	<header>
		<nav>
	<a href="#" class="header-nav-mobile fa"></a>
	<a href="/" class="header-logo"><h1><i class="fa fa-angle-right"></i><span>site</span></h1></a>
	<ul class="header-nav">
		<li><a href="#" class="active">dashboard</a></li>
		<li><a href="#">mailbox</a></li>
		<li class="header-dropdown">
			<a href="#">Pages<i class="fa fa-caret-down"></i></a>
			<ul>
				<li><a href="#"></a></li>
				<li><a href="#"></a></li>
				<li><a href="#"></a></li>
				<li><a href="#"></a></li>
			</ul>
		</li>
	</ul>
	<a href="#" class="header-logOut fa fa-power-off"></a>
</nav>
	</header>
	<div class="container">
		<aside id="tabs">
	<ul class="aside_tabs-list">
		<li class="aside_tabs-item"><a href="#fragment-1" class="fa fa-home"></a></li>
		<li class="aside_tabs-item"><a href="#fragment-2" class="fa fa-envelope-o"></a></li>
		<li class="aside_tabs-item new"><a href="#fragment-3" class="fa fa-comments-o"></a></li>
		<li class="ui-tabs-active ui-state-active aside_tabs-item"><a href="#fragment-4" class="fa fa-rss"></a></li>
		<li class="aside_tabs-item"><a href="#fragment-5" class="fa fa-cog"></a></li>
	</ul>
	<div id="fragment-1">
		<div class="js-scrl-wrap">
			<div class="aside-wrap">
				<div class="aside-inner">
					<p class="aside-title">pages</p>
					<ul class="aside-nav">
						<li>
							<a href="/" class="active">
								<div class="aside-nav-left">
									<i class="fa fa-star"></i>
									<span>dashboard</span>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="aside-nav-left">
									<i class="fa fa-cube"></i>
									<span>products</span>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="aside-nav-left">
									<i class="fa fa-envelope"></i>
									<span>mailbox</span>
								</div>
								<div class="aside-nav-right"><i class="fa fa-angle-right"></i></div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="aside-nav-left">
									<i class="fa fa-truck"></i>
									<span>orders</span>
								</div>	
								<div class="aside-nav-right"><i>2</i></div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="aside-nav-left">
									<i class="fa fa-user"></i>
									<span>user</span>
								</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="aside-nav-left">
									<i class="fa fa-folder-o"></i>
									<span>others</span>
								</div>	
								<div class="aside-nav-right"><i class="fa fa-angle-right"></i></div>
							</a>
						</li>
					</ul>
					<p class="aside-title">template</p>
					<ul class="aside-nav">
						<li>
							<a href="#">
								<div class="aside-nav-left">
									<i class="fa fa-th-large"></i>
									<span>UI Elements</span>
								</div>
								<div class="aside-nav-right"><i class="fa fa-angle-right"></i></div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="aside-nav-left">
									<i class="fa fa-clone"></i>
									<span>forms</span>
								</div>
								<div class="aside-nav-right"><i class="fa fa-angle-right"></i></div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="aside-nav-left">
									<i class="fa fa-table"></i>
									<span>tables</span>
								</div>
								<div class="aside-nav-right"><i class="fa fa-angle-right"></i></div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="aside-nav-left">
									<i class="fa fa-pie-chart"></i>
									<span>charts</span>
								</div>
							</a>
						</li>
					</ul>
				</div><!-- /aside-inner  -->
			</div><!-- /aside-wrap  -->
		</div><!-- /js-scrl-wrap -->
	</div>
	<div id="fragment-2">
		<div class="js-scrl-wrap">
			<div class="aside-wrap">
				<div class="aside-inner">
					<div class="aside-btn"><a href="#">Compose Mail</a></div>
					<p class="aside-title">mail</p>
					<ul class="aside-nav">
						<li>
							<a href="#">
								<div class="aside-nav-left">
									<i class="fa fa-inbox"></i>
									<span>inbox</span>
								</div>
								<div class="aside-nav-right"><i>2 / 100</i></div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="aside-nav-left">
									<i class="fa fa-upload"></i>
									<span>sent</span>
								</div>
							</a>
						</li>
					</ul>
					<p class="aside-title">tags</p>
					<ul class="aside-nav">
						<li><a href="#"><i class="fa fa-tag tag_clients"></i><span>clients</span></a></li>
						<li><a href="#"><i class="fa fa-tag tag_social"></i><span>social</span></a></li>
						<li><a href="#"><i class="fa fa-tag tag_support"></i><span>support</span></a></li>
					</ul>
				</div><!-- /aside-inner  -->
			</div><!-- /aside-wrap  -->
		</div><!-- /js-scrl-wrap -->
	</div>
	<div id="fragment-3">
		<div class="js-scrl-wrap">
			<div class="aside-wrap">
				<div class="aside-inner">
					<p class="aside-title">new messages</p>
					<div class="aside_msg-wrap">
						<div class="aside_msg-list">
							<div class="aside_msg-item new">
								<div class="aside_msg-title">
									<i class="fa fa-tag tag_support"></i>
									<span>support</span>
								</div>
								<p class="aside_msg-text">
									Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis.
								</p>
								<a href="#" class="aside_msg-link"></a>
							</div><!-- /aside_msg-item -->
							<div class="aside_msg-item new">
								<div class="aside_msg-title">
									<i class="fa fa-tag tag_clients"></i>
									<span>stephen Olson</span>
								</div>
								<p class="aside_msg-text">
									Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis.
								</p>
								<a href="#" class="aside_msg-link"></a>
							</div><!-- /aside_msg-item -->
						</div><!-- /aside_msg-list -->
					</div><!-- /aside_msg-wrap -->
					<p class="aside-title">recent list</p>
					<div class="aside_msg-wrap">
						<div class="aside_msg-list">
							<div class="aside_msg-item">
								<div class="aside_msg-title">
									<i class="fa fa-tag tag_social"></i>
									<span>jesse Shaw</span>
								</div>
								<p class="aside_msg-text">
									Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis.
								</p>
								<a href="#" class="aside_msg-link"></a>
							</div>
							<div class="aside_msg-item">
								<div class="aside_msg-title">
									<i class="fa fa-tag"></i>
									<span>stephen Olson</span>
								</div>
								<p class="aside_msg-text">
									Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis.
								</p>
								<a href="#" class="aside_msg-link"></a>
							</div>
							<div class="aside_msg-item">
								<div class="aside_msg-title">
									<i class="fa fa-tag"></i>
									<span>stephen Olson</span>
								</div>
								<p class="aside_msg-text">
									Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis.
								</p>
								<a href="#" class="aside_msg-link"></a>
							</div>	
							<div class="aside_msg-item">
								<div class="aside_msg-title">
									<i class="fa fa-tag tag_social"></i>
									<span>jesse Shaw</span>
								</div>
								<p class="aside_msg-text">
									Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis.
								</p>
								<a href="#" class="aside_msg-link"></a>
							</div>	
							<div class="aside_msg-item">
								<div class="aside_msg-title">
									<i class="fa fa-tag tag_clients"></i>
									<span>jesse Shaw</span>
								</div>
								<p class="aside_msg-text">
									Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis.
								</p>
								<a href="#" class="aside_msg-link"></a>
							</div>	
							<div class="aside_msg-item">
								<div class="aside_msg-title">
									<i class="fa fa-tag tag_support"></i>
									<span>jesse Shaw</span>
								</div>
								<p class="aside_msg-text">
									Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis.
								</p>
								<a href="#" class="aside_msg-link"></a>
							</div>					
						</div><!-- /aside_msg-list -->	
					</div><!-- /aside_msg-wrap -->		
				</div><!-- /aside-inner -->
			</div><!-- /aside-wrap -->
		</div><!-- /js-scrl-wrap -->
	</div><!-- /#fragment-3 -->
	<div id="fragment-4">
		<div class="js-scrl-wrap">
			<div class="aside-wrap">
				<div class="aside-inner">
					<p class="aside-title">recent activity</p>
					<div class="aside_ra-wrap">
						<div class="aside_ra-list">
							<div class="aside_ra-item">
								<i class="fa fa-flag"></i>
								<div class="aside_ra-text">
									<a href="#" class="name">gary long</a>
									has registered.
									<span class="aside_ra-date">09:20</span>
								</div>
							</div>
							<div class="aside_ra-item">
								<i class="fa fa-cube"></i>
								<div class="aside_ra-text">
									New product
									<a href="#">sony playStation 4</a>.
									<span class="aside_ra-date">09:20</span>
								</div>
							</div>	
							<div class="aside_ra-item">
								<i class="fa fa-truck"></i>
								<div class="aside_ra-text">
									Order
									<a href="#">#35108243</a>.
									<span class="aside_ra-date">Jan 28, 09:42</span>
								</div>
							</div>		
							<div class="aside_ra-item">
								<i class="fa fa-heart"></i>
								<div class="aside_ra-text">
									<a href="#" class="name">julie payne</a>
									subscribed to news.
									<span class="aside_ra-date">Jan 28, 09:42</span>
								</div>
							</div>	
							<div class="aside_ra-item">
								<i class="fa fa-envelope-o"></i>
								<div class="aside_ra-text">
									30 letters was sent
									<span class="aside_ra-date">Jan 27, 03:08</span>
								</div>
							</div>	
							<div class="aside_ra-item">
								<i class="fa fa-truck"></i>
								<div class="aside_ra-text">
									Order
									<a href="#">#35597433</a>.
									<span class="aside_ra-date">Jan 26, 19:02</span>
								</div>
							</div>		
							<div class="aside_ra-item">
								<i class="fa fa-dollar"></i>
								<div class="aside_ra-text">
									$385 incoming payment.
									<span class="aside_ra-date">Jan 26, 18:06</span>
								</div>
							</div>
							<div class="aside_ra-item">
								<i class="fa fa-dollar"></i>
								<div class="aside_ra-text">
									$2824 incoming payment.
									<span class="aside_ra-date">Jan 26, 09:11</span>
								</div>
							</div>
						</div><!-- /aside_ra-list -->
					</div><!-- /aside_ra-wrap -->	
				</div><!-- /aside-inner -->
			</div><!-- /aside-wrap -->
		</div><!-- /js-scrl-wrap -->
	</div>
	<div id="fragment-5">
		<div class="js-scrl-wrap">
			<div class="aside-wrap">
				<div class="aside-inner">
					<p class="aside-title">settings</p>
					<div class="aside_ss-wrap">
						<div class="aside_ss-list">
							<div class="aside_ss-item">
								<span>site</span>
								<div class="aside_ss-cell">
									<div class="onoffswitch">
										<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked />
										<label class="onoffswitch-label" for="myonoffswitch"></label>
									</div>
								</div>
							</div>
							<div class="aside_ss-item">
								<span>mailing</span>
								<div class="aside_ss-cell">
									<div class="onoffswitch">
										<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" checked />
										<label class="onoffswitch-label" for="myonoffswitch"></label>
									</div>
								</div>
							</div>
							<div class="aside_ss-item">
								<span>limit</span>
								<div id="switchWrap" class="js-switch-wrap">
								<span class="switch-min">0</span>
								<span class="switch-max">2000</span>
									<div class="ui-slider-handle"><div id="switcher" class="js-switcher-result"></div></div>
								</div>
							</div>
							<div class="aside_ss-item">
								<span>timeout</span>
								<div class="aside_ss-cell">
									<input type="number" id="timeout" class="" value="15" min="5" max="50" step="5" />
								</div>
							</div>
						</div>
						<div class="aside_st-list">
							<div class="aside_st-item">
								<span class="aside_st-value">1,760</span>
								<p class="aside_st-text">visits of your site</p>
								<div id="asideBar" class="aside_st-chart ">
								</div>
							</div>
							<div class="aside_st-item">
								<span class="aside_st-value">2,034</span>
								<p class="aside_st-text">views of your products</p>
								<div id="asideArea" class="aside_st-chart aside_area">
								</div>
							</div>
							<div class="aside_st-item">
								<span class="aside_st-value">$2,950</span>
								<p class="aside_st-text">average day earning</p>
								<div id="asideThin" class="aside_st-chart ">
								</div>
							</div>
							<div class="aside_st-item">
								<span class="aside_st-value">290</span>
								<p class="aside_st-text">month orders</p>
								<div id="asideLine" class="aside_st-chart ">
								</div>
							</div>
						</div>
					</div><!-- /aside_ss-wrap -->
				</div><!-- /aside-inner -->
			</div><!-- /aside-wrap  -->
		</div><!-- /js-scrl-wrap -->
	</div>



</aside>



















		<div class="main-wrap">
	<div class="js-scrl-wrap">
		<div class="main-row">
			<div class="main-head">
				<div class="main-title">
					<ul class="breadcrumb">
						<li class="active">Dashboard</li>
					</ul>
				</div><!-- /main-title -->	
				<div class="main-search">
					<form action="#" method="#">
						<input type="text" placeholder="Search..." class="main-search-input">
						<button class="main-search-button"><i class="fa fa-search"></i></button>
					</form>
				</div><!-- /main-search -->
			</div><!-- /main-head -->
			<div class="main-container">
					<div class="main_b-center">
						<div class="main_panel panel-danger">
							<div class="main_panel-title">
								<h3>users statistic</h3>
							</div>
							<div class="main_panel-body">
								<div class="main_widget-wrap">
									<div class="main_widget-left">
										<div class="main_widget-title">levels</div>
										<div class="main_widget-chart">
											<div id="chartLines"></div>
										</div>					
									</div>
									<div class="main_widget-right">
										<div class="main_widget-right-title">ratio</div>
										<div class="main_widget-right-chart">
											<div id="chartDonut"></div>
										</div>
										<div class="main_widget-right-footer">
											<div class="main_widget-right-item">
												<div class="main_widget-right-label">free</div>
												<div class="main_widget-right-value">45</div>
											</div>
											<div class="main_widget-right-item">
												<div class="main_widget-right-label">light</div>
												<div class="main_widget-right-value">30</div>
											</div>
											<div class="main_widget-right-item">
												<div class="main_widget-right-label">pro</div>
												<div class="main_widget-right-value">20</div>
											</div>								
										</div> <!-- /main_widget-right-footer -->
									</div><!-- /main_widget-right -->
								</div><!-- /main_widget-wrap -->
							</div><!-- /main_panel-body -->
						</div><!-- /main_panel -->
					</div><!-- /main_b-center -->
					<div class="main_b-right">
						<div class="main_panel panel-success">
							<div class="main_panel-title"><h3>overview</h3></div>
							<div class="main_panel-body">
								<div class="main_widget-wrap">
									<div class="ov_widget-list">
										<div class="ov_widget-item inc">
											<div class="ov_widget-value">1,950</div>
											<div class="ov_widget-info">
												<div class="ov_widget-info-title">Total users</div>
												<div class="ov_widget-info-change">
													<span>15</span>
													<span class="fa fa-level-up"></span>
													<span class="fa fa-level-down"></span>
													<span class="fa fa-bolt"></span>
													<span class="fa fa-thumb-tack"></span>
												</div>
											</div>
										</div>
										<div class="ov_widget-item warn">
											<div class="ov_widget-value">3,230</div>
											<div class="ov_widget-info">
												<div class="ov_widget-info-title">Earnings</div>
												<div class="ov_widget-info-change">
													<span>$140</span>
													<span class="fa fa-level-up"></span>
													<span class="fa fa-level-down"></span>
													<span class="fa fa-bolt"></span>
													<span class="fa fa-thumb-tack"></span>
												</div>
											</div>
										</div>
										<div class="ov_widget-item dec">
											<div class="ov_widget-value">12,450</div>
											<div class="ov_widget-info">
												<div class="ov_widget-info-title">Visits</div>
												<div class="ov_widget-info-change">
													<span>921</span>
													<span class="fa fa-level-up"></span>
													<span class="fa fa-level-down"></span>
													<span class="fa fa-bolt"></span>
													<span class="fa fa-thumb-tack"></span>
												</div>
											</div>
										</div>
										<div class="ov_widget-item tack">
											<div class="ov_widget-value">1,087</div>
											<div class="ov_widget-info">
												<div class="ov_widget-info-title">Orders</div>
												<div class="ov_widget-info-change">
													<span></span>
													<span class="fa fa-level-up"></span>
													<span class="fa fa-level-down"></span>
													<span class="fa fa-bolt"></span>
													<span class="fa fa-thumb-tack"></span>
												</div>
											</div>
										</div><!-- /ov_widget-item tack -->
										<div class="ov_widget-bar">
											<span>Conquer the world</span>
											<div class="ov_widget-progress">
												<div id="progressbar"></div>
											</div>
										</div>
									</div><!-- /ov_widget-list -->
								</div><!-- /main_widget-wrap -->
							</div><!-- /main_panel-body -->
						</div><!-- /main_panel -->
					</div><!-- /main_b-right -->					
			</div><!-- /main-container -->
			<div class="main-container main-bottom">
				<div class="main_b-center">
					<div class="main_panel panel-info">
						<div class="main_panel-title">
							<h3>activity feed</h3>
						</div>
						<div class="main_panel-body js-scrl-wrap">
							<div class="main_widget-wrap">
								<div class="feed_widget-list">
									<div class="feed_widget-item">
										<i class="fa fa-flag"></i>
										<div class="feed_widget-info">
											<div class="feed_widget-text">
												<b><a href="#" class="name">gary long</a></b>has registered.
											</div><!-- /feed_widget-text -->
											<div class="feed_widget-date">
												14:20 pm - 01.11.2016
											</div><!-- /feed_widget-date -->
										</div><!-- /feed_widget-info -->
									</div><!-- /feed_widget-item -->
									<div class="feed_widget-item">
										<i class="fa fa-cube"></i>
										<div class="feed_widget-info">
											<div class="feed_widget-text">
												New product<b><a href="#" class="name">sony playStation 4.</a></b>
											</div><!-- /feed_widget-text -->
											<div class="feed_widget-date">
												10:08 pm - 01.11.2016
											</div><!-- /feed_widget-date -->
										</div><!-- /feed_widget-info -->
									</div><!-- /feed_widget-item -->
									<div class="feed_widget-item">
										<i class="fa fa-truck"></i>
										<div class="feed_widget-info">
											<div class="feed_widget-text">
												New order<b><a href="#" class="name">#35108243.</a></b>
											</div><!-- /feed_widget-text -->
											<div class="feed_widget-date">
												09:42 pm - 01.11.2016
											</div><!-- /feed_widget-date -->
										</div><!-- /feed_widget-info -->
									</div><!-- /feed_widget-item -->
									<div class="feed_widget-item">
										<i class="fa fa-heart"></i>
										<div class="feed_widget-info">
											<div class="feed_widget-text">
												<b><a href="#" class="name">julie payne</a></b>subscribed to a news feed.
											</div><!-- /feed_widget-text -->
											<div class="feed_widget-date">
												18:06 pm - 01.10.2016
											</div><!-- /feed_widget-date -->
										</div><!-- /feed_widget-info -->
									</div><!-- /feed_widget-item -->	
								</div><!-- /feed_widget-list -->
							</div><!-- /main_widget-wrap -->
						</div><!-- /main_panel-body -->
					</div><!-- /main_panel -->
					<div class="main_panel panel-danger">
						<div class="main_panel-title new">
							<h3>support messages</h3>
							<span>2</span>
						</div>
						<div class="main_panel-body js-scrl-wrap">
							<div class="main_widget-wrap">
								<div class="sp_widget-top clearfix">
									<div class="sp_widget-info">
										<div class="sp_widget-title">
											<i class="fa fa-envelope-o"></i>
											<span>2 New Messages</span>
										</div>
									</div><!-- /sp_widget-info -->
									<div class="sp_widget-btn"><a href="#">Show All</a></div>
								</div><!-- /sp_widget-top -->
								<div class="sp_widget-list">	
									<div class="sp_widget-item">
										<div class="sp_widget-user">
											<b><a href="#" class="name">carol burton</a></b>
											<span class="sp_widget-date">, 18:06 pm</span>
										</div>
										<div class="sp_widget-text">Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.</div>
									</div>
									<div class="sp_widget-item">
										<div class="sp_widget-user">
											<b><a href="#" class="name">judy shaw</a></b>
											<span class="sp_widget-date">, 11:38 pm</span>
										</div>
										<div class="sp_widget-text">Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.</div>
									</div>
									<div class="sp_widget-item">
										<div class="sp_widget-user">
											<b><a href="#" class="name">angela kennedy</a></b>
											<span class="sp_widget-date">, 13:03 pm - 01.09.2016</span>
										</div>
										<div class="sp_widget-text">Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.</div>
									</div>
									<div class="sp_widget-item">
										<div class="sp_widget-user">
											<b><a href="#" class="name">larry cole</a></b>
											<span class="sp_widget-date">, 15:10 pm - 01.08.2016</span>
										</div>
										<div class="sp_widget-text">Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.</div>
									</div>
									<div class="sp_widget-item">
										<div class="sp_widget-user">
											<b><a href="#" class="name">wanda watson</a></b>
											<span class="sp_widget-date">, 09:18 pm - 01.08.2016</span>
										</div>
										<div class="sp_widget-text">Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.</div>
									</div>
								</div><!-- /sp_widget-list -->
							</div><!-- /main_widget-wrap -->
						</div><!-- /main_panel-body -->
					</div><!-- /main_panel -->
				</div><!-- /main_b-center -->
			</div><!-- /main-container -->
		</div><!-- /main-row -->
	</div><!-- /js-scrl-wrap -->
</div>
	</div><!-- /container -->

		

</div><!-- /wrapper -->
<script src="js/main.min.js"></script>
<!--<script src="js/test.min.js"></script>-->
<script>
$(function() {
	$( "#tabs" ).tabs();
	
	$('.js-scrl-wrap').scrollbar();
	
	var handle = $( "#switcher" );
	$( "#switchWrap" ).slider({
		value: 1400, max: 2000, animate: "fast", step: 200,
		create: function() {
			handle.text( $( this ).slider( "value" ) );
		},
		slide: function( event, ui ) {
			handle.text( ui.value );
		}
	});

	$('#timeout').styler();
	
	$( "#progressbar" ).progressbar({
		value: 85
	});
	
	
});
	
	
	

</script>
</body>
</html>
