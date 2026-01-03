import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrcs")
export default class NrcController {
  @operation({
    summary: "Get Nrcs",
  })
  @get()
  static getNrcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrc",
  })
  @post("{id}")
  static createNrc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
