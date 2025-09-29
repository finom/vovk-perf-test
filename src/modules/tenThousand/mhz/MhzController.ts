import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhzs")
export default class MhzController {
  @operation({
    summary: "Get Mhzs",
  })
  @get()
  static getMhzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhz",
  })
  @post("{id}")
  static createMhz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
