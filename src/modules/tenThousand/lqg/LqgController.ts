import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqgs")
export default class LqgController {
  @operation({
    summary: "Get Lqgs",
  })
  @get()
  static getLqgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqg",
  })
  @post("{id}")
  static createLqg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
