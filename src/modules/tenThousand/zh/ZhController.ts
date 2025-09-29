import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zhs")
export default class ZhController {
  @operation({
    summary: "Get Zhs",
  })
  @get()
  static getZhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zh",
  })
  @post("{id}")
  static createZh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
