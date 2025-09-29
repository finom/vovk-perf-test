import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frqs")
export default class FrqController {
  @operation({
    summary: "Get Frqs",
  })
  @get()
  static getFrqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frq",
  })
  @post("{id}")
  static createFrq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
