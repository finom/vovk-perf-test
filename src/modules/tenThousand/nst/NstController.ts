import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsts")
export default class NstController {
  @operation({
    summary: "Get Nsts",
  })
  @get()
  static getNsts = procedure({
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
