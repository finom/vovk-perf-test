import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mths")
export default class MthController {
  @operation({
    summary: "Get Mths",
  })
  @get()
  static getMths = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mth",
  })
  @post("{id}")
  static createMth = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
