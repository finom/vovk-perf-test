import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bjts")
export default class BjtController {
  @operation({
    summary: "Get Bjts",
  })
  @get()
  static getBjts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bjt",
  })
  @post("{id}")
  static createBjt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
