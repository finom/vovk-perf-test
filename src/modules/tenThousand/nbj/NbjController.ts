import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbj")
export default class NbjController {
  @operation({
    summary: "Get Nbj",
  })
  @get()
  static getNbj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbj",
  })
  @post("{id}")
  static createNbj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
