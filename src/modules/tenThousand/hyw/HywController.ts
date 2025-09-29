import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyws")
export default class HywController {
  @operation({
    summary: "Get Hyws",
  })
  @get()
  static getHyws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyw",
  })
  @post("{id}")
  static createHyw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
