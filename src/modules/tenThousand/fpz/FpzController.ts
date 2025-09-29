import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpzs")
export default class FpzController {
  @operation({
    summary: "Get Fpzs",
  })
  @get()
  static getFpzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpz",
  })
  @post("{id}")
  static createFpz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
