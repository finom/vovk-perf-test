import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkps")
export default class NkpController {
  @operation({
    summary: "Get Nkps",
  })
  @get()
  static getNkps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkp",
  })
  @post("{id}")
  static createNkp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
