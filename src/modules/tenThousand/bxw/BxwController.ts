import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxws")
export default class BxwController {
  @operation({
    summary: "Get Bxws",
  })
  @get()
  static getBxws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxw",
  })
  @post("{id}")
  static createBxw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
