import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbvs")
export default class NbvController {
  @operation({
    summary: "Get Nbvs",
  })
  @get()
  static getNbvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbv",
  })
  @post("{id}")
  static createNbv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
