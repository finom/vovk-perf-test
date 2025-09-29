import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amhs")
export default class AmhController {
  @operation({
    summary: "Get Amhs",
  })
  @get()
  static getAmhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amh",
  })
  @post("{id}")
  static createAmh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
