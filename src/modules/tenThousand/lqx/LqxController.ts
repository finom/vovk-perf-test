import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqxes")
export default class LqxController {
  @operation({
    summary: "Get Lqxes",
  })
  @get()
  static getLqxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqx",
  })
  @post("{id}")
  static createLqx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
