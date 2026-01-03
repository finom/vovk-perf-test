import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nffs")
export default class NffController {
  @operation({
    summary: "Get Nffs",
  })
  @get()
  static getNffs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nff",
  })
  @post("{id}")
  static createNff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
