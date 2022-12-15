import './RedesSociais.css'

const RedesSociais = () => {

    const listaRedes = [
        {id: 1, nomeRede: 'Instagram', url: 'http://instagram.com/pedropaulodfr'},
        {id: 2, nomeRede: 'GitHub', url: 'http://github.com/pedropaulodfr'},
        {id: 3, nomeRede: 'Linkedin', url: 'http://linkedin.com/in/pedropaulodfr'}
    ]

    const linksRedes = listaRedes.map((props) => 
        <div key={props.id} className='conteudos_links'>
            <a href={props.url}>{props.nomeRede}</a>
        </div>
    )

    return (
        
        <>
            {linksRedes}
        </>

    )

}

export default RedesSociais