import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClasses =
    'relative overflow-hidden font-medium rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer hover:scale-105 active:scale-95 group';

  const variants = {
    primary:
      'bg-global-5 text-global-4 border  border-solid border-white hover:bg-opacity-80 focus:ring-white',
    secondary:
      'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100 focus:ring-gray-500',
    outline:
      'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400 focus:ring-gray-500',
  };

  const sizes = {
    small: 'px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm h-8',
    medium: 'px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base h-10',
    large: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg h-12',
  };

  const buttonClasses = `
    ${baseClasses}
    ${variants?.[variant]}
    ${sizes?.[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      <span className="block relative h-full overflow-hidden">
        <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
          <span className="block leading-[2.5rem]">{children}</span>
          <span className="block leading-[2.5rem]">{children}</span>
        </span>
      </span>

      {/* Accessible hidden text */}
      <span className="sr-only">{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
