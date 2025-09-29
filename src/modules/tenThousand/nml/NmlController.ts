import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmls")
export default class NmlController {
  @operation({
    summary: "Get Nmls",
  })
  @get()
  static getNmls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nml",
  })
  @post("{id}")
  static createNml = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
