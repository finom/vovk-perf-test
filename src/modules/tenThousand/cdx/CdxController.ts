import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdxes")
export default class CdxController {
  @operation({
    summary: "Get Cdxes",
  })
  @get()
  static getCdxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdx",
  })
  @post("{id}")
  static createCdx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
