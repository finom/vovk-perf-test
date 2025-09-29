import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqms")
export default class LqmController {
  @operation({
    summary: "Get Lqms",
  })
  @get()
  static getLqms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqm",
  })
  @post("{id}")
  static createLqm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
