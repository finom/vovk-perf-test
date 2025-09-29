import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmhs")
export default class FmhController {
  @operation({
    summary: "Get Fmhs",
  })
  @get()
  static getFmhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmh",
  })
  @post("{id}")
  static createFmh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
