import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yqs")
export default class YqController {
  @operation({
    summary: "Get Yqs",
  })
  @get()
  static getYqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yq",
  })
  @post("{id}")
  static createYq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
