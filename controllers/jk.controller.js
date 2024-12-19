import newfile from "../models/jk.model.js";

export const indexget = async (req,res) =>{
    try {
        const files = await newfile.find()
        res.json(files)
    } catch (error) {
        res.status(500).json({ message : error});
    }
   };

   export const indexpost =  async (req,res) =>{
    
    console.log(req.body);



   const  file = newfile ({

    tittle: req.body.tittle,
    desc: req.body.desc,
   });

try {
    const file1 =  await file.save();
    return res.status(201).json(file1)
} catch (error) {
    return res.status(400).json({ message: error});
}
    return res.json(req.body);
};

export const detail = async (req,res) => {
    try {
    const file = await newfile.findById(req.params.id);

    if (file == null) {
        return res.status(404).json({ message: error});
    }
        else{
            res.json(file)
        }
   
} catch (error) {
    return res.status(500).json({ message: error});
}
};


export const indexput = async (req,res) =>{
  try {
    const result = await newfile.findByIdAndUpdate(
        {_id: req.params.id},{
        tittle: req.body.tittle,
        desc: req.body.desc,
    });

        res.status(200).json(result);

  } catch (error) {
    res.status(400).json({nmessage:error});
  }
    
    
}
    /*if (req.body.tittle != null) {
        res.file.tittle = req.body.tittle;
    }
    if (req.body.descb != null) {
        res.file.desc = req.body.desc;
    }

    try {
       const updatefile =  await res.file.save();
       res.json(updatefile);
    } catch (error) {
        res.status(400).json({ message : error});
    }
};*/

export const indexdelete = async(req,res) =>{
    const fileid = req.params.id;

 

    try {
        await file.deleteone
       res.json({ message: "file deleted"});
    } catch (error) {
        res.status(500).json({message:error});
    }
};
