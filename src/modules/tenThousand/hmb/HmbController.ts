import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmbs")
export default class HmbController {
  @operation({
    summary: "Get Hmbs",
  })
  @get()
  static getHmbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmb",
  })
  @post("{id}")
  static createHmb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
