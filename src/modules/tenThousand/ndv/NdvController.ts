import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndvs")
export default class NdvController {
  @operation({
    summary: "Get Ndvs",
  })
  @get()
  static getNdvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndv",
  })
  @post("{id}")
  static createNdv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
