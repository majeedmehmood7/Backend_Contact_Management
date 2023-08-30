const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModal");

// @des Get all the contacts
// @route GET /api/contacts
// @access public

const getContacts = asyncHandler(async(req , res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});
// @des Create New Contact
// @route POST /api/contacts
// @access public

const createContact = asyncHandler(async(req , res)=>{
    console.log("The request body is " ,req.body);
    const {name , email ,phone} = req.body;
    if(!name || !email || !phone)
    {
        res.status(400);
        throw new Error("All Fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    })
    res.status(201).json({contact});
});

// @des Get Contact
// @route GET /api/contacts/id
// @access public

const getContact = asyncHandler(async(req , res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    res.status(200).json(contact);
});

// @des Update Contact
// @route PUT /api/contacts/id
// @access public

const updateContact = asyncHandler(async(req , res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updateContact);
});

// @des Delete Contact
// @route Delete /api/contacts/id
// @access public

const DeleteContact = asyncHandler(async(req , res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    await Contact.remove();
    res.status(200).json(contact);
});



module.exports = { getContact , createContact , getContacts , updateContact , DeleteContact};