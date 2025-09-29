import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxis")
export default class KxiController {
  @operation({
    summary: "Get Kxis",
  })
  @get()
  static getKxis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxi",
  })
  @post("{id}")
  static createKxi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
