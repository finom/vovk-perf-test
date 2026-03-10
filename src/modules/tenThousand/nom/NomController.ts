import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nom")
export default class NomController {
  @operation({
    summary: "Get Nom",
  })
  @get()
  static getNom = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nom",
  })
  @post("{id}")
  static createNom = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
