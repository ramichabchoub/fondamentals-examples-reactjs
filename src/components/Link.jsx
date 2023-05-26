import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ path, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    className,
    "text-blue-500 hover:text-blue-700",
    currentPath === path && activeClassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(path);
  };

  return (
    <a className={classes} onClick={handleClick} href={path}>
      {children}
    </a>
  );
}

export default Link;
