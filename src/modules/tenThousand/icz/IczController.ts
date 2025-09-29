import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iczs")
export default class IczController {
  @operation({
    summary: "Get Iczs",
  })
  @get()
  static getIczs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icz",
  })
  @post("{id}")
  static createIcz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
