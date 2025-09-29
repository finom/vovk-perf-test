import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idbs")
export default class IdbController {
  @operation({
    summary: "Get Idbs",
  })
  @get()
  static getIdbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idb",
  })
  @post("{id}")
  static createIdb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
