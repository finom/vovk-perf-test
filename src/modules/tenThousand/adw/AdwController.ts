import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adws")
export default class AdwController {
  @operation({
    summary: "Get Adws",
  })
  @get()
  static getAdws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adw",
  })
  @post("{id}")
  static createAdw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
