import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnns")
export default class BnnController {
  @operation({
    summary: "Get Bnns",
  })
  @get()
  static getBnns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnn",
  })
  @post("{id}")
  static createBnn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
