import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wcs")
export default class WcController {
  @operation({
    summary: "Get Wcs",
  })
  @get()
  static getWcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wc",
  })
  @post("{id}")
  static createWc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
