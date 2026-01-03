import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbzs")
export default class NbzController {
  @operation({
    summary: "Get Nbzs",
  })
  @get()
  static getNbzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbz",
  })
  @post("{id}")
  static createNbz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
