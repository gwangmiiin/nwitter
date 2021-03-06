import React,{ useState } from "react";
import { dbService, storageService } from 'fbase'
import { v4 as uuidv4 } from 'uuid';

const NweetFactory = ({ userObj }) => {
  const [nweet , setNweet] = useState("")
  const [attachment, setAttachment] = useState("")  
  const onSubmit = async (event) => {
    event.preventDefault()
    let attachmentUrl = ''
    if (attachment !== '') {
    const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`)
    const response = await attachmentRef.putString(attachment, "data_url")
    attachmentUrl = await response.ref.getDownloadURL()
    }
    const nweetObj = {
      text: nweet,
      createdAt: Date.now(),
      creatorId : userObj.uid,
      attachmentUrl
    }
    await dbService.collection('nweets').add(nweetObj)
    setNweet("")
    setAttachment("")
  }
  const onChange = (event) => {
    const{ target: { value } } = event
    setNweet(value)
  }
  const onFileChange = (event) => {
    const { target : { files } } = event
    const theFile = files[0]
    const reader = new FileReader()
    reader.onloadend = (finishedEvent) => {
      const { currentTarget: { result } } = finishedEvent
      setAttachment(result)
    }
    reader.readAsDataURL(theFile)
  }
  const onClearAttachment = () => setAttachment(null)
  return(
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={nweet} onChange={onChange} placeholder="What's on your mind?" maxLength={120} />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Nweet" />
        {attachment && (
          <div>
            <img alt="#" src={attachment} width ={150} height={100}/>
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
      </form>
    </div>
  )
}

export default NweetFactory