import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibgs")
export default class IbgController {
  @operation({
    summary: "Get Ibgs",
  })
  @get()
  static getIbgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibg",
  })
  @post("{id}")
  static createIbg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
