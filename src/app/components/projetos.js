import { projetos } from "../data/db_sand";

export default function Projetos() {
    const divProjeto = projetos.map(projeto =>
        <div key={projeto.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-52 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-52">
                <img src={projeto.fotoEquipeUrl} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className="mt-4">
                <h3 className="text-sm text-white text-center">
                    <a href="#">
                        {projeto.nomeEquipe}
                    </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500 text-center">{projeto.turma}</p>
            </div>
        </div>
    );

    return divProjeto;
}