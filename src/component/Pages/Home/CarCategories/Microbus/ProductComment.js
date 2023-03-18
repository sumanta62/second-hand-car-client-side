import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider';
import { CiEdit } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import Spinner from '../../../../Spinner/Spinner';
import EditComment from './EditComment';

const ProductComment = ({ rightSideGame, detailsId }) => {
    const { user } = useContext(AuthContext);
    const [editComments, setEditComments] = useState();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const handelComment = (data) => {
        const comment = {
            comment: data.comment,
            productDetailsId: detailsId,
            photoURL: user.photoURL,
            displayName: user.displayName,
        };
        fetch(`https://handler-car-server.vercel.app/comment`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(comment),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.acknowledged) {
                    refetch();
                    reset();
                    toast.success("Comment Added Successfully");
                } else {
                    toast.error(result.message);
                }
            });
    };
    const {
        data: comments, isLoading, refetch, } = useQuery({
            queryKey: ["comment"],
            queryFn: async () => {
                const res = await fetch("https://handler-car-server.vercel.app/comment/");
                const result = await res.json();
                const data = result.filter(product => product.productDetailsId === detailsId || rightSideGame);
                return data;
            },
        });
    const handlerDeleteComment = (id) => {
        console.log(id);
        const proceed = window.confirm(
            "Are you sure , you went to cancel this .Comment"
        );
        if (proceed) {
            fetch(`https://handler-car-server.vercel.app/deleteComment/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success("Comment Deleted Successfully");
                        refetch();
                    }
                });
        }
    };
    if (isLoading) {
        <Spinner />
    }

    return (
        <div>
            <div className='border p-2'>
                <form onSubmit={handleSubmit(handelComment)}>
                    <div className=" flex justify-center gap-3">
                        <div className="w-16 ">
                            {user?.photoURL ?
                                <img
                                    src={user?.photoURL}
                                    className="w-full rounded-full border-4 border-amber-500"
                                    alt=""
                                />
                                :
                                <img
                                    src='https://t4.ftcdn.net/jpg/03/28/11/35/360_F_328113542_31B2IVU37qZ09cXXA6iMSXs62Optrwok.jpg'
                                    className="w-full rounded-full border-4 border-amber-500"
                                    alt=""
                                />}
                        </div>
                        <textarea
                            type="textarea"
                            className="input w-full bg-slate-200 px-3 pt-3 rounded-lg "
                            name="comment"
                            {...register("comment", {
                                required: "Comment address is required",
                            })}
                            placeholder="Comment add"
                        />
                        {
                            user?.email ?
                            <input 
                                className=" btn-md border shadow-2xl font-bold w-32 bg-amber-500 transform duration-500 float-right text-white cursor-pointer" 
                                value="Comment"
                                type="submit"
                                
                            />
                            :
                            <button 
                            className=" btn-md border shadow-2xl font-bold w-32 bg-amber-500 transform duration-500 float-right text-white disabled:opacity-50" disabled
                                
                            >Comment </button>

                        }
                    </div>
                    <div className='ml-14'>
                        {errors.comment && (
                            <p className="text-orange-400">{errors.comment?.message}</p>
                        )}
                    </div>
                </form>
            </div>
            <div className="mt-5 space-y-4">
                {comments?.map((comment, i) => (
                    <div className=" space-y-2 border border-spacing-1 shadow-lg p-2">
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="w-8 h-8 ">
                                {comment?.photoURL ?
                                    <img
                                        src={comment?.photoURL}
                                        className="w-full rounded-full border-4 border-amber-500"
                                        alt=""
                                    />
                                    :
                                    <img
                                        src='https://t4.ftcdn.net/jpg/03/28/11/35/360_F_328113542_31B2IVU37qZ09cXXA6iMSXs62Optrwok.jpg'
                                        className="w-full rounded-full border-4 border-amber-500"
                                        alt=""
                                    />}
                            </div>
                            <h6 className="text-sm font-semibold">{comment?.displayName}</h6>
                        </div>
                        {user?.uid &&
                            <div className="flex justify-between gap-4 bg-slate-200 p-2 rounded-md">
                                <div>
                                    <p className="text-justify ">
                                        {comment?.comment}
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <div>
                                        <label
                                            onClick={() => setEditComments(comment)}
                                            htmlFor="my-modal-4"
                                            title='Edit'
                                            className=" text-2xl cursor-pointer"
                                        >
                                            <CiEdit></CiEdit>
                                        </label>
                                    </div>
                                    <div>
                                        <TiDeleteOutline
                                            className=" text-3xl cursor-pointer text-orange-600 font-bold"
                                            title='Delete'
                                            onClick={() => handlerDeleteComment(comment?._id)}
                                        ></TiDeleteOutline>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                ))}
            </div>
            {editComments && (
                <EditComment
                    refetch={refetch}
                    editComments={editComments}
                    setEditComments={setEditComments}
                ></EditComment>
            )}
        </div>
    );
};

export default ProductComment;