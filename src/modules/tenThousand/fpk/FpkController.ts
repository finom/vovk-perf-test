import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpks")
export default class FpkController {
  @operation({
    summary: "Get Fpks",
  })
  @get()
  static getFpks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpk",
  })
  @post("{id}")
  static createFpk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
