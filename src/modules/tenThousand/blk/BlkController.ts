import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blks")
export default class BlkController {
  @operation({
    summary: "Get Blks",
  })
  @get()
  static getBlks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blk",
  })
  @post("{id}")
  static createBlk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
