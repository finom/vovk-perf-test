import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqws")
export default class LqwController {
  @operation({
    summary: "Get Lqws",
  })
  @get()
  static getLqws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqw",
  })
  @post("{id}")
  static createLqw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
