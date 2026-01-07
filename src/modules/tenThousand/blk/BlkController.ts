import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blk")
export default class BlkController {
  @operation({
    summary: "Get Blk",
  })
  @get()
  static getBlk = procedure({
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
