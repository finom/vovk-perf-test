import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nom")
export default class NomController {
  @operation({
    summary: "Get Nom",
  })
  @get()
  static getNom = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nom",
  })
  @post("{id}")
  static createNom = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
