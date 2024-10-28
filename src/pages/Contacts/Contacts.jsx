/* eslint-disable react/prop-types */

import { IoMdAdd } from "react-icons/io";
import profile from '../../images/hisbKitab_profile.jpeg';
import { GiHalfDead } from "react-icons/gi";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { CiMenuKebab } from "react-icons/ci";


import Wlcm from "../../components/Common/Wlcm"


const AddContactButton = () => {
    return (
        <Button className="flex items-center text-sm px-2 py-[2px]  bg-blue-50 text-blueee rounded-xl" color="success" endContent={<IoMdAdd className="inline-block" />}>
            Add Contact
        </Button>
    )
}

const EmptyContacts = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <GiHalfDead className="text-[12rem] opacity-60" />
            <p className="text-xl font-[500] opacity-80">No contact found</p>
        </div>
    )
}

const options = [
    {
        key: "new",
        label: "Add Transaction",
    },
    {
        key: "all",
        label: "All Transactions",
    },
    {
        key: "delete",
        label: "Delete",
    }
];

const contacts = [
    {
        id: 1,
        name: "Tony Reichert",
        email: "tony.reichert@example.com",
        phoneNumber: "+1 123-456-7890",
        ownerId: 101,
        balance: 500.0,
        transactions: [
            { id: 1, amount: 250.0, type: "credit", date: "2024-10-20" },
            { id: 2, amount: -50.0, type: "debit", date: "2024-10-21" }
        ]
    },
    {
        id: 2,
        name: "William Howard",
        email: "william.howard@example.com",
        phoneNumber: "+1 234-567-8901",
        ownerId: 102,
        balance: 300.0,
        transactions: [
            { id: 3, amount: 100.0, type: "credit", date: "2024-10-22" },
            { id: 4, amount: -25.0, type: "debit", date: "2024-10-23" }
        ]
    },
    {
        id: 3,
        name: "Sophia Brown",
        email: "sophia.brown@example.com",
        phoneNumber: "+1 345-678-9012",
        ownerId: 101,
        balance: 450.0,
        transactions: [
            { id: 5, amount: 200.0, type: "credit", date: "2024-10-24" },
            { id: 6, amount: -100.0, type: "debit", date: "2024-10-25" }
        ]
    },
    {
        id: 4,
        name: "Olivia Johnson",
        email: "olivia.johnson@example.com",
        phoneNumber: "+1 456-789-0123",
        ownerId: 103,
        balance: -600.0,
        transactions: [
            { id: 7, amount: 300.0, type: "credit", date: "2024-10-26" },
            { id: 8, amount: -150.0, type: "debit", date: "2024-10-27" }
        ]
    },
    {
        id: 5,
        name: "Liam Wilson",
        email: "liam.wilson@example.com",
        phoneNumber: "+1 567-890-1234",
        ownerId: 102,
        balance: 200.0,
        transactions: [
            { id: 9, amount: 75.0, type: "credit", date: "2024-10-28" },
            { id: 10, amount: -30.0, type: "debit", date: "2024-10-29" }
        ]
    }
];


const ContactCard = ({ contact }) => {
    return (
        <div className="flex items-center gap-2 hover:bg-[#294c5c] p-1 px-2 pr-0 rounded-md">
            <img className="w-10 rounded-full" src={profile} alt="" />
            <div className="flex flex-col gap-1">
                <p className="cursor-pointer opacity-90 hover:opacity-100 text-lg">{contact.name}</p>
                {contact.balance > 0 ? <span className="text-green-400 text-sm">owes you {contact.balance}</span> : <span className="text-red-500 text-sm">you own {contact.balance}</span>}
            </div>
            <div className="ml-auto">
                <Dropdown>
                    <DropdownTrigger>
                        <Button className="flex items-center text-xl  text-blue-50 rounded-md"
                        >
                            <CiMenuKebab /> 

                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Dynamic Actions" className="bg-blue-50 rounded-lg border-2 border-blueee " items={options}>
                        {(item) => (
                            <DropdownItem
                                key={item.key}
                                color={item.key === "delete" ? "danger" : "default"}
                                className={(item.key === "delete" ? "text-red-600" : "") + ""}
                            >
                                {item.label}
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
            </div>

        </div>
    )
}


const Contacts = () => {
    return (
        <div>
            <Wlcm />
            <div className="mt-4 flex flex-col gap-2 bg-blueee text-white p-5 rounded-xl">
                <p className=" text-xl sm:text-2xl font-semibold flex items-center justify-between">Contacts <AddContactButton /> </p>

                {!contacts || contacts.length == 0 ? <EmptyContacts /> : contacts.map(contact => (
                    <ContactCard
                        key={contact.id}
                        contact={contact}
                    />
                ))}


            </div>
        </div>
    );
};

export default Contacts