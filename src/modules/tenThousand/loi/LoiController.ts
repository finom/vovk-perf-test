import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lois")
export default class LoiController {
  @operation({
    summary: "Get Lois",
  })
  @get()
  static getLois = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Loi",
  })
  @post("{id}")
  static createLoi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
