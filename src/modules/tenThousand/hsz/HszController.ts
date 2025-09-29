import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hszs")
export default class HszController {
  @operation({
    summary: "Get Hszs",
  })
  @get()
  static getHszs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsz",
  })
  @post("{id}")
  static createHsz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
