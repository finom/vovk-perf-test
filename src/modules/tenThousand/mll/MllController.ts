import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlls")
export default class MllController {
  @operation({
    summary: "Get Mlls",
  })
  @get()
  static getMlls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mll",
  })
  @post("{id}")
  static createMll = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
