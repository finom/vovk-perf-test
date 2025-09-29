import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zds")
export default class ZdController {
  @operation({
    summary: "Get Zds",
  })
  @get()
  static getZds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zd",
  })
  @post("{id}")
  static createZd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
