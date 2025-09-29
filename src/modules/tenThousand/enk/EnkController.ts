import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enks")
export default class EnkController {
  @operation({
    summary: "Get Enks",
  })
  @get()
  static getEnks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Enk",
  })
  @post("{id}")
  static createEnk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
