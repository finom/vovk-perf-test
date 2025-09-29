import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzs")
export default class MzController {
  @operation({
    summary: "Get Mzs",
  })
  @get()
  static getMzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mz",
  })
  @post("{id}")
  static createMz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
