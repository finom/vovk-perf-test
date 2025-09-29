import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqws")
export default class CqwController {
  @operation({
    summary: "Get Cqws",
  })
  @get()
  static getCqws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqw",
  })
  @post("{id}")
  static createCqw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
