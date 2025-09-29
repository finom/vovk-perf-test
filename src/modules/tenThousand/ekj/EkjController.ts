import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekjs")
export default class EkjController {
  @operation({
    summary: "Get Ekjs",
  })
  @get()
  static getEkjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekj",
  })
  @post("{id}")
  static createEkj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
