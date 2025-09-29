import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxxes")
export default class FxxController {
  @operation({
    summary: "Get Fxxes",
  })
  @get()
  static getFxxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxx",
  })
  @post("{id}")
  static createFxx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
