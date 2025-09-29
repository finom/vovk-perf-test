import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyns")
export default class HynController {
  @operation({
    summary: "Get Hyns",
  })
  @get()
  static getHyns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyn",
  })
  @post("{id}")
  static createHyn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
