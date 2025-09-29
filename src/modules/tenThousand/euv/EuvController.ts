import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("euvs")
export default class EuvController {
  @operation({
    summary: "Get Euvs",
  })
  @get()
  static getEuvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Euv",
  })
  @post("{id}")
  static createEuv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
