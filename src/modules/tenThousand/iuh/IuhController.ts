import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iuhs")
export default class IuhController {
  @operation({
    summary: "Get Iuhs",
  })
  @get()
  static getIuhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iuh",
  })
  @post("{id}")
  static createIuh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
