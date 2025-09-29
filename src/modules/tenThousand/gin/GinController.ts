import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gins")
export default class GinController {
  @operation({
    summary: "Get Gins",
  })
  @get()
  static getGins = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gin",
  })
  @post("{id}")
  static createGin = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
