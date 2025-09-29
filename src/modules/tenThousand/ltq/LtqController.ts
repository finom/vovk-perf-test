import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltqs")
export default class LtqController {
  @operation({
    summary: "Get Ltqs",
  })
  @get()
  static getLtqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltq",
  })
  @post("{id}")
  static createLtq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
