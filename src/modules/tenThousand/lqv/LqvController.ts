import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqvs")
export default class LqvController {
  @operation({
    summary: "Get Lqvs",
  })
  @get()
  static getLqvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqv",
  })
  @post("{id}")
  static createLqv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
