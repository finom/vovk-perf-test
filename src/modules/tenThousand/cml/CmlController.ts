import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmls")
export default class CmlController {
  @operation({
    summary: "Get Cmls",
  })
  @get()
  static getCmls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cml",
  })
  @post("{id}")
  static createCml = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
