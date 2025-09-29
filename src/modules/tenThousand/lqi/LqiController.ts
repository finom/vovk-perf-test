import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqis")
export default class LqiController {
  @operation({
    summary: "Get Lqis",
  })
  @get()
  static getLqis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqi",
  })
  @post("{id}")
  static createLqi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
