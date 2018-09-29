import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboreaComponent } from "./aborea/aborea.component";
import { DnDComponent } from "./dn-d/dn-d.component";
import { DsaComponent } from "./dsa/dsa.component";


const routes: Routes = [
  { path: "", redirectTo: "/DnD", pathMatch: "full" },
  { path: "DnD", component: DnDComponent },
  { path: "Aborea", component: AboreaComponent },
  { path: "DSA", component: DsaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
