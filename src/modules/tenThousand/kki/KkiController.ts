import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkis")
export default class KkiController {
  @operation({
    summary: "Get Kkis",
  })
  @get()
  static getKkis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kki",
  })
  @post("{id}")
  static createKki = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
