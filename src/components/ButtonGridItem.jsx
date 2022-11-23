
export const ButtonGridItem = ({id, deleteItem}) => {
  const deleteGif = () => {
    deleteItem(id);
  }
  return (
    <button type="button" className="btn btn-danger mb-3" onClick={deleteGif}>
        Delete gif
    </button>
  )
}
