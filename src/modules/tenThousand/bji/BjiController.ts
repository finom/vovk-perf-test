import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjis")
export default class BjiController {
  @operation({
    summary: "Get Bjis",
  })
  @get()
  static getBjis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bji",
  })
  @post("{id}")
  static createBji = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
