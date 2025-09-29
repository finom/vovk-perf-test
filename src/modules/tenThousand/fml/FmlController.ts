import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmls")
export default class FmlController {
  @operation({
    summary: "Get Fmls",
  })
  @get()
  static getFmls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fml",
  })
  @post("{id}")
  static createFml = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
