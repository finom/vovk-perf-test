import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihis")
export default class IhiController {
  @operation({
    summary: "Get Ihis",
  })
  @get()
  static getIhis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihi",
  })
  @post("{id}")
  static createIhi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
