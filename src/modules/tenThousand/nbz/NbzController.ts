import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbz")
export default class NbzController {
  @operation({
    summary: "Get Nbz",
  })
  @get()
  static getNbz = procedure({
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
