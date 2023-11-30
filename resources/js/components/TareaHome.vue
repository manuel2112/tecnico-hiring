<template>
    <h1><span class="badge bg-success">Tarea Index</span></h1>

    <div class="text-end">        
        <router-link :to="{name: 'tarea.create'}" class="btn btn-primary">Crear Tarea</router-link>
    </div>

    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">TAREA</th>
                <th scope="col">FECHA</th>
                <th scope="col">ACCIONES</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(item, idx) in tareas.data" :key="item.id">
                <tr>
                    <th scope="row">{{ ++idx }}</th>
                    <td>{{ item.titulo }}</td>
                    <td>{{ item.fecha }}</td>
                    <td>
                        <router-link :to="{name: 'tarea.edit', params: {id: item.id}}" class="btn btn-warning"><i class="fa-regular fa-pen-to-square"></i></router-link>
                        <button type="button" class="btn btn-danger" @click="deleteTarea(item.id)"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>

            </template>
        </tbody>
    </table>

    <div class="form-group">
        <!-- <Pagination
            :data="tareas"
            @pagination-change-page="getTareas"
        /> -->
        <Pagination :data="tareas" @pagination-change-page="getTareas" />
    </div>

</template>

<script>
import useTareas from '../composables/tareas';
import { onMounted } from "vue";
import { Bootstrap5Pagination } from 'laravel-vue-pagination';

    export default {
        components: {
            'Pagination': Bootstrap5Pagination
        },

        setup(){
            const { tareas, getTareas, destroyTarea } = useTareas();

            onMounted( () => getTareas());

            const deleteTarea = async(id) => {
                if( !window.confirm('Estás seguro?')){
                    return;
                }
                await destroyTarea(id);
                await getTareas();
            }

            return {
                tareas,
                deleteTarea,
                getTareas
            }
        }

    }

</script>