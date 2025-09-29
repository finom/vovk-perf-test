import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmts")
export default class DmtController {
  @operation({
    summary: "Get Dmts",
  })
  @get()
  static getDmts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmt",
  })
  @post("{id}")
  static createDmt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
