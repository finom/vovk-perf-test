import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbvs")
export default class HbvController {
  @operation({
    summary: "Get Hbvs",
  })
  @get()
  static getHbvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbv",
  })
  @post("{id}")
  static createHbv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
