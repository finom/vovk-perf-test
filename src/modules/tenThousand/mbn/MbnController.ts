import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbns")
export default class MbnController {
  @operation({
    summary: "Get Mbns",
  })
  @get()
  static getMbns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbn",
  })
  @post("{id}")
  static createMbn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
