import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibvs")
export default class IbvController {
  @operation({
    summary: "Get Ibvs",
  })
  @get()
  static getIbvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibv",
  })
  @post("{id}")
  static createIbv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
