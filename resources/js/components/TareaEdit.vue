<template>
    <h1><span class="badge bg-success">Editar Tarea</span></h1>
    <router-link :to="{name: 'tarea.home'}" class="btn btn-primary">Portada</router-link>

    <div v-if=" errors != '' ">
        <div class="alert alert-danger">
            <div v-for="(v,k) in errors" :key="k">
                <p v-for="error in v" :key="error">
                     - {{ error }}
                </p>
            </div>
        </div>
    </div>

    <form @submit.prevent="saveTarea">

        <div class="form-group">
            <label>Título</label>
            <input v-model="tarea.titulo" type="text" name="titulo" class="form-control" />
        </div>

        <div class="form-group">
            <label>Tarea</label>
            <input v-model="tarea.tarea" type="text" name="tarea" class="form-control" />
        </div>

        <div class="form-group">
            <label>Fecha</label>
            <input v-model="tarea.fecha" type="date" name="fecha" class="form-control" />
        </div>
        
        <div class="form-group mt-2 text-end">
            <button type="submit" class="btn btn-primary">Editar</button>
        </div>

    </form>

</template>

<script>
import useTareas from '../composables/tareas';
import { onMounted } from 'vue';

    export default {

        props: {
            id: {
                require: true,
                type: String
            }
        },

        setup(props){
            const { errors, tarea, getTarea, updateTarea } = useTareas();

            onMounted( () => getTarea(props.id));

            const saveTarea = async() => {
                await updateTarea(props.id);
            }
            

            return {
                tarea,
                errors,
                saveTarea
            }
        }

    }

</script>