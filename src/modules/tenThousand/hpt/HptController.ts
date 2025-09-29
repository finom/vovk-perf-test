import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpts")
export default class HptController {
  @operation({
    summary: "Get Hpts",
  })
  @get()
  static getHpts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpt",
  })
  @post("{id}")
  static createHpt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
