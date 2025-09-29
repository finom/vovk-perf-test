import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddws")
export default class DdwController {
  @operation({
    summary: "Get Ddws",
  })
  @get()
  static getDdws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddw",
  })
  @post("{id}")
  static createDdw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
