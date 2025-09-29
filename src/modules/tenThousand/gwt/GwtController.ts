import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwts")
export default class GwtController {
  @operation({
    summary: "Get Gwts",
  })
  @get()
  static getGwts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwt",
  })
  @post("{id}")
  static createGwt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
