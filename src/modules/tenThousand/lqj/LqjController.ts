import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqjs")
export default class LqjController {
  @operation({
    summary: "Get Lqjs",
  })
  @get()
  static getLqjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqj",
  })
  @post("{id}")
  static createLqj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
