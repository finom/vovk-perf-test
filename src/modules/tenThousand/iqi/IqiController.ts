import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqis")
export default class IqiController {
  @operation({
    summary: "Get Iqis",
  })
  @get()
  static getIqis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqi",
  })
  @post("{id}")
  static createIqi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
