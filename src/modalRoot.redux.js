// Constants
export const HIDE_MODAL = '@modal/HIDE_MODAL';
export const SHOW_MODAL = '@modal/SHOW_MODAL';

const initialState = {
  modalType: null,
  modalProps: null,
  modalIsOpen: false,
};

export default function reducer(modal = { ...initialState }, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_MODAL:
      return {
        modalType: payload.modalType,
        modalProps: payload.modalProps,
        modalIsOpen: true,
      };
    case HIDE_MODAL:
      return { ...initialState };

    default:
      return modal;
  }
}


// Action Creators for Reducers
export const hideModalAC = () => ({ type: HIDE_MODAL });
export const showModalAC = ({ modalProps, modalType }) => ({
  type: SHOW_MODAL,
  payload: {
    modalType,
    modalProps: {
      ...modalProps,
    },
  },
});
