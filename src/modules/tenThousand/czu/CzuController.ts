import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czus")
export default class CzuController {
  @operation({
    summary: "Get Czus",
  })
  @get()
  static getCzus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czu",
  })
  @post("{id}")
  static createCzu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
