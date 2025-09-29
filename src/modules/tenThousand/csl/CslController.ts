import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csls")
export default class CslController {
  @operation({
    summary: "Get Csls",
  })
  @get()
  static getCsls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csl",
  })
  @post("{id}")
  static createCsl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
