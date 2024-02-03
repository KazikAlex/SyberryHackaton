/* 
  Props:
  * name - The name of the sprite file in the Image/sprites folder
  * id - id of the icon in the sprite file
  * alt 
*/

const SvgIcon = ({ name, id, className, alt }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={alt}
    >
      <use xlinkHref={`/images/sprites/${name}.svg#${id}`} />
    </svg>
  )
}

export default SvgIcon
