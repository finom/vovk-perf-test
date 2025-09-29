import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikcs")
export default class IkcController {
  @operation({
    summary: "Get Ikcs",
  })
  @get()
  static getIkcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikc",
  })
  @post("{id}")
  static createIkc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
