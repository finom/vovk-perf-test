import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nds")
export default class NdController {
  @operation({
    summary: "Get Nds",
  })
  @get()
  static getNds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nd",
  })
  @post("{id}")
  static createNd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
