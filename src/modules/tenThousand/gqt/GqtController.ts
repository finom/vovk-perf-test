import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqts")
export default class GqtController {
  @operation({
    summary: "Get Gqts",
  })
  @get()
  static getGqts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqt",
  })
  @post("{id}")
  static createGqt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
