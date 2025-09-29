import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvms")
export default class FvmController {
  @operation({
    summary: "Get Fvms",
  })
  @get()
  static getFvms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvm",
  })
  @post("{id}")
  static createFvm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
