import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndgs")
export default class NdgController {
  @operation({
    summary: "Get Ndgs",
  })
  @get()
  static getNdgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndg",
  })
  @post("{id}")
  static createNdg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
