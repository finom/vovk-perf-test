import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hs")
export default class HController {
  @operation({
    summary: "Get HS",
  })
  @get()
  static getHS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create H",
  })
  @post("{id}")
  static createH = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
