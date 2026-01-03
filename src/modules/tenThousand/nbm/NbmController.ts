import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbms")
export default class NbmController {
  @operation({
    summary: "Get Nbms",
  })
  @get()
  static getNbms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbm",
  })
  @post("{id}")
  static createNbm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
