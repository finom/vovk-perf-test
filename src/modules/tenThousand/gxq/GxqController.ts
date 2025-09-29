import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxqs")
export default class GxqController {
  @operation({
    summary: "Get Gxqs",
  })
  @get()
  static getGxqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxq",
  })
  @post("{id}")
  static createGxq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
