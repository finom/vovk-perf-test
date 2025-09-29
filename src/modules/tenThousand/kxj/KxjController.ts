import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxjs")
export default class KxjController {
  @operation({
    summary: "Get Kxjs",
  })
  @get()
  static getKxjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxj",
  })
  @post("{id}")
  static createKxj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
