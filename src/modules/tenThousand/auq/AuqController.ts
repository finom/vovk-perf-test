import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("auqs")
export default class AuqController {
  @operation({
    summary: "Get Auqs",
  })
  @get()
  static getAuqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Auq",
  })
  @post("{id}")
  static createAuq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
