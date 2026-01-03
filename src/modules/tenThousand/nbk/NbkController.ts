import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbks")
export default class NbkController {
  @operation({
    summary: "Get Nbks",
  })
  @get()
  static getNbks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbk",
  })
  @post("{id}")
  static createNbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
