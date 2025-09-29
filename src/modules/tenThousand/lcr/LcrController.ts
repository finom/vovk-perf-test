import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcrs")
export default class LcrController {
  @operation({
    summary: "Get Lcrs",
  })
  @get()
  static getLcrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcr",
  })
  @post("{id}")
  static createLcr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
