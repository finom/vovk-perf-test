import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkcs")
export default class JkcController {
  @operation({
    summary: "Get Jkcs",
  })
  @get()
  static getJkcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkc",
  })
  @post("{id}")
  static createJkc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
