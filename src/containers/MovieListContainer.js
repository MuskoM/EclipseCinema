import React, {Component} from 'react';

class MovieList extends Component{
    constructor(){
        super();
        this.state = {
            edit: false,
            nrToEdit: -1,
            edited: null,
        }
    }

    finishEdit(e){
        {console.log("SUBMITTED")}
        this.setState({
            edit:false,
            nrToEdit:-1,
        });
        this.props.updateMovie(this.state.edited,this.state.nrToEdit);
    }

    editMovie(id,e){
        this.setState({
            edit:true,
            nrToEdit:id,
            edited:this.props.movies[id]
        });
    }

    changeVal(fieldKey,e){
        let newVal=e.currentTarget.value;
        let mov = Object.assign({},
            this.state.edited);
        console.log("PFFT" + mov);
        if(fieldKey == 2){
            mov.year = parseInt(newVal,10);
        }else{
            let i=0;
            for(let propName in mov){
                if(i==fieldKey) mov[propName]=newVal;
                i++;
            }
        }
        this.setState({
            edited:mov
        });
    }

    render(){
        console.log(this.props)
        if(this.props.movies.length > 0){

            return(
                <ul>
                    {this.props.movies.map((movie,index)=>{
                        if(index!==this.state.nrToEdit)
                            return <li onClick={this.editMovie.bind(this,index)} key={movie.title}>
                                {"Title: "+ movie.title + ", Author: " + movie.author + ", Year: " + movie.year}
                            </li>
                        else return <li key={movie.title}>  
                                <form onSubmit={this.finishEdit.bind(this,this.state.edited)}>
                                    {Object.values(movie).map((field,fieldKey)=>{
                                        return <input key={fieldKey} defaultValue={field}
                                        onChange={this.changeVal.bind(this,fieldKey)}/>
                                    },this)}
                                    <input type="submit" value="Update"/>
                                </form>
                            </li>
                    })}
                </ul>
            );

        }
        
        return ( <p>No Results!!</p>)
        
    }

}

export default MovieList;