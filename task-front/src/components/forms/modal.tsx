import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";

interface ModalBoxProps {
  openModal: boolean;
  setOpenModal: (state: boolean) => void;
  onConfirm: () => void;
}

export default function ModalBox({ openModal, setOpenModal, onConfirm }: ModalBoxProps) {
  return (
    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
      <ModalHeader />
      <ModalBody>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Voulez-vous vraiment supprimer cette tâche ?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="red" onClick={onConfirm}>
              Oui
            </Button>
            <Button color="alternative" onClick={() => setOpenModal(false)}>
              Non, Annuler
            </Button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}
