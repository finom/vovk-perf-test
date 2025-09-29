import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbes")
export default class FbeController {
  @operation({
    summary: "Get Fbes",
  })
  @get()
  static getFbes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbe",
  })
  @post("{id}")
  static createFbe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
