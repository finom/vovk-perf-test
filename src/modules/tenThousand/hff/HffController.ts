import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hffs")
export default class HffController {
  @operation({
    summary: "Get Hffs",
  })
  @get()
  static getHffs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hff",
  })
  @post("{id}")
  static createHff = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
