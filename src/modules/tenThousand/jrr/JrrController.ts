import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrrs")
export default class JrrController {
  @operation({
    summary: "Get Jrrs",
  })
  @get()
  static getJrrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrr",
  })
  @post("{id}")
  static createJrr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
