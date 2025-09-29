import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itvs")
export default class ItvController {
  @operation({
    summary: "Get Itvs",
  })
  @get()
  static getItvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itv",
  })
  @post("{id}")
  static createItv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
