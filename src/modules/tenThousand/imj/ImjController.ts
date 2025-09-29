import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imjs")
export default class ImjController {
  @operation({
    summary: "Get Imjs",
  })
  @get()
  static getImjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imj",
  })
  @post("{id}")
  static createImj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
