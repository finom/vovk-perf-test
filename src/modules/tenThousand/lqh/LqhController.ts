import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqhs")
export default class LqhController {
  @operation({
    summary: "Get Lqhs",
  })
  @get()
  static getLqhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqh",
  })
  @post("{id}")
  static createLqh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
