import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cljs")
export default class CljController {
  @operation({
    summary: "Get Cljs",
  })
  @get()
  static getCljs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clj",
  })
  @post("{id}")
  static createClj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
