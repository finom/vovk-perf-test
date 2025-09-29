import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebws")
export default class EbwController {
  @operation({
    summary: "Get Ebws",
  })
  @get()
  static getEbws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebw",
  })
  @post("{id}")
  static createEbw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
