import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("naes")
export default class NaeController {
  @operation({
    summary: "Get Naes",
  })
  @get()
  static getNaes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nae",
  })
  @post("{id}")
  static createNae = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
