import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajws")
export default class AjwController {
  @operation({
    summary: "Get Ajws",
  })
  @get()
  static getAjws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajw",
  })
  @post("{id}")
  static createAjw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
