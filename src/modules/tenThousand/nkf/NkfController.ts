import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkfs")
export default class NkfController {
  @operation({
    summary: "Get Nkfs",
  })
  @get()
  static getNkfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkf",
  })
  @post("{id}")
  static createNkf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
