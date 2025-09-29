import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lhzs")
export default class LhzController {
  @operation({
    summary: "Get Lhzs",
  })
  @get()
  static getLhzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lhz",
  })
  @post("{id}")
  static createLhz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
