import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmls")
export default class LmlController {
  @operation({
    summary: "Get Lmls",
  })
  @get()
  static getLmls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lml",
  })
  @post("{id}")
  static createLml = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
