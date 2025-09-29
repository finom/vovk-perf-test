import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqzs")
export default class LqzController {
  @operation({
    summary: "Get Lqzs",
  })
  @get()
  static getLqzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqz",
  })
  @post("{id}")
  static createLqz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
