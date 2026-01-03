import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cexes")
export default class CexController {
  @operation({
    summary: "Get Cexes",
  })
  @get()
  static getCexes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cex",
  })
  @post("{id}")
  static createCex = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
