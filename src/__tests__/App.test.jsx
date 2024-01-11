import App from "../App.js"
import { render, screen , fireEvent,waitFor} from "@testing-library/react";
import CommentArea from "../components/CommentArea.jsx";


describe('Test render App', () => {
    it('Montaggio Nav corretto', () => {
        render(<App />)
        const heading = screen.getByText(/Epibooks/i)
        expect(heading).toBeInTheDocument()
    })

    it('Controllo Cards',()=>{
        render(<App />)
        const listafilm= screen.getAllByTestId("cardgroup-item")
        expect(listafilm).toHaveLength(150)
    })
    it('Comment Area esiste?',()=>{
        render(<CommentArea/>)
        const listafilm= screen.getByTestId("comment-area")
         expect(listafilm).toBeInTheDocument()
     })

    it('Test Searchbar',()=>{
        render(<App/>)
         const searchbar=screen.getByPlaceholderText("Search here")
         fireEvent.change(searchbar,{target:{value:'the witcher'}})
         
         const listafilm= screen.getAllByTestId("cardgroup-item")
         expect(listafilm.length).toBeLessThan(10);
     })
     it('Test commento singolo',()=>{
        render(<App/>)
        const listacommenti=screen.queryByTestId("comment-item")
        expect(listacommenti).not.toBeInTheDocument()
     })
     it('Commenti funzionanti al click?', async ()=>{
        render(<App/>)
        const listafilm= screen.getAllByTestId("cardgroup-item")
        const primofilm=listafilm[0]
        fireEvent.click(primofilm)
        await waitFor(() => {
            const commentosingolo = screen.getAllByTestId("single-comment");
            expect(commentosingolo).toBeGreaterThan(0)
          });
     })
    

})

