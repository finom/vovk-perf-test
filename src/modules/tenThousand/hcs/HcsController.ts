import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hcs")
export default class HcsController {
  @operation({
    summary: "Get Hcs",
  })
  @get()
  static getHcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hcs",
  })
  @post("{id}")
  static createHcs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
