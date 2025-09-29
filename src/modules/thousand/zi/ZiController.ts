import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zis")
export default class ZiController {
  @operation({
    summary: "Get Zis",
  })
  @get()
  static getZis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zi",
  })
  @post("{id}")
  static createZi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
