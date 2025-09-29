import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gocs")
export default class GocController {
  @operation({
    summary: "Get Gocs",
  })
  @get()
  static getGocs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Goc",
  })
  @post("{id}")
  static createGoc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
