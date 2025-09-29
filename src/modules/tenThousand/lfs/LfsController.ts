import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfs")
export default class LfsController {
  @operation({
    summary: "Get Lfs",
  })
  @get()
  static getLfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfs",
  })
  @post("{id}")
  static createLfs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
