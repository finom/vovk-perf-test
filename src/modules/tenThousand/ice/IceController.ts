import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ices")
export default class IceController {
  @operation({
    summary: "Get Ices",
  })
  @get()
  static getIces = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ice",
  })
  @post("{id}")
  static createIce = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
