import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egls")
export default class EglController {
  @operation({
    summary: "Get Egls",
  })
  @get()
  static getEgls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egl",
  })
  @post("{id}")
  static createEgl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
