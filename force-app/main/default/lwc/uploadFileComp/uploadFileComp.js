import { LightningElement , api} from 'lwc';

export default class UploadFileComp extends LightningElement {
   
    @api recordId;
    fileData

    openfileUpload(event) {
        console.log('in');
        const file = event.target.files[0]
        console.log('in file' , file);
        var reader = new FileReader()
        reader.onload = () => {
      var base64 = reader.result.split(',')[1]
            this.fileData = {
                'filename': file.name,
                'base64': base64,
                'recordId': this.recordId
            }
            console.log(this.fileData)
        }
        reader.readAsDataURL(file)
    }
    handleClick(){
        const {base64, filename, recordId} = this.fileData
        uploadFile({ base64, filename, recordId }).then(result=>{
            this.fileData = null
            let title = `${filename} uploaded successfully!!`
            this.toast(title)
        })
    }

}