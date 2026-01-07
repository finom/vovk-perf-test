import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nst")
export default class NstController {
  @operation({
    summary: "Get Nst",
  })
  @get()
  static getNst = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nst",
  })
  @post("{id}")
  static createNst = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
