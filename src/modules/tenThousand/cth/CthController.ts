import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cths")
export default class CthController {
  @operation({
    summary: "Get Cths",
  })
  @get()
  static getCths = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cth",
  })
  @post("{id}")
  static createCth = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
