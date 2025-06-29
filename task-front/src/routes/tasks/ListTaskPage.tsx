import { Link } from "react-router-dom";
import { routesAlias } from "../../routesalias";
import { useQuery } from "@tanstack/react-query";
import { deleteServices, getTask } from "../../services/taskServices";
import type { TaskResponse } from "../../data/task_res";
import Button from "../../components/forms/button";
import ModalBox from "../../components/forms/modal";
import { useState } from "react";

export default function ListTaskPage() {
  const { data } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTask
  });

  const [openModal, setOpenModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  const handleDelete = async () => {
    if (!taskToDelete) return;
    try {
      const response = await deleteServices(taskToDelete);
      if (response.status === 200) {
        location.reload();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setOpenModal(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div className="max-w-[1000px] w-full">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Liste des tâches</h2>
          <Link
            to={routesAlias.task.addTask}
            className="bg-blue-500 rounded-lg p-2 text-white w-max"
          >
            Ajouter une tâche
          </Link>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-7 py-3">TITRE</th>
                <th className="px-6 py-3">DESCRIPTION</th>
                <th className="px-7 py-3">STATUT</th>
                <div className="px-13">
                    <th className="px-6 py-3">Actions</th>
                </div> 
              </tr>
            </thead>
            <tbody>
              {data?.map((task: TaskResponse, index: number) => (
                <tr key={index} className="border-b">
                  <td className="p-2 px-6">{index + 1}</td>
                  <td className="p-2 px-6">{task.title}</td>
                  <td className="p-2 px-6">{task.description}</td>
                  <td className="p-2 px-6">{task.status}</td>
                  <td className="flex gap-3 py-2">
                    <Link to={routesAlias.task.update_task.replace(":id", task.id)}>
                      <Button
                        type="button"
                        className="bg-blue-500 rounded-lg p-1 px-6 py-1 text-white"
                      >
                        Modifier
                      </Button>
                    </Link>
                    <Button
                      type="button"
                      className="bg-red-500 rounded-lg p-1 px-6 py-1 text-white"
                      onClick={() => {
                        setTaskToDelete(task.id);
                        setOpenModal(true);
                      }}
                    >
                      Supprimer
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ModalBox
        openModal={openModal}
        setOpenModal={setOpenModal}
        onConfirm={handleDelete}
      />
    </div>
  );
}
