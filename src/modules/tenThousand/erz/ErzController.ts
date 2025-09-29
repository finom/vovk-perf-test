import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("erzs")
export default class ErzController {
  @operation({
    summary: "Get Erzs",
  })
  @get()
  static getErzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Erz",
  })
  @post("{id}")
  static createErz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
