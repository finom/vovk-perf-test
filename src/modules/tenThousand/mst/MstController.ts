import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msts")
export default class MstController {
  @operation({
    summary: "Get Msts",
  })
  @get()
  static getMsts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mst",
  })
  @post("{id}")
  static createMst = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
