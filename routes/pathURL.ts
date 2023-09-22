
const user = {
  url : '/user',
  id: function(id: string){
    return `${this.url}/${id}`;
  }
}

export { user };
