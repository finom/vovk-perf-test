import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajqs")
export default class AjqController {
  @operation({
    summary: "Get Ajqs",
  })
  @get()
  static getAjqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajq",
  })
  @post("{id}")
  static createAjq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
