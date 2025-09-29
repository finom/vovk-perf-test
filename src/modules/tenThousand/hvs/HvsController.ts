import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvs")
export default class HvsController {
  @operation({
    summary: "Get Hvs",
  })
  @get()
  static getHvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvs",
  })
  @post("{id}")
  static createHvs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
