import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmrs")
export default class FmrController {
  @operation({
    summary: "Get Fmrs",
  })
  @get()
  static getFmrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmr",
  })
  @post("{id}")
  static createFmr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
