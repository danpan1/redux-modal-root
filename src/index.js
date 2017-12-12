import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


class ModalRoot extends PureComponent {
  render() {
    const { modalType, modalProps, modalIsOpen, components } = this.props;
    if (modalType && modalIsOpen) {
      const SpecificModal = components[modalType];
      return (
        <SpecificModal
          {...modalProps}
        />);
    }
    return <span />;
  }
}

ModalRoot.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.shape(),
  modalIsOpen: PropTypes.bool,
  components: PropTypes.shape().isRequired,
}

ModalRoot.propTypes =  {
  modalType: '',
  modalProps: null,
  modalIsOpen: false,
}

export default connect(
  state => ({
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps,
    modalIsOpen: state.modal.modalIsOpen,
  }),
  null,
)(ModalRoot);

