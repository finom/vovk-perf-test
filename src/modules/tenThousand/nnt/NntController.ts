import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnts")
export default class NntController {
  @operation({
    summary: "Get Nnts",
  })
  @get()
  static getNnts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnt",
  })
  @post("{id}")
  static createNnt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
