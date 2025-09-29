import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kprs")
export default class KprController {
  @operation({
    summary: "Get Kprs",
  })
  @get()
  static getKprs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpr",
  })
  @post("{id}")
  static createKpr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
