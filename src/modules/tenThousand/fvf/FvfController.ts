import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvfs")
export default class FvfController {
  @operation({
    summary: "Get Fvfs",
  })
  @get()
  static getFvfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvf",
  })
  @post("{id}")
  static createFvf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
