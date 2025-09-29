import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kis")
export default class KisController {
  @operation({
    summary: "Get Kis",
  })
  @get()
  static getKis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kis",
  })
  @post("{id}")
  static createKis = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
