import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbv")
export default class NbvController {
  @operation({
    summary: "Get Nbv",
  })
  @get()
  static getNbv = procedure({
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
