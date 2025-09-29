import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzfs")
export default class MzfController {
  @operation({
    summary: "Get Mzfs",
  })
  @get()
  static getMzfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzf",
  })
  @post("{id}")
  static createMzf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
