import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afrs")
export default class AfrController {
  @operation({
    summary: "Get Afrs",
  })
  @get()
  static getAfrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afr",
  })
  @post("{id}")
  static createAfr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
