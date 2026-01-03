import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cavs")
export default class CavController {
  @operation({
    summary: "Get Cavs",
  })
  @get()
  static getCavs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cav",
  })
  @post("{id}")
  static createCav = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
