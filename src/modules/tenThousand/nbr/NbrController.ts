import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbrs")
export default class NbrController {
  @operation({
    summary: "Get Nbrs",
  })
  @get()
  static getNbrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbr",
  })
  @post("{id}")
  static createNbr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
