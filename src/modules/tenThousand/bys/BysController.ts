import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bys")
export default class BysController {
  @operation({
    summary: "Get Bys",
  })
  @get()
  static getBys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bys",
  })
  @post("{id}")
  static createBys = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
