
  document.getElementById("crear-proyecto-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // Recoger los valores del formulario
    const nombreProyecto = document.getElementById("nombre-proyecto").value;
    const autorProyecto = document.getElementById("autor-proyecto").value;
    const colorInterfaz = document.getElementById("color-interfaz").value;

    // Generar el contenido del archivo HTML con clases de Bootstrap
    const body= document.createElement('DIV')

    body.innerHTML=`
    <nav id="sidebar" class="sidebar js-sidebar">
			<div class="sidebar-content js-simplebar">
				<a class="sidebar-brand" href="index.html">
          <span class="align-middle">AdminMaster</span>
        </a>

				<ul class="sidebar-nav">
					<li class="sidebar-header">
						Administracion
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="index.html">
              <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Proyectos</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="#">
              <i class="align-middle" data-feather="user"></i> <span class="align-middle">Perfil</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="#">
              <i class="align-middle" data-feather="log-in"></i> <span class="align-middle">Cerrar Sesion</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="#">
              <i class="align-middle" data-feather="user-plus"></i> <span class="align-middle">Iniciar Sesion</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="recursos.html">
              <i class="align-middle" data-feather="trending-up"></i> <span class="align-middle">Recursos</span>
            </a>
					</li>

					<li class="sidebar-header">
						Proyectos
					</li>

					<li class="sidebar-item active">
						<a class="sidebar-link" href="Proyecto1.html">
              <i class="align-middle" data-feather="cloud-lightning"></i> <span class="align-middle">Proyecto Clima</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="Proyecto2.html">
              <i class="align-middle" data-feather="mic"></i> <span class="align-middle">Proyecto Podcast</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="Proyecto3.html">
              <i class="align-middle" data-feather="book"></i> <span class="align-middle">Proyecto Biblioteca</span>
            </a>
					</li>

					

					<li class="sidebar-header">
						Herramientas y ayuda
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="#">
              <i class="align-middle" data-feather="square"></i> <span class="align-middle">Ayuda</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="#">
              <i class="align-middle" data-feather="check-square"></i> <span class="align-middle">Sobre nosotros</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="#">
              <i class="align-middle" data-feather="grid"></i> <span class="align-middle">Contacto</span>
            </a>
					</li>

				

		</nav>

		<div class="main">
			<nav class="navbar navbar-expand navbar-light navbar-bg">
				<a class="sidebar-toggle js-sidebar-toggle">
          <i class="hamburger align-self-center"></i>
        </a>

				<div class="navbar-collapse collapse">
					<ul class="navbar-nav navbar-align">
						<li class="nav-item dropdown">
							<a class="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
								<div class="position-relative">
									<i class="align-middle" data-feather="bell"></i>
									<span class="indicator">4</span>
								</div>
							</a>
							<div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
								<div class="dropdown-menu-header">
									4 Notificaciones nuevas
								</div>
								<div class="list-group">
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<i class="text-danger" data-feather="alert-circle"></i>
											</div>
											<div class="col-10">
												<div class="text-dark">Update completed</div>
												<div class="text-muted small mt-1">Restart server 12 to complete the update.</div>
												<div class="text-muted small mt-1">30m ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<i class="text-warning" data-feather="bell"></i>
											</div>
											<div class="col-10">
												<div class="text-dark">Lorem ipsum</div>
												<div class="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
												<div class="text-muted small mt-1">2h ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<i class="text-primary" data-feather="home"></i>
											</div>
											<div class="col-10">
												<div class="text-dark">Login from 192.186.1.8</div>
												<div class="text-muted small mt-1">5h ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<i class="text-success" data-feather="user-plus"></i>
											</div>
											<div class="col-10">
												<div class="text-dark">New connection</div>
												<div class="text-muted small mt-1">Christina accepted your request.</div>
												<div class="text-muted small mt-1">14h ago</div>
											</div>
										</div>
									</a>
								</div>
								<div class="dropdown-menu-footer">
									<a href="#" class="text-muted">Show all notifications</a>
								</div>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
								<div class="position-relative">
									<i class="align-middle" data-feather="message-square"></i>
								</div>
							</a>
							<div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
								<div class="dropdown-menu-header">
									<div class="position-relative">
										4 New Messages
									</div>
								</div>
								<div class="list-group">
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<img src="img/avatars/avatar-5.jpg" class="avatar img-fluid rounded-circle" alt="Vanessa Tucker">
											</div>
											<div class="col-10 ps-2">
												<div class="text-dark">Vanessa Tucker</div>
												<div class="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
												<div class="text-muted small mt-1">15m ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<img src="img/avatars/avatar-2.jpg" class="avatar img-fluid rounded-circle" alt="William Harris">
											</div>
											<div class="col-10 ps-2">
												<div class="text-dark">William Harris</div>
												<div class="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
												<div class="text-muted small mt-1">2h ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<img src="img/avatars/avatar-4.jpg" class="avatar img-fluid rounded-circle" alt="Christina Mason">
											</div>
											<div class="col-10 ps-2">
												<div class="text-dark">Christina Mason</div>
												<div class="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
												<div class="text-muted small mt-1">4h ago</div>
											</div>
										</div>
									</a>
									<a href="#" class="list-group-item">
										<div class="row g-0 align-items-center">
											<div class="col-2">
												<img src="img/avatars/avatar-3.jpg" class="avatar img-fluid rounded-circle" alt="Sharon Lessman">
											</div>
											<div class="col-10 ps-2">
												<div class="text-dark">Sharon Lessman</div>
												<div class="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
												<div class="text-muted small mt-1">5h ago</div>
											</div>
										</div>
									</a>
								</div>
								<div class="dropdown-menu-footer">
									<a href="#" class="text-muted">Show all messages</a>
								</div>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                <i class="align-middle" data-feather="settings"></i>
              </a>

							<a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                <img src="img/photos/free-user-icon-3296-thumb.png" class="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span class="text-dark">Usuario Registrado</span>
              </a>
							<div class="dropdown-menu dropdown-menu-end">
								<a class="dropdown-item" href="pages-profile.html"><i class="align-middle me-1" data-feather="user"></i> Perfil</a>
								<a class="dropdown-item" href="#"><i class="align-middle me-1" data-feather="pie-chart"></i>Graficos</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="index.html"><i class="align-middle me-1" data-feather="settings"></i>Ajuste y privacidad</a>
								<a class="dropdown-item" href="#"><i class="align-middle me-1" data-feather="help-circle"></i>Ayuda</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#">Cerrar sesion</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>

			<main class="content">
				<div class="container-fluid p-0">

					<div class="d-flex gap-2 mb-3">
						<i class="bi bi-heart text-primary" data-feather="cloud-lightning" style="width: 32px; height: 32px;"></i>
						<h1 class="h3 mb-3"><strong>Proyecto</strong> Clima</h1>
					</div>


					
                        <div class="row">
                            <div class="col-md-12 ">
                                <div class="card" style="background-color: rgb(27, 78, 141); color: aqua;">
                                    <div class="card-header " >
                                        <h5 class="card-title" style="color: rgb(27, 78, 141); font-size: 20px;">Información del Proyecto</h5>
                                    </div>
                                    <div class="card-body " >
                                        <p class="card-text">En esta sección puedes gestionar tus proyectos, ver las tareas asociadas y su estado.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
						<!-- Modal para subtareas -->
						<div class="modal fade" id="modal-subtareas" tabindex="-1" aria-hidden="true">
							<div class="modal-dialog modal-dialog-centered modal-lg">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="modal-titulo">Gestión de Subtareas</h5>
										<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div class="modal-body">
										<div class="row">
											<div class="col-md-6">
												<form id="form-subtarea">
													<div class="mb-3">
														<label for="autor-subtarea" class="form-label">Autor</label>
														<input type="text" class="form-control" id="autor-subtarea" placeholder="Autor de la subtarea" >
														<label for="autor-subtarea" class="form-label">Tarea</label>
														<input type="text" class="form-control" id="nombre-subtarea" placeholder="Nombre de la subtarea" >
													</div>
													<div class="mb-3">
														<label for="estado-subtarea" class="form-label">Estado</label>
														<select class="form-select" id="estado-subtarea">
															<option value="Pendiente">Pendiente</option>
															<option value="En curso">En curso</option>
															<option value="Realizada">Realizada</option>
														</select>
													</div>
													<button type="submit" class="btn btn-success">Agregar Subtarea</button>
												</form>
											</div>
											<div class="col-md-6">
												<div class="table-responsive">
													<table class="table table-striped">
														<thead>
															<tr>
																<th>Nombre</th>
																<th>Estado</th>
																<th>Autor</th>
															</tr>
														</thead>
														<tbody id="lista-subtareas">
															<!-- Subtareas dinámicas -->
														</tbody>
													</table>
												</div>
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div>
                        
                        <div class="row mt-4">
							<div class="col-md-6"   id="agg-tarea">
								<div class="card">
									<div class="card-header">
										<h5 class="card-title">Agregar Tarea</h5>
                                    </div>
                                    <div class="card-body">
                                        <form id="formulario">
                                            <div class="mb-3">
												<label for="nombre-tarea" class="form-label">Nombre de la Tarea</label>
                                                <input type="text" class="form-control" id="nombre-tarea" placeholder="Nombre de la tarea" >
                                            </div>
                                            <div class="mb-3">
												<label for="nombre-autor" class="form-label">Autor</label>
                                                <input type="text" class="form-control" id="nombre-autor" placeholder="Nombre del autor" >
                                            </div>
                                            <div class="mb-3">
												<label for="fecha-cierre" class="form-label">Fecha de cierre</label>
                                                <input type="date" class="form-control" id="fecha-cierre" placeholder="Agregar fecha de cierre" >
                                            </div>
                                            <!-- <div class="mb-3">
												<label for="fecha-cierre" class="form-label">Fecha Cierre</label>
                                                <input type="text" class="form-control" id="fecha-cierre" placeholder="Fecha cierre" >
                                            </div> -->
                                            <div class="mb-3">
												<label for="descripcion-tarea" class="form-label">Descripción</label>
                                                <textarea class="form-control" id="descripcion" rows="3" placeholder="Descripción de la tarea" ></textarea>
                                            </div>
                                            <div class="mb-3">
                                                <label for="estado-tarea" class="form-label">Estado</label>
                                                <select class="form-select" id="estado-tarea">
													<option value="Pendiente">Pendiente</option>
                                                    <option value="En curso">En curso</option>
                                                    <option value="Realizada">Realizada</option>
                                                </select>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Agregar Tarea</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

							<div class="col-md-6">
								<div class="card">
									<div class="card-header">
										<h5 class="card-title">Lista de Tareas</h5>
									</div>
									<div class="card-body">
										<div class="table-responsive">
											<table class="table table-hover">
												<thead>
													<tr>
														<th>Nombre</th>
														<th>Descripción</th>
														<th>Estado</th>
														<th>Autor</th>
														<!-- <th>Fecha cierre</th> -->
														<th>Acciones</th>
													</tr>
												</thead>
												<tbody id="lista-tareas">
													<!-- Las tareas se agregarán dinámicamente aquí -->
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							
                            </div>
                        </div>
                        
                        <div class="row mt-4">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="card-title">Resumen de Estados</h5>
                                    </div>
                                    <div class="card-body">
                                        <div style="max-width: 600px; margin: auto;">
                                            <canvas id="estadoChartNueva"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
						
					
                        
             
                       


					</div>

				</div>
			</main>

		</div>
    
    `

    body.classList.add('wrapper')
    const contenidoHTML= `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${nombreProyecto}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">

    </head>
    <body>

    ${body}


    
    </body>
    </html>

        `;

    // Crear un archivo Blob con el contenido HTML
    const blob = new Blob([contenidoHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    // Actualizar el sidebar con un enlace al nuevo proyecto
    const sidebar = document.querySelector(".sidebar-nav");
    const nuevoProyecto = document.createElement("li");
    nuevoProyecto.className = "sidebar-item";
    nuevoProyecto.innerHTML = `
        <a class="sidebar-link" href="${url}">
            <i class="align-middle" data-feather="file"></i> <span class="align-middle">${nombreProyecto}</span>
        </a>
    `;
    sidebar.appendChild(nuevoProyecto);

    // Actualizar feather icons si los usas
    if (typeof feather !== "undefined") feather.replace();

    // Mensaje de confirmación
    alert(`¡El proyecto "${nombreProyecto}" ha sido creado exitosamente y agregado al menú!`);
  });

