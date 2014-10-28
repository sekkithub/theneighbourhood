function ArtistsCtrl($scope) {
    $scope.getContent = function(artist){
        return '<div class="' + artist.effect + '" >' + artist.name + '</div>'
    }
    $scope.artists = [
        { 
          effect: 'effect01',
          name: 'ADRIAN SHAUGHNESSY'
        },
        { 
          effect: 'effect02',
          name: 'TONY BROOK'
        },
        {
          effect: 'effect03',
          name: 'MICHAEL C PLACE'
        },
        { name: 'HELEN STOREY (MBE)' },
        { name: 'DR.ME • ROSS PHILLIPS' },
        { name: 'BRENDAN DAWES' },
        { name: 'MALCOLM GARRETT' },
        { name: 'PETER SAVILLE • SI SCOTT' },
        { name: 'INSTRUCT STUDIO' },
        { name: 'MICAH PURNELL' },
        { name: 'REJANE DAL BELLO' },
        { name: 'STANLEY CHOW' }
    ];
}