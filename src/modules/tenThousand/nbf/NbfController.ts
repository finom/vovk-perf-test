import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbfs")
export default class NbfController {
  @operation({
    summary: "Get Nbfs",
  })
  @get()
  static getNbfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbf",
  })
  @post("{id}")
  static createNbf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
