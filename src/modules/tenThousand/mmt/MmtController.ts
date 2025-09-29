import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmts")
export default class MmtController {
  @operation({
    summary: "Get Mmts",
  })
  @get()
  static getMmts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmt",
  })
  @post("{id}")
  static createMmt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
