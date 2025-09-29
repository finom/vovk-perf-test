import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjjs")
export default class KjjController {
  @operation({
    summary: "Get Kjjs",
  })
  @get()
  static getKjjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjj",
  })
  @post("{id}")
  static createKjj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
