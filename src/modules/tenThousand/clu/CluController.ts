import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clus")
export default class CluController {
  @operation({
    summary: "Get Clus",
  })
  @get()
  static getClus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clu",
  })
  @post("{id}")
  static createClu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
