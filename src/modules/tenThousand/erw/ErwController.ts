import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("erws")
export default class ErwController {
  @operation({
    summary: "Get Erws",
  })
  @get()
  static getErws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Erw",
  })
  @post("{id}")
  static createErw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
