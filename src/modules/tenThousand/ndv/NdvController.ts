import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndv")
export default class NdvController {
  @operation({
    summary: "Get Ndv",
  })
  @get()
  static getNdv = procedure({
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
