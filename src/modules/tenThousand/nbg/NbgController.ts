import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbgs")
export default class NbgController {
  @operation({
    summary: "Get Nbgs",
  })
  @get()
  static getNbgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbg",
  })
  @post("{id}")
  static createNbg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
