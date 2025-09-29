import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adts")
export default class AdtController {
  @operation({
    summary: "Get Adts",
  })
  @get()
  static getAdts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adt",
  })
  @post("{id}")
  static createAdt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
