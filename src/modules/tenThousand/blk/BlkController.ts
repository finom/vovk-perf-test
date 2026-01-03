import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blks")
export default class BlkController {
  @operation({
    summary: "Get Blks",
  })
  @get()
  static getBlks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blk",
  })
  @post("{id}")
  static createBlk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
