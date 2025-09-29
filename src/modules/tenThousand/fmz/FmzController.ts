import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmzs")
export default class FmzController {
  @operation({
    summary: "Get Fmzs",
  })
  @get()
  static getFmzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmz",
  })
  @post("{id}")
  static createFmz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
