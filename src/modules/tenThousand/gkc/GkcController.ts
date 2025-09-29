import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkcs")
export default class GkcController {
  @operation({
    summary: "Get Gkcs",
  })
  @get()
  static getGkcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkc",
  })
  @post("{id}")
  static createGkc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
