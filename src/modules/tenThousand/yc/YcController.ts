import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ycs")
export default class YcController {
  @operation({
    summary: "Get Ycs",
  })
  @get()
  static getYcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yc",
  })
  @post("{id}")
  static createYc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
