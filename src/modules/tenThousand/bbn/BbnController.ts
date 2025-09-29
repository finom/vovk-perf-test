import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbns")
export default class BbnController {
  @operation({
    summary: "Get Bbns",
  })
  @get()
  static getBbns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbn",
  })
  @post("{id}")
  static createBbn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
