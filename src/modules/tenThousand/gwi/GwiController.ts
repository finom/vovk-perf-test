import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwis")
export default class GwiController {
  @operation({
    summary: "Get Gwis",
  })
  @get()
  static getGwis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwi",
  })
  @post("{id}")
  static createGwi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
