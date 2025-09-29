import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enhs")
export default class EnhController {
  @operation({
    summary: "Get Enhs",
  })
  @get()
  static getEnhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Enh",
  })
  @post("{id}")
  static createEnh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
