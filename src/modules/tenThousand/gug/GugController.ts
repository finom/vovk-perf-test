import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gugs")
export default class GugController {
  @operation({
    summary: "Get Gugs",
  })
  @get()
  static getGugs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gug",
  })
  @post("{id}")
  static createGug = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
