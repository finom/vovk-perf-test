import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlls")
export default class NllController {
  @operation({
    summary: "Get Nlls",
  })
  @get()
  static getNlls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nll",
  })
  @post("{id}")
  static createNll = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
