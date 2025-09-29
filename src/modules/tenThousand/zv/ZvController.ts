import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zvs")
export default class ZvController {
  @operation({
    summary: "Get Zvs",
  })
  @get()
  static getZvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zv",
  })
  @post("{id}")
  static createZv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
