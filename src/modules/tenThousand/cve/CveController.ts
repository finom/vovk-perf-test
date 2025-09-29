import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cves")
export default class CveController {
  @operation({
    summary: "Get Cves",
  })
  @get()
  static getCves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cve",
  })
  @post("{id}")
  static createCve = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
