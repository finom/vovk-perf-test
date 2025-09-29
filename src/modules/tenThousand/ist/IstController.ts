import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ists")
export default class IstController {
  @operation({
    summary: "Get Ists",
  })
  @get()
  static getIsts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ist",
  })
  @post("{id}")
  static createIst = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
