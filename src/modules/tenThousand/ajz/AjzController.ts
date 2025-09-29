import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajzs")
export default class AjzController {
  @operation({
    summary: "Get Ajzs",
  })
  @get()
  static getAjzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajz",
  })
  @post("{id}")
  static createAjz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
