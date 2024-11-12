/* eslint-disable react/prop-types */
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Pagination = ({ page, onSetPage, totalPages }) => {
  const getItemProps = (index) => ({
    variant: page === index ? "filled" : "text",
    color: "gray",
    onClick: () => onSetPage(index),
    className: "rounded-full",
  });

  const next = () => {
    if (page === totalPages) return;

    onSetPage(page + 1);
  };

  const prev = () => {
    if (page === 1) return;

    onSetPage(page - 1);
  };

  return (
    <div className="flex items-center justify-center gap-4 py-10">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={page === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <IconButton key={i} {...getItemProps(i + 1)}>
            {i + 1}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={page === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
