import React, { useEffect, useState } from 'react';
import { RxUpdate } from 'react-icons/rx';
import { MdDelete } from 'react-icons/md';
import { SiReactos } from 'react-icons/si';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const View = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    fetch('https://task-server-lake.vercel.app/users')
      .then((response) => response.json())
      .then((data) => setusers(data.data));
  }, []);

  const handleDeleteInfo = (id) => {
    fetch(`https://task-server-lake.vercel.app/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const deletedItems = users.filter((user) => user._id !== id);
          setusers(deletedItems);
          toast.success('information delete successfully');
        }
      });
  };

  let content;
  if (!users.length) {
    content = (
      <div className=" flex justify-center space-x-4 items-center ">
        <SiReactos color="green" size={40} className="animate-spin" />
        <h2 className="text-black">You have no data </h2>
      </div>
    );
  }
  if (users.length) {
    content = (
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Item Name</th>
              <th>Validation</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td> {user.name}</td>
                <td>{user.selected}</td>
                <td
                  className={`${
                    user.condition === true ? ' text-green-600' : 'text-red-500'
                  }`}
                >
                  {' '}
                  {user.condition === true ? 'Varify' : 'unothorize'}
                </td>
                <td>
                  <Link to={`/updateinfo/${user._id}`}>
                    <RxUpdate
                      color="green"
                      size={30}
                      className="  cursor-pointer   "
                    />{' '}
                  </Link>
                </td>
                <td>
                  <MdDelete
                    onClick={() => handleDeleteInfo(user._id)}
                    color="red"
                    size={30}
                    className=" cursor-pointer"
                  />{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default View;
