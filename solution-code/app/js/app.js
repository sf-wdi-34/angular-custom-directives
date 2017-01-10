angular
  .module('CardsAgainstAssembly', [])
  .controller('CardsController', CardsController)
  .controller('PlayersController', PlayersController)
  .directive('wdiCard', CardDirective)
  .directive('wdiScoreboard', ScoresDirective);

function CardsController() {
  console.log("blarg");
  var vm = this;
  vm.questions = [
    {question: "What is Batman's guilty pleasure?"},
    {question: "I'm sorry professor, I couldn't complete my homework because _________."},
    {question: "I get by with a little help from _________."},
    {question: "_________. It's a trap!"},
    {question: "The class field trip was completely ruined by _________."},
    {question: "What's my secret power?"}
  ];
}

function CardDirective() {
  var directive = {
    controllerAs: 'vm',
    controller: CardsController,
    //'A' == attribute, 'E' == element, 'C' == class, 'M' == comment
    restrict : 'E',
    replace : true,
    templateUrl :  "./templates/_cardView.html",
    scope : {
        question: '@'
    }
  };
  return directive;
}


function PlayersController(){
  var vm = this;
  vm.players = [
    {name: 'Gilligan', points: 2},
    {name: 'Mary Ann', points: 16},
    {name: 'Ginger', points: 12},
    {name: 'Thurson', points: 6},
    {name: 'Skipper', points: 9},
    {name: 'The Professor', points: 21}
  ];
}


function ScoresDirective(){
  var directive = {
    //'A' == attribute, 'E' == element, 'C' == class, 'M' == comment
    restrict : 'E',
    replace : true,
    scope: {
      playerList: '='
    },
    templateUrl :  "./templates/_scoresView.html"
  };
  return directive;
}
