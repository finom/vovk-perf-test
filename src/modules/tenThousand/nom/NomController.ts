import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nom")
export default class NomController {
  @operation({
    summary: "Get Nom",
  })
  @get()
  static getNom = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nom",
  })
  @post("{id}")
  static createNom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
