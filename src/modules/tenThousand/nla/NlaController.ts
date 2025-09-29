import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlas")
export default class NlaController {
  @operation({
    summary: "Get Nlas",
  })
  @get()
  static getNlas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nla",
  })
  @post("{id}")
  static createNla = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
