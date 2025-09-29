import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajxes")
export default class AjxController {
  @operation({
    summary: "Get Ajxes",
  })
  @get()
  static getAjxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajx",
  })
  @post("{id}")
  static createAjx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
