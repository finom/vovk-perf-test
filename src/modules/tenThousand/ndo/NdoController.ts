import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndo")
export default class NdoController {
  @operation({
    summary: "Get Ndo",
  })
  @get()
  static getNdo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndo",
  })
  @post("{id}")
  static createNdo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
