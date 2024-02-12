<template>
    <div class="container">
        <div class="row mt-3">
            <h1 class="text-center mb-3 bg-primary bg-opacity-75  rounded-pill text-white">Aplicacion web de Control de Profesores e Incidencias</h1>
            <div class="col-6">
                <div class="card">
                <img src="../assets/profesores.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title text-center">Profesores</h2>
                    <p class="card-text text-center">La plantilla del profesores del IES Jaume II El Just, Tavernes de la Valldigna, Valencia</p>
                    <div class="d-grid gap-2">
                        <router-link to="/profesores" class="btn btn-primary btn-lg text-center">Ir a la Pagina de Profesores</router-link>
                    </div>
                    
                </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card">
                <img src="../assets/incidencias.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2 class="card-title text-center">Incidencia en el Instituto</h2>
                    <p class="card-text text-center">Incidencias surgidas en el Instituto (IES Jaume II El Just, Tavernes de la Valldigna, Valencia)</p>
                    <div class="d-grid gap-2">
                        <router-link to="/incidencias" class="btn btn-danger btn-lg text-center"> Ir a la Pagina de Incidencias</router-link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    
</style>