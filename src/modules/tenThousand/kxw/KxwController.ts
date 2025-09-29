import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxws")
export default class KxwController {
  @operation({
    summary: "Get Kxws",
  })
  @get()
  static getKxws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxw",
  })
  @post("{id}")
  static createKxw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
