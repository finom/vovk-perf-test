import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldus")
export default class LduController {
  @operation({
    summary: "Get Ldus",
  })
  @get()
  static getLdus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ldu",
  })
  @post("{id}")
  static createLdu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
