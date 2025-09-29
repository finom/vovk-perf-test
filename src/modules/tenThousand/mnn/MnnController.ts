import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnns")
export default class MnnController {
  @operation({
    summary: "Get Mnns",
  })
  @get()
  static getMnns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnn",
  })
  @post("{id}")
  static createMnn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
