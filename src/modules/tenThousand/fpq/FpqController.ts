import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpqs")
export default class FpqController {
  @operation({
    summary: "Get Fpqs",
  })
  @get()
  static getFpqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpq",
  })
  @post("{id}")
  static createFpq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
