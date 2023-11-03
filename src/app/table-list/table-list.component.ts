import { Component, OnInit } from '@angular/core';
import { Contributor } from 'app/models/contributor';
import { Task } from 'app/models/task';
import { ContributorsService } from 'app/services/contributors/contributors.service';
import { TasksService } from 'app/services/tasks/tasks.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})

// Komponenta TableListComponent je deo koda koji cemo na vezbama menjati
export class TableListComponent implements OnInit {

  // Nizovi koji ce se koristiti za prikazivanje podataka. Moraju biti tipizirani kako bismo na jednostavan nacin pristupali njihovim obelezjima
  tasks: Task[] = [];
  contributors: Contributor[] = [];

  // Kroz konstruktor uvek zelimo da injektujemo sve potrebne servise, koje kasnije mozemo slobodno koristiti u kodu.
  constructor(private taskService: TasksService,
              private contributorsService: ContributorsService) { }

  // Kod u metodi ngOnInit ima potencijal da poprilicno naraste. Kreirana je novu metoda startSubscription koja se poziva iz nje
  ngOnInit() {
    this.startSubscription();
  }

  // Prilikom ucitavanja stranice, pozivaju se metode iz prethodno kreiranih servisa. Neophodno je za ekstraktovanje njihovog rezultata (tj. response)
  // pozvati metodu subscribe kojom ce se objekat res (tj. prakticno body odgovora) dodeliti odgovarajucem nizu.
  startSubscription() {
    this.taskService.getTasks().subscribe(res => {
      this.tasks = res;
    });

    this.contributorsService.getContributors().subscribe(res => {
      this.contributors = res;
    });
  }
}
