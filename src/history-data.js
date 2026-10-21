// Editorial chronology. No fabricated statistical series: quantitative charts are sourced explicitly.
export const SOURCE={
  mandates:{label:'Presidência da República — cronologia institucional',url:'https://www.gov.br/cti/pt-br/trajetoria-historica/presidentes-da-republica-desde-a-criacao-do-cti'},
  archives:{label:'Casa Civil — acervos dos mandatos encerrados',url:'https://www.gov.br/casacivil/pt-br/acesso-a-informacao/receitas-e-despesas/acervos-de-mandatos-presidenciais-encerrados'},
  ipca:{label:'IBGE/SIDRA — IPCA, tabela 1737',url:'https://sidra.ibge.gov.br/tabela/1737'},
  real:{label:'Banco Central — Plano Real',url:'https://www.bcb.gov.br/controleinflacao/planoreal'},
  legislation:{label:'Planalto — legislação federal',url:'https://www.planalto.gov.br/ccivil_03/'},
  tse:{label:'TSE — eleições e resultados',url:'https://www.tse.jus.br/eleicoes'},
  pib:{label:'IBGE — contas nacionais',url:'https://www.ibge.gov.br/estatisticas/economicas/contas-nacionais.html'},
  pnad:{label:'IBGE — PNAD Contínua',url:'https://www.ibge.gov.br/estatisticas/sociais/trabalho/17270-pnad-continua.html'},
  datasus:{label:'Ministério da Saúde — DATASUS',url:'https://datasus.saude.gov.br/'},
  inep:{label:'INEP — indicadores educacionais',url:'https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/indicadores-educacionais'}
};
export const GOVERNMENTS=[
{id:'collor',name:'Fernando Collor',party:'PRN',years:'1990–1992',start:1990,end:1992,period:'15 mar. 1990 — 29 dez. 1992',theme:'A abertura econômica e a instabilidade monetária',intro:'A agenda de abertura comercial e o combate à inflação ocorreram em meio a forte turbulência institucional.',events:[
['1990','Plano Collor','Medidas monetárias extraordinárias e mudanças nas regras econômicas afetaram poupança, preços e contratos.','legislation'],
['1990–1992','Abertura comercial','A redução de barreiras comerciais alterou o ambiente de concorrência e importações.','archives'],
['1992','Impeachment e sucessão','O processo de impeachment levou à saída de Collor e à continuidade constitucional do mandato por Itamar Franco.','mandates']]},
{id:'itamar',name:'Itamar Franco',party:'PMDB',years:'1992–1994',start:1992,end:1994,period:'29 dez. 1992 — 1 jan. 1995',theme:'O caminho até a estabilização',intro:'O governo conduziu a transição após o impeachment e a implementação do Plano Real.',events:[
['1993','Preparação fiscal','O Programa de Ação Imediata integrou as etapas de preparação da estabilização.','real'],
['1994','URV','A Unidade Real de Valor ajudou a organizar a transição monetária.','real'],
['Jul. 1994','Entrada em circulação do Real','A nova moeda começou a circular em 1º de julho.','real']]},
{id:'fhc-1',name:'Fernando Henrique Cardoso',party:'PSDB',years:'1995–1998',start:1995,end:1998,period:'1 jan. 1995 — 31 dez. 1998',theme:'Consolidar a estabilização',intro:'O primeiro mandato ocorreu durante a consolidação da nova moeda e mudanças regulatórias e econômicas.',events:[
['1995','Primeiros anos do Real','A manutenção da estabilidade de preços permaneceu no centro da política econômica.','real'],
['1995–1998','Reformas e privatizações','Mudanças na organização de setores de infraestrutura e na participação estatal avançaram no período.','archives'],
['1998','Eleição presidencial','Fernando Henrique foi reeleito; a sucessão de mandatos é apresentada separadamente para preservar os recortes.','tse']]},
{id:'fhc-2',name:'Fernando Henrique Cardoso',party:'PSDB',years:'1999–2002',start:1999,end:2002,period:'1 jan. 1999 — 31 dez. 2002',theme:'Um novo regime macroeconômico',intro:'O segundo mandato enfrentou mudança cambial, reorganização de instrumentos macroeconômicos e choques externos.',events:[
['1999','Mudança cambial','O regime de câmbio mudou após pressões sobre a economia brasileira.','archives'],
['1999','Metas de inflação','O sistema de metas de inflação passou a orientar a política monetária.','real'],
['2000','Lei de Responsabilidade Fiscal','A Lei Complementar 101 estabeleceu normas de finanças públicas voltadas à responsabilidade na gestão fiscal.','legislation']]},
{id:'lula-1',name:'Luiz Inácio Lula da Silva',party:'PT',years:'2003–2006',start:2003,end:2006,period:'1 jan. 2003 — 31 dez. 2006',theme:'Proteção social e continuidade econômica',intro:'O período combinou políticas sociais, manutenção de instrumentos macroeconômicos e expansão de programas federais.',events:[
['2003','Bolsa Família em formação','A integração de programas de transferência de renda se consolidou no início do mandato.','legislation'],
['2004','Bolsa Família em lei','A Lei 10.836 instituiu o Programa Bolsa Família.','legislation'],
['2006','Eleição presidencial','Lula foi reeleito para um segundo mandato.','tse']]},
{id:'lula-2',name:'Luiz Inácio Lula da Silva',party:'PT',years:'2007–2010',start:2007,end:2010,period:'1 jan. 2007 — 31 dez. 2010',theme:'Investimento, crédito e crise internacional',intro:'O segundo mandato incluiu programas de infraestrutura e respostas à crise financeira global.',events:[
['2007','Programa de Aceleração do Crescimento','O PAC reuniu iniciativas de infraestrutura e investimentos públicos e privados.','archives'],
['2008–2009','Crise financeira internacional','A crise global afetou comércio, crédito e atividade econômica, exigindo análise do contexto externo.','pib'],
['2009','Minha Casa, Minha Vida','O programa habitacional foi instituído no período.','legislation']]},
{id:'dilma-1',name:'Dilma Rousseff',party:'PT',years:'2011–2014',start:2011,end:2014,period:'1 jan. 2011 — 31 dez. 2014',theme:'Política econômica e mobilização social',intro:'O mandato reuniu mudanças na política econômica, investimentos e grandes manifestações públicas.',events:[
['2011','Início do mandato','Dilma tornou-se a primeira mulher a exercer a Presidência da República no Brasil.','mandates'],
['2013','Jornadas de Junho','Manifestações em diversas cidades mobilizaram debates sobre transporte, serviços públicos e representação.','archives'],
['2014','Nova eleição','Dilma foi reeleita para um segundo mandato.','tse']]},
{id:'dilma-2',name:'Dilma Rousseff',party:'PT',years:'2015–2016',start:2015,end:2016,period:'1 jan. 2015 — 31 ago. 2016',theme:'Recessão e crise política',intro:'A retração da atividade econômica e a crise institucional marcaram o mandato, encerrado por impeachment.',events:[
['2015','Recessão','A economia brasileira enfrentou forte retração; comparações exigem dados revisados do IBGE.','pib'],
['Mai. 2016','Afastamento','O Senado autorizou a abertura do processo e o afastamento temporário da presidente.','mandates'],
['Ago. 2016','Impeachment','O Senado concluiu o processo; Michel Temer assumiu a Presidência definitivamente.','mandates']]},
{id:'temer',name:'Michel Temer',party:'PMDB/MDB',years:'2016–2018',start:2016,end:2018,period:'31 ago. 2016 — 31 dez. 2018',theme:'Regras fiscais e reformas',intro:'O governo foi marcado por reformas institucionais e pela tentativa de reorganizar o cenário fiscal.',events:[
['2016','Emenda Constitucional 95','A emenda instituiu um regime de teto para despesas primárias federais.','legislation'],
['2017','Reforma trabalhista','A Lei 13.467 alterou dispositivos da legislação trabalhista.','legislation'],
['2018','Encerramento do mandato','A transição presidencial ocorreu após as eleições de 2018.','tse']]},
{id:'bolsonaro',name:'Jair Bolsonaro',party:'PSL/PL',years:'2019–2022',start:2019,end:2022,period:'1 jan. 2019 — 31 dez. 2022',theme:'Reformas, pandemia e emergência social',intro:'O período inclui reforma previdenciária, pandemia de covid-19 e medidas emergenciais de proteção de renda.',events:[
['2019','Reforma da Previdência','A Emenda Constitucional 103 modificou regras previdenciárias.','legislation'],
['2020','Pandemia de covid-19','A emergência sanitária trouxe efeitos sobre mortalidade, trabalho, renda e serviços de saúde.','datasus'],
['2020–2021','Auxílio Emergencial','Transferências temporárias de renda foram adotadas no contexto da pandemia.','legislation']]},
{id:'lula-3',name:'Luiz Inácio Lula da Silva',party:'PT',years:'2023–2026',start:2023,end:2026,period:'1 jan. 2023 — mandato em curso',theme:'Reconstrução de programas e novas regras fiscais',intro:'O mandato em curso inclui alterações em programas sociais, regras fiscais e políticas ambientais. Resultados precisam ser atualizados e contextualizados.',events:[
['2023','Novo arcabouço fiscal','A Lei Complementar 200 estabeleceu regras fiscais que substituíram o antigo teto de gastos.','legislation'],
['2023','Novo Bolsa Família','A Lei 14.601 instituiu o programa em seu novo desenho.','legislation'],
['2023–2026','Resultados ainda em evolução','Indicadores recentes são apresentados somente quando divulgados e acompanhados de fonte, período e revisões.','pib']]}
];
export const ERA_START=1990;export const ERA_END=2026;
export const IPCA_REAL=[{period:'Jun. 1994',value:47.43},{period:'Jul. 1994',value:6.84},{period:'Ago. 1994',value:1.86}];
export const SUBJECTS=[{id:'economia',name:'Economia e emprego',summary:'Preços, atividade, mercado de trabalho e renda',sources:['ipca','pib','pnad']},{id:'pobreza',name:'Pobreza e desigualdade',summary:'Transferências, renda e critérios de pobreza',sources:['pnad']},{id:'educacao',name:'Educação',summary:'Acesso, aprendizagem e investimento',sources:['inep']},{id:'saude',name:'Saúde',summary:'Acesso, indicadores sanitários e SUS',sources:['datasus']},{id:'instituicoes',name:'Instituições',summary:'Eleições, leis e mudanças institucionais',sources:['tse','legislation']}];
