import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iuvs")
export default class IuvController {
  @operation({
    summary: "Get Iuvs",
  })
  @get()
  static getIuvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iuv",
  })
  @post("{id}")
  static createIuv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
