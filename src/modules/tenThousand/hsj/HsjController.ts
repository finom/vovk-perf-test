import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsjs")
export default class HsjController {
  @operation({
    summary: "Get Hsjs",
  })
  @get()
  static getHsjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsj",
  })
  @post("{id}")
  static createHsj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
