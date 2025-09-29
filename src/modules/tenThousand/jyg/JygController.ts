import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jygs")
export default class JygController {
  @operation({
    summary: "Get Jygs",
  })
  @get()
  static getJygs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyg",
  })
  @post("{id}")
  static createJyg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
