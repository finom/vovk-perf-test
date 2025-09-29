import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xas")
export default class XaController {
  @operation({
    summary: "Get Xas",
  })
  @get()
  static getXas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xa",
  })
  @post("{id}")
  static createXa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
