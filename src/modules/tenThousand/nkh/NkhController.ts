import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkhs")
export default class NkhController {
  @operation({
    summary: "Get Nkhs",
  })
  @get()
  static getNkhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkh",
  })
  @post("{id}")
  static createNkh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
