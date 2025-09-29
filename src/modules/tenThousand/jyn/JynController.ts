import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyns")
export default class JynController {
  @operation({
    summary: "Get Jyns",
  })
  @get()
  static getJyns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyn",
  })
  @post("{id}")
  static createJyn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
