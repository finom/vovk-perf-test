import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clts")
export default class CltController {
  @operation({
    summary: "Get Clts",
  })
  @get()
  static getClts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clt",
  })
  @post("{id}")
  static createClt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
