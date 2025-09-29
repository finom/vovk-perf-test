import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bens")
export default class BenController {
  @operation({
    summary: "Get Bens",
  })
  @get()
  static getBens = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ben",
  })
  @post("{id}")
  static createBen = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
