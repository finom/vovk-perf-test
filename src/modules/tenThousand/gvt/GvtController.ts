import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvts")
export default class GvtController {
  @operation({
    summary: "Get Gvts",
  })
  @get()
  static getGvts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvt",
  })
  @post("{id}")
  static createGvt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
