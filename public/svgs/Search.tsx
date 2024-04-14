import { IconSearchProps } from '@/types/common';

export default function IconSearch({ color }: IconSearchProps) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9248 18.7436C12.5358 18.7415 14.1058 18.2356 15.415 17.2968L20.176 22.0582C20.2829 22.1645 20.4098 22.2485 20.5495 22.3054C20.6891 22.3623 20.8386 22.3909 20.9894 22.3895C21.6425 22.3895 22.1144 21.8872 22.1144 21.2444C22.1144 20.9431 22.0141 20.6619 21.793 20.4412L17.062 15.6999C18.0563 14.3941 18.649 12.7771 18.649 11.0191C18.649 6.77021 15.1737 3.29492 10.9248 3.29492C6.66611 3.29492 3.20068 6.77021 3.20068 11.0191C3.20068 15.2679 6.66611 18.7436 10.9248 18.7436ZM10.9248 17.0761C7.59997 17.0761 4.86783 14.3341 4.86783 11.0191C4.86783 7.70449 7.59997 4.96206 10.9248 4.96206C14.2394 4.96206 16.9818 7.70449 16.9818 11.0191C16.9818 14.3341 14.2394 17.0761 10.9248 17.0761Z"
        fill={color ? color : 'white'}
      />
    </svg>
  );
}
