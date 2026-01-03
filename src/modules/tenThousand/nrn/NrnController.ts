import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrns")
export default class NrnController {
  @operation({
    summary: "Get Nrns",
  })
  @get()
  static getNrns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrn",
  })
  @post("{id}")
  static createNrn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
