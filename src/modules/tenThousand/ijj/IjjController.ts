import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijjs")
export default class IjjController {
  @operation({
    summary: "Get Ijjs",
  })
  @get()
  static getIjjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijj",
  })
  @post("{id}")
  static createIjj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
