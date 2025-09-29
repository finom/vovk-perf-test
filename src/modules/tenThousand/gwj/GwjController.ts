import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwjs")
export default class GwjController {
  @operation({
    summary: "Get Gwjs",
  })
  @get()
  static getGwjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwj",
  })
  @post("{id}")
  static createGwj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
