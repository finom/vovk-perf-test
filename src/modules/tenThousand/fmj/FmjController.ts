import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmjs")
export default class FmjController {
  @operation({
    summary: "Get Fmjs",
  })
  @get()
  static getFmjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmj",
  })
  @post("{id}")
  static createFmj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
