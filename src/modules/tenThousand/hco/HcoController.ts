import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcos")
export default class HcoController {
  @operation({
    summary: "Get Hcos",
  })
  @get()
  static getHcos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hco",
  })
  @post("{id}")
  static createHco = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
