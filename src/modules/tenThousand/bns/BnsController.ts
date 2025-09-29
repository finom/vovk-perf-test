import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bns")
export default class BnsController {
  @operation({
    summary: "Get Bns",
  })
  @get()
  static getBns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bns",
  })
  @post("{id}")
  static createBns = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
