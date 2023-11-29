import PropTypes from 'prop-types';
function Wrapper({ children }) {
  return (
    <div style = {{maxWidth:"1000pz", margin:"0 auto"}}>{children}</div>
  )
}

Wrapper.propTypes={
    children: PropTypes.node // Valida que "children" puede ser cualquier nodo (por ejemplo, una cadena, número, elemento, etc.)
};
export default Wrapper;