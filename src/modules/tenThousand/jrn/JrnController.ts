import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrns")
export default class JrnController {
  @operation({
    summary: "Get Jrns",
  })
  @get()
  static getJrns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrn",
  })
  @post("{id}")
  static createJrn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
