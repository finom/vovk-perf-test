import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbq")
export default class NbqController {
  @operation({
    summary: "Get Nbq",
  })
  @get()
  static getNbq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbq",
  })
  @post("{id}")
  static createNbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
