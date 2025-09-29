import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnvs")
export default class GnvController {
  @operation({
    summary: "Get Gnvs",
  })
  @get()
  static getGnvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnv",
  })
  @post("{id}")
  static createGnv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
