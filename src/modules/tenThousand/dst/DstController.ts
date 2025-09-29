import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsts")
export default class DstController {
  @operation({
    summary: "Get Dsts",
  })
  @get()
  static getDsts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dst",
  })
  @post("{id}")
  static createDst = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
