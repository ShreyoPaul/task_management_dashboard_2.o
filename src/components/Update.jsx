"use client";

import Image from "next/image";
import cross from "../../public/pic/cross.png";
import share from "../../public/pic/share.png";
import open from "../../public/pic/open.png";
import star from "../../public/pic/star.png";
import stts from "../../public/pic/status.png";
import pen from "../../public/pic/pen.png";
import cal from "../../public/pic/cal.png";
import priority from "../../public/pic/prio.png";
import { GoPlus } from "react-icons/go";
import { useEffect, useState } from "react";
import { useCookies } from "next-client-cookies";
import { BaseURL } from "@/constants/baseUrl";
import toast from "react-hot-toast";

const Update = ({ setUpdateToggle, fetchAllTasks }) => {
  const [title, setTitle] = useState("");
  const [id, setID] = useState("");
  const [status, setStatus] = useState("");
  const [prio, setPrio] = useState("");
  const [deadline, setDeadline] = useState("");
  const [desc, setDesc] = useState("");
  const cookies = useCookies();
  const cookie = cookies.get("user");
  const today = new Date().toISOString().split("T")[0];

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handlePrioChange = (event) => {
    setPrio(event.target.value);
  };
  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };
  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const fetchTaskDetails = async () => {
    let res = await fetch(`${BaseURL}/task/${id}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${cookie}`,
      },
    });
    res = await res.json();
    if (res && res.result) {
      setDeadline(res.result.deadline);
      setDesc(res.result.desc);
      setTitle(res.result.title);
      setPrio(res.result.priority);
      setStatus(res.result.status);
    } else {
      toast.error(res.message);
    }
  };
  useEffect(() => {
    if (id) {
      fetchTaskDetails();
    }
  }, [id]);

  const updateTask = async () => {
    let res = await fetch(`${BaseURL}/${id}`, {
      mode: "cors",
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${cookie}`,
      },
      body: JSON.stringify({
        title,
        desc,
        priority: prio,
        status,
        deadline,
      }),
    });
    res = await res.json();
    if (res) {
      fetchAllTasks();
      toast.success(res.message)
    }
    setDeadline("");
    setStatus("");
    setDesc("");
    setPrio("");
    setTitle("");
    setID("");
    setUpdateToggle(false);
  };
  return (
    <div className="px-6 py-4 bg-white w-full md:w-[670px] font-barlow h-screen">
      <div className="flex flex-row w-full justify-between mb-[27px]">
        <div className="flex flex-row gap-4 items-center justify-center">
          <Image
            src={cross}
            alt="cross"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={() => {
              setID("");
              setDeadline("");
              setStatus("");
              setDesc("");
              setPrio("");
              setTitle("");
              setUpdateToggle(false);
            }}
          />
          <Image src={open} alt="open" width={24} height={24} />
        </div>
        <div className="flex flex-row gap-4  text-[#797979]">
          <button
            onClick={updateTask}
            className="flex flex-row gap-[14px] justify-center items-center rounded p-2 bg-[#F4F4F4]"
          >
            Update
            <GoPlus className="text-2xl" />
          </button>
          <button className="flex flex-row gap-[14px] justify-center items-center rounded p-2 bg-[#F4F4F4]">
            Share
            <Image src={share} alt="share" width={24} height={24} />
          </button>
          <button className="flex flex-row gap-[14px] justify-center items-center rounded p-2 bg-[#F4F4F4]">
            Favorite
            <Image src={star} alt="star" width={24} height={24} />
          </button>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Task ID"
          value={id}
          onChange={(e) => setID(e.target.value)}
          className="text-5xl mb-8 outline-none font-semibold"
        />
      </div>
      <div className="mb-[38px]">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-5xl mb-8 outline-none font-semibold"
        />
        <div className="flex flex-col gap-y-8 w-full">
          <div className="flex flex-row w-full justify-start gap-[60px]">
            <div className="flex flex-row gap-6 text-[#666666] w-44">
              <Image src={stts} alt="status" width={24} height={24} />
              Status
            </div>
            <select
              id="task-status"
              value={status}
              onChange={handleStatusChange}
              className="outline-none  "
            >
              <option value="" disabled>
                Not selected
              </option>
              <option value="TODO">To do</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="UNDER_REVIEW">Under Review</option>
              <option value="FINISHED">Finished</option>
            </select>
          </div>
          <div className="flex flex-row w-full justify-start gap-[60px]">
            <div className="flex flex-row gap-6 text-[#666666] w-44">
              <Image src={priority} alt="prio" width={24} height={24} />
              Priority
            </div>
            <select
              id="task-prio"
              value={prio}
              onChange={handlePrioChange}
              className="outline-none  "
            >
              <option value="" disabled>
                Not selected
              </option>
              <option value="Urgent">Urgent</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="flex flex-row w-full justify-start gap-[60px]">
            <div className="flex flex-row gap-6 text-[#666666] w-44">
              <Image src={cal} alt="cal" width={24} height={24} />
              Deadline
            </div>
            <input
              type="date"
              placeholder="Not selected"
              min={today}
              value={deadline}
              onChange={handleDeadlineChange}
              className="outline-none  "
            />
          </div>
          <div className="flex flex-row w-full justify-start gap-[60px]">
            <div className="flex flex-row gap-6 text-[#666666] w-44">
              <Image src={pen} alt="pen" width={24} height={24} />
              Description
            </div>
            <input
              type="text"
              placeholder="Not selected"
              value={desc}
              onChange={handleDescChange}
              className="outline-none  "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-6 mb-9">
        <GoPlus />
        Add custom property
      </div>
      <hr className="border w-full" />
      <div className="mt-8 text-[#C0BDBD]">
        Start writing, or drag your own files here.
      </div>
    </div>
  );
};

export default Update;
