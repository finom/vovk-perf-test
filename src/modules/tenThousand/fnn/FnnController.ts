import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnns")
export default class FnnController {
  @operation({
    summary: "Get Fnns",
  })
  @get()
  static getFnns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnn",
  })
  @post("{id}")
  static createFnn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
