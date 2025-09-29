import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ioys")
export default class IoyController {
  @operation({
    summary: "Get Ioys",
  })
  @get()
  static getIoys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ioy",
  })
  @post("{id}")
  static createIoy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
