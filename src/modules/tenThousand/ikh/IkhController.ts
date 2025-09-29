import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikhs")
export default class IkhController {
  @operation({
    summary: "Get Ikhs",
  })
  @get()
  static getIkhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikh",
  })
  @post("{id}")
  static createIkh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
