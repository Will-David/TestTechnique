import { Link, useNavigate, useParams } from "react-router-dom";
import type { TaskRequest } from "../../../data/task_req";
import { routesAlias } from "../../../routesalias";
import { getTaskById, updateService } from "../../../services/taskServices";
import { useForm } from "react-hook-form";
import Button from "../../../components/forms/button";
import { useQuery } from "@tanstack/react-query";


export default function UpdateTaskPage()
{
    const navigate = useNavigate()
    const {id} = useParams<{id: string}>()

    const {data} = useQuery({
        queryKey: ["task", id],
        queryFn: () => getTaskById(id!),
        enabled: !!id
    })

    console.log(data)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        values: {
            title: data?.title || '',
            description: data?.description || '',
            status: data?.status || 'En cours'
        }
    });
    const onSubmit = async(data: TaskRequest) => {
        try {
            const response = await updateService(id!, data)
            console.log(response)
            if (response.status === 201) {
                navigate(routesAlias.task.home)
            }
        } catch (error) {
            console.error(error)
        }
    };
    return (
        <>
            <div className="flex justify-center py-52">
                <div className="border border-gray-300 rounded-2xl max-w-[1000px] w-full p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="title">Titre de Tâche</label>
                            <input
                                className={`block border p-1 w-full border-gray-300 focus:outline-none ${
                                    errors.title ? 'border-red-500' : ''
                                }`}
                                id="title"
                                type="text"
                                placeholder="Titre de la tâche"
                                {...register('title', {
                                    required: 'Le titre est requis',
                                    minLength: {
                                        value: 3,
                                        message: 'Le titre doit avoir au moins 3 caractères'
                                    }
                                })}
                            />
                            {errors.title && (
                                <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className={`block border w-full p-1 border-gray-300 focus:outline-none ${
                                    errors.description ? 'border-red-500' : ''
                                }`}
                                id="description"
                                placeholder="Description de la tâche"
                                {...register('description', {
                                    required: 'La description est requise'
                                })}
                            />
                            {errors.description && (
                                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="status">Statut</label>
                            <select
                                className="border w-full border-gray-300"
                                id="status"
                                {...register('status')}
                            >
                                <option value="En cours">En cours</option>
                                <option value="Fait">Fait</option>
                            </select>
                        </div>
                        <div className="gap-2 flex items-center justify-start bg-white text-gray-800">
                        <Button
                            type="submit" 
                            className="bg-blue-500  rounded-lg p-2 text-white w-max"
                        >
                            Ajoutez la tâche
                        </Button>
                        <Link
                            to = {routesAlias.task.home}
                            className="bg-red-500  rounded-lg p-2 text-white w-max"
                        >
                            Annuler
                        </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}