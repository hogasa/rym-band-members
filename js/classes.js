// band
class BandTimeline{
  constructor(band) {
    this.band = band;
    this.timeline = new vis.Timeline();
  }

  makeTimeline() {
    
  }

  makeMember() {
      var groups = new vis.DataSet([
    {id: 1, content: 'Truck&nbsp;1'},
    {id: 2, content: 'Truck&nbsp;2'},
    {id: 3, content: 'Truck&nbsp;3'},
    {id: 4, content: 'Truck&nbsp;4'},
    {id: 5, content: 'Truck&nbsp;5'},
    {id: 6, content: 'Truck&nbsp;6'},
    {id: 7, content: 'Truck&nbsp;7'},
    {id: 8, content: 'Truck&nbsp;8'},
    {id: 9, content: 'Truck&nbsp;9'},
    {id: 10, content: 'Truck&nbsp;10'},
    {id: 11, content: 'Truck&nbsp;11'},
    {id: 12, content: 'Truck&nbsp;12'},
    {id: 13, content: 'Truck&nbsp;13'},
    {id: 14, content: 'Truck&nbsp;14'},
    {id: 15, content: 'Truck&nbsp;15'},
    {id: 16, content: 'Truck&nbsp;16'},
    {id: 17, content: 'Truck&nbsp;17'},
    {id: 18, content: 'Truck&nbsp;18'},
    {id: 19, content: 'Truck&nbsp;19'},
    {id: 20, content: 'Truck&nbsp;20'},
    {id: 21, content: 'Truck&nbsp;21'},
    {id: 22, content: 'Truck&nbsp;22'},
    {id: 23, content: 'Truck&nbsp;23'},
    {id: 24, content: 'Truck&nbsp;24'},
    {id: 25, content: 'Truck&nbsp;25'},

  ]);
  }

}

class Band {
  constructor(name='', formed='', disbanded='', members=[]) {
    this.name = name;
    this.formed = formed;
    this.disbanded = disbanded;
    this.members = members;
  }
}

class Member {
  constructor(name='', instruments=[], date=[]) {
    this.name = name;
    this.instruments = instruments;
    this.date = date;
  }
}