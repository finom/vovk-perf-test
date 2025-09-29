import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kaws")
export default class KawController {
  @operation({
    summary: "Get Kaws",
  })
  @get()
  static getKaws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kaw",
  })
  @post("{id}")
  static createKaw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
