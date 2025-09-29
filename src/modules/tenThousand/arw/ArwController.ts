import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arws")
export default class ArwController {
  @operation({
    summary: "Get Arws",
  })
  @get()
  static getArws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Arw",
  })
  @post("{id}")
  static createArw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
