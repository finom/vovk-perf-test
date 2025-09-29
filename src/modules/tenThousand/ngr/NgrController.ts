import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngrs")
export default class NgrController {
  @operation({
    summary: "Get Ngrs",
  })
  @get()
  static getNgrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngr",
  })
  @post("{id}")
  static createNgr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
