import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msts")
export default class MstController {
  @operation({
    summary: "Get Msts",
  })
  @get()
  static getMsts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mst",
  })
  @post("{id}")
  static createMst = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
