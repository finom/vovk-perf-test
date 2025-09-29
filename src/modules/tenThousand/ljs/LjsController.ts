import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljs")
export default class LjsController {
  @operation({
    summary: "Get Ljs",
  })
  @get()
  static getLjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljs",
  })
  @post("{id}")
  static createLjs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
