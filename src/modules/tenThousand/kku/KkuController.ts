import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkus")
export default class KkuController {
  @operation({
    summary: "Get Kkus",
  })
  @get()
  static getKkus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kku",
  })
  @post("{id}")
  static createKku = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
