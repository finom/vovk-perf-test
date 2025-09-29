import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqws")
export default class AqwController {
  @operation({
    summary: "Get Aqws",
  })
  @get()
  static getAqws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqw",
  })
  @post("{id}")
  static createAqw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
