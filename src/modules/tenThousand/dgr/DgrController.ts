import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgrs")
export default class DgrController {
  @operation({
    summary: "Get Dgrs",
  })
  @get()
  static getDgrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgr",
  })
  @post("{id}")
  static createDgr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
